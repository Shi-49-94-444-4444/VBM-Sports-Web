"use client"

import { useContext, useEffect, useState } from "react"
import { Button, DownMetalBtn, Input, Loading, LoadingFullScreen, Search } from "../providers"
import { AxiosClient, updateSettingAdminService } from "@/services"
import useSWR from "swr";
import { GlobalContext, SettingNames } from "@/contexts"
import { AdminSetting, AdminSettingListData, HistoryTransaction, HistoryTransactionData, WalletUserData } from "@/types";
import { Status, formatMoney } from "@/utils"
import ReactPaginate from "react-paginate"
import * as XLSX from 'xlsx'
import Decimal from "decimal.js"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import Image from "next/image";

interface TableHistoryWalletProps {
    listItem: HistoryTransactionData[],
    currentPage: number,
    itemsPerPage: number,
}

const fetcher = (url: string) => AxiosClient.get(url).then(res => res.data)

const listTitleHistoryWallet = [
    { title: "#" },
    { title: "Thời gian" },
    { title: "Thao tác" },
    { title: "Trạng thái" },
    { title: "Số tiền" },
]

const listTitleSetting = [
    { settingName: SettingNames.PostingFee, label: "Phí đăng bài (VND)", isMoney: true },
    { settingName: SettingNames.BookingFee, label: "Phí hoa hồng (% theo giao dịch)" },
    { settingName: SettingNames.FreeNumberPost, label: "Lượt miên phí đăng bài/tháng" },
    { settingName: SettingNames.BoostPostFree, label: "Phí đẩy bài", isMoney: true },
]

const exportToExcel = (listItem: HistoryTransactionData[]) => {
    const headers = listTitleHistoryWallet.slice(1, 5).map(item => item.title)

    const data = listItem.map(item => [
        item.time,
        item.type,
        item.status,
        item.amount
    ])

    data.unshift(headers)

    const worksheet = XLSX.utils.aoa_to_sheet(data);

    const workbook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1")

    XLSX.writeFile(workbook, "Quản lý lịch sử giao dịch.xlsx")
}

const TableHistoryWallet: React.FC<TableHistoryWalletProps> = ({ listItem, currentPage, itemsPerPage }) => {
    const startIndex = currentPage * itemsPerPage

    return (
        <table className="table-auto border-separate border border-black text-gray-600 border-opacity-10 rounded-2xl text-sm sm:text-lg md:text-xl text-center">
            <thead>
                <tr>
                    {listTitleHistoryWallet.map((item, index) => (
                        <th className={`
                                font-semibold 
                                py-3 
                                md:whitespace-nowrap
                                px-1
                                ${index < listTitleHistoryWallet.length - 1 ?
                                "border-r border-b border-black border-opacity-10" :
                                "border-b"
                            }`}
                            key={index}
                        >
                            {item.title}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {listItem.map((item, index) => {
                    const statusObject = Status.find(obj => obj.statusEN.toLowerCase() === item.status.toLowerCase())
                    const totalIndex = startIndex + index + 1

                    return (
                        <tr key={index}>
                            <td className="py-2 border-r border-black border-opacity-10">{totalIndex}</td>
                            <td className="py-2 border-r border-black border-opacity-10">{item.time}</td>
                            <td className="py-2 border-r border-black border-opacity-10">{item.type}</td>
                            <td className="py-2 border-r border-black border-opacity-10 font-semibold">
                                {statusObject ? (
                                    item.status.toLowerCase() === "success" ? (
                                        <span className="text-green-500">{statusObject.statusVI}</span>
                                    ) : (
                                        <span className="text-red-500">{statusObject.statusVI}</span>
                                    )
                                ) : (
                                    <span className="text-red-500">Unknown Status</span>
                                )}
                            </td>
                            <td className="py-2 font-semibold">
                                {item.amount.toString().startsWith("-") ? (
                                    <span className="text-red-500">{formatMoney(new Decimal(item.amount))}</span>
                                ) : (
                                    <span className="text-green-500">{formatMoney(new Decimal(item.amount))}</span>
                                )}
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

const AdminHome = () => {
    const [searchTerm, setSearchTerm] = useState<string>("")
    const [disable, setDisable] = useState<boolean>(true)

    const { user, isLoadingModal, setIsLoadingModal } = useContext(GlobalContext) || {}

    const { data: listHistoryWallet, error, isLoading } = useSWR<HistoryTransaction>(user ? `/api/wallet/user/${user.id}/history` : null, fetcher, { refreshInterval: 10000 })
    const { data: listSetting, mutate } = useSWR<AdminSetting>(`/api/Settings/get_listSetting`, fetcher, { refreshInterval: 10000 })
    const { data: userWallet } = useSWR<WalletUserData>(user ? `/api/wallet/${user.id}/user_wallet` : null, fetcher, { refreshInterval: 5000 })

    const { register, handleSubmit, setValue, watch } = useForm<AdminSettingListData>({
        defaultValues: {
            listSettingData: listSetting?.data,
        }
    })

    useEffect(() => {
        if (listSetting && listSetting.data.length > 0) {
            setValue("listSettingData", listSetting.data)
        }
    }, [listSetting, setValue])

    const onSubmit = async (data: AdminSettingListData) => {
        if (setIsLoadingModal) setIsLoadingModal(true);

        const dataAll = watch();

        for (const [settingName, settingValue] of Object.entries(dataAll)) {
            const setting = data.listSettingData.find(item => item.settingName === settingName);

            // Kiểm tra nếu settingValue không phải undefined và setting tồn tại
            if (settingValue !== undefined && setting) {
                if (settingName === SettingNames.PostingFee && (settingValue < 0 || settingValue > 1000000)) {
                    toast.error("Phí đăng bài phải từ 0-1.000.000 VNĐ", {
                        position: toast.POSITION.TOP_RIGHT
                    });
                    if (setIsLoadingModal) setIsLoadingModal(false);
                    return;
                }

                if (settingName === SettingNames.BookingFee && (settingValue < 0 || settingValue > 100)) {
                    toast.error("Phí hoa hồng phải từ 0%-100%", {
                        position: toast.POSITION.TOP_RIGHT
                    });
                    if (setIsLoadingModal) setIsLoadingModal(false);
                    return;
                }

                if (settingName === SettingNames.FreeNumberPost && (settingValue < 0 || settingValue > 10)) {
                    toast.error("Lượt miễn phí từ 0-10 lượt/tháng", {
                        position: toast.POSITION.TOP_RIGHT
                    });
                    if (setIsLoadingModal) setIsLoadingModal(false);
                    return;
                }

                if (settingName === SettingNames.BoostPostFree && (settingValue < 0 || settingValue > 1000000)) {
                    toast.error("Phí đẩy bài phải từ 0-1.000.000 VNĐ", {
                        position: toast.POSITION.TOP_RIGHT
                    });
                    if (setIsLoadingModal) setIsLoadingModal(false);
                    return;
                }

                // console.log(setting.settingId, settingValue)

                const res = await updateSettingAdminService({
                    SettingId: setting.settingId,
                    SettingAmount: settingValue
                });

                // console.log(res);

                if (res.data === null) {
                    toast.error(res.message, {
                        position: toast.POSITION.TOP_RIGHT
                    });
                    return;
                }
            }
        }

        toast.success("Cập nhập thành công", {
            position: toast.POSITION.TOP_RIGHT
        });

        mutate();
        setDisable(true)

        if (setIsLoadingModal) setIsLoadingModal(false)
    };

    const filterHistoryWallet = listHistoryWallet && listHistoryWallet.data && listHistoryWallet.data.filter(history => history.time && history.time.trim().toLowerCase().includes(searchTerm.trim().toLowerCase()))

    const [currentPage, setCurrentPage] = useState(0)
    const itemsPerPage = 8
    const pageCount = Math.ceil(filterHistoryWallet ? filterHistoryWallet.length / itemsPerPage : 0)

    const handlePageChange = (selectedPage: { selected: number }) => {
        setCurrentPage(selectedPage.selected)
    }

    const startIndex = currentPage * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const visibleItems = filterHistoryWallet && filterHistoryWallet.length > 0 ? filterHistoryWallet.slice(startIndex, endIndex) : []

    if (user && user.role && user.role.toLowerCase() === "staff") {
        return (
            <div className="flex items-center justify-center md:text-4xl text-3xl text-primary-blue-cus font-semibold h-screen">
                Bạn không đủ quyền hạn!!!
            </div>
        )
    }

    return (
        <div className="relative flex flex-col px-6 py-10 gap-5">
            <div className="flex md:flex-row flex-col gap-5 justify-between items-start transition-all duration-500">
                <div className="
                        flex 
                        flex-col 
                        text-gray-600 
                        gap-5
                        md:flex-row 
                        md:justify-between 
                        md:items-center 
                        md:gap-0
                    "
                >
                    <h1 className="font-semibold md:text-4xl text-3xl flex-shrink-0">
                        Quản lý chung
                    </h1>
                </div>
                <div className="flex space-x-4">
                    <div className="relative flex-shrink-0 h-full">
                        <Image
                            src="/images/walletIcon.png"
                            alt="walletIcon"
                            width={200}
                            height={100}
                            className="object-contain w-20 h-full"
                        />
                    </div>
                    <section className="flex flex-col gap-3">
                        <label className="font-semibold text-2xl">
                            Số dư ví
                        </label>
                        <p className="font-semibold text-3xl ease-in-out transition-all duration-500">
                            {formatMoney(new Decimal(userWallet ? userWallet.data.balance : 0))}
                        </p>
                    </section>
                </div>
            </div>
            <div className="
                    flex 
                    flex-col 
                    text-gray-600 
                    gap-5
                    md:flex-row 
                    md:justify-between 
                    md:items-center 
                    md:gap-0
                "
            >
                <h1 className="font-semibold md:text-3xl text-2xl flex-shrink-0">
                    Các khoản tiền
                </h1>
            </div>
            <form className="md:grid md:grid-cols-2 flex flex-col gap-3 transition-all duration-500" onSubmit={handleSubmit(onSubmit)}>
                {listSetting && listSetting.data.map((item) => {
                    const title = listTitleSetting.find(title => title.settingName === item.settingName)

                    return (
                        <div className="col-span-1 flex flex-col gap-3" key={item.settingId} >
                            <label className="text-gray-600 text-xl font-semibold">
                                {title?.label}
                            </label>
                            <Input
                                type="number"
                                isMoney={title?.isMoney}
                                name={item.settingName}
                                id={item.settingName}
                                register={register}
                                defaultValue={item.settingAmount}
                                disabled={disable}
                            />
                        </div>
                    )
                })}
                <div className=" col-span-2 flex flex-row justify-end gap-3 relative py-3">
                    {disable ? (
                        <div className="relative">
                            <Button
                                title="Chỉnh sữa"
                                style="px-5 text-xl"
                                onClick={(event) => {
                                    event.preventDefault()
                                    setDisable(!disable)
                                }}
                            />
                        </div>
                    ) : (
                        isLoadingModal ? (
                            <div className="relative">
                                <Button
                                    title={<Loading loading={isLoadingModal} color="white" />}
                                    style="px-12 text-xl"
                                    isHover={false}
                                />
                            </div>
                        ) : (
                            <div className="relative">
                                <Button
                                    title="Lưu"
                                    style="px-12 text-xl"
                                    type="submit"
                                />
                            </div>
                        )
                    )}
                </div>
            </form >
            <div className="
                    flex 
                    flex-col 
                    text-gray-600 
                    gap-5
                    md:flex-row 
                    md:justify-between 
                    md:items-center 
                    md:gap-0
                "
            >
                <h1 className="font-semibold md:text-3xl text-2xl flex-shrink-0">
                    Quản lý ví
                </h1>
                <div className="flex gap-3 flex-col md:flex-row justify-end flex-wrap transition-all duration-500">
                    <DownMetalBtn onClick={() => {
                        if (listHistoryWallet)
                            exportToExcel(listHistoryWallet.data)
                    }} />
                    <div className="flex flex-col space-y-1 md:w-auto w-full transition-all duration-500">
                        <Search value={searchTerm} onChange={setSearchTerm} style="w-full" />
                    </div>
                </div>
            </div>
            {
                isLoading ? (
                    <div className="h-96 flex items-center justify-center">
                        <LoadingFullScreen loading={isLoading} />
                    </div>
                ) : !listHistoryWallet || !filterHistoryWallet || listHistoryWallet.data.length === 0 ? (
                    <div className="flex items-center justify-center md:text-4xl text-3xl text-primary-blue-cus font-semibold h-96">
                        Không có lịch sử giao dịch!
                    </div>
                ) : error ? (
                    <div className="flex items-center justify-center md:text-4xl text-3xl text-primary-blue-cus font-semibold h-96">
                        Lỗi API
                    </div>
                ) : filterHistoryWallet && filterHistoryWallet.length === 0 ? (
                    <div className="flex items-center justify-center md:text-4xl text-3xl text-primary-blue-cus font-semibold h-96">
                        Giao dịch này không tồn tại!
                    </div>
                ) : (
                    <>
                        <TableHistoryWallet listItem={visibleItems} currentPage={currentPage} itemsPerPage={itemsPerPage}/>
                        {pageCount > 0 && (
                            <div className="flex justify-center mt-5 text-base font-semibold">
                                <ReactPaginate
                                    pageCount={pageCount}
                                    pageRangeDisplayed={4}
                                    marginPagesDisplayed={1}
                                    onPageChange={handlePageChange}
                                    containerClassName="pagination flex p-0 m-0"
                                    activeClassName="text-gray-400 bg-gray-200"
                                    previousLabel="<"
                                    nextLabel=">"
                                    pageClassName="border-2 px-4 py-2"
                                    previousClassName="border-2 px-4 py-2"
                                    nextClassName="border-2 px-4 py-2"
                                    pageLinkClassName="pagination-link"
                                    nextLinkClassName="pagination-link"
                                    breakClassName="pagination-items border-2 px-3 py-2"
                                />
                            </div>
                        )}
                    </>
                )
            }
        </div >
    )
}

export default AdminHome