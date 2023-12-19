"use client"

import { useContext, useState } from "react";
import { DownMetalBtn, LoadingFullScreen, Search } from "../providers"
import { formatMoney, removeVietnameseTones } from "@/utils"
import { GlobalContext } from "@/contexts"
import { ManagementReport, ManagementReportData } from "@/types"
import useSWR from "swr";
import { AxiosClient } from "@/services"
import ReactPaginate from "react-paginate"
import Datepicker from "react-tailwindcss-datepicker"
import { endOfMonth, format, parse, startOfMonth } from "date-fns"
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineController, LineElement } from 'chart.js';
import Decimal from "decimal.js";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineController, LineElement)

interface TableReportProps {
    listItem: ManagementReportData[]
}

const listTitleUserManagement = [
    { title: "#" },
    { title: "Mã giao dịch" },
    { title: "Thời gian" },
    { title: "Trạng thái" },
    { title: "Thao tác" },
]

const fetcher = (url: string) => AxiosClient.get(url).then(res => res.data)

const TableReport: React.FC<TableReportProps> = ({ listItem }) => {
    return (
        <table className="table-auto border-separate border border-black border-opacity-10 rounded-lg text-sm sm:text-base md:text-lg text-gray-600 text-center table">
            <thead>
                <tr>
                    {listTitleUserManagement.map((item, index) => (
                        <th className={`
                                font-semibold 
                                py-3 
                                ${index < listTitleUserManagement.length - 1 ?
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
            <tbody className="text-base font-medium">
                {listItem.map((item, index) => (
                    <tr key={index}>
                        <td className="py-3 border-r border-black border-opacity-10">{index}</td>
                        <td className="py-3 border-r border-black border-opacity-10">{item.id}</td>
                        <td className="py-3 border-r border-black border-opacity-10">{item.time}</td>
                        <td className="py-3 border-r border-black border-opacity-10">{item.status}</td>
                        <td className="py-3 border-r border-black border-opacity-10">{item.type}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

const ReportManagement = () => {
    const [searchTerm, setSearchTerm] = useState<string>("")
    const [dateRange, setDateRange] = useState({
        startDate: format(startOfMonth(new Date()), 'MM/dd/yyyy'),
        endDate: format(endOfMonth(new Date()), 'MM/dd/yyyy')
    })

    const { user } = useContext(GlobalContext) || {}

    const { data: listIncoming, error, isLoading } = useSWR<ManagementReport>(dateRange.endDate && dateRange.startDate ? `/api/reports/${encodeURIComponent(dateRange.startDate)}&${encodeURIComponent(dateRange.endDate)}/report_income_Month` : null, fetcher, { refreshInterval: 10000 })

    const filteredIncoming = listIncoming && listIncoming.data && listIncoming.data.historyWalletModels.filter(item => item.time && removeVietnameseTones(item.time).includes(removeVietnameseTones(searchTerm)))

    const [currentPage, setCurrentPage] = useState(0)
    const itemsPerPage = 10
    const pageCount = Math.ceil(filteredIncoming ? filteredIncoming.length / itemsPerPage : 0)

    const handlePageChange = (selectedPage: { selected: number }) => {
        setCurrentPage(selectedPage.selected)
    }

    const startIndex = currentPage * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const visibleItems = filteredIncoming && filteredIncoming.length > 0 ? filteredIncoming.slice(startIndex, endIndex) : []

    const dataByDate = listIncoming && listIncoming.data.historyWalletModels.reduce((acc: any, item) => {
        const date = format(parse(item.time, "dd/MM/yyyy HH:mm", new Date()), "dd/MM/yyyy")
        // const date = format(parseExact(item.time), 'dd/MM/yyyy hh:mm')

        if (!acc[date]) {
            acc[date] = 0;
        }
        acc[date] += parseFloat(item.amount.toString())
        return acc
    }, {})

    const labels = listIncoming && listIncoming.data.historyWalletModels ? Object.keys(dataByDate) : []
    const data = listIncoming && listIncoming.data.historyWalletModels ? Object.values(dataByDate) : []

    if (user && user.role && user.role.toLowerCase() === "staff") {
        return (
            <div className="flex items-center justify-center md:text-4xl text-3xl text-primary-blue-cus font-semibold h-screen">
                Bạn không đủ quyền hạn!!!
            </div>
        )
    }

    return (
        <section className="relative flex flex-col px-6 py-10 gap-5">
            <div className="
                    flex 
                    flex-col 
                    text-gray-600 
                    gap-5
                    md:flex-row 
                    md:justify-between 
                    md:items-center 
                    md:gap-0
                    transition-all
                    duration-500
                "
            >
                <h1 className="font-semibold md:text-4xl text-3xl flex-shrink-0">
                    Quản lý doanh thu
                </h1>
            </div>
            <div className="relative py-2 md:w-1/2 justify-start w-full">
                <Datepicker
                    i18n={"vi"}
                    value={dateRange}
                    onChange={(NewDate: any) => {
                        const startDate = parse(NewDate.startDate, 'yyyy-MM-dd', new Date());
                        const endDate = parse(NewDate.endDate, 'yyyy-MM-dd', new Date());
                        if (startDate instanceof Date && !isNaN(startDate.getTime()) &&
                            endDate instanceof Date && !isNaN(endDate.getTime())) {
                            setDateRange({
                                startDate: format(startDate, 'MM/dd/yyyy'),
                                endDate: format(endDate, 'MM/dd/yyyy')
                            })
                        } else {
                            console.error('Invalid date');
                        }
                    }}
                    primaryColor={"blue"}
                    displayFormat={"DD/MM/YYYY"}
                    inputClassName="light w-full bg-[#F5F5F5] border-none py-3 px-6 focus:ring-0 rounded-lg"
                />
            </div>
            <div className="
                    flex 
                    flex-row
                    text-gray-600 
                    justify-between
                    transition-all
                    duration-500
                    flex-wrap
                "
            >
                <h1 className="font-semibold md:text-3xl text-2xl flex-shrink-0">
                    Biểu đồ doanh thu
                </h1>
                <div className="flex flex-row gap-5">
                    <div className="flex flex-row gap-3">
                        <div className="md:text-lg font-medium">
                            Số lượng:
                        </div>
                        <div className="text-primary-blue-cus md:text-2xl text-xl font-semibold">
                            {listIncoming && listIncoming.data.historyWalletModels.length > 0 ? listIncoming.data.historyWalletModels.length : 0}
                        </div>
                    </div>
                    <div className="flex flex-row gap-3">
                        <div className="md:text-lg font-medium">
                            Tổng:
                        </div>
                        <div className="text-primary-blue-cus md:text-2xl text-xl font-semibold">
                            {listIncoming && listIncoming.data.historyWalletModels.length > 0 ? formatMoney(new Decimal(listIncoming.data.total)) : formatMoney(new Decimal(0))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative w-full">
                {isLoading ? (
                    <div className="h-96 flex items-center justify-center">
                        <LoadingFullScreen loading={isLoading} />
                    </div>
                ) : !listIncoming || listIncoming.data.historyWalletModels.length === 0 ? (
                    <div className="flex items-center justify-center md:text-4xl text-3xl text-primary-blue-cus font-semibold h-96">
                        Không có doanh thu nào tồn tại
                    </div>
                ) : error ? (
                    <div className="flex items-center justify-center md:text-4xl text-3xl text-primary-blue-cus font-semibold h-96">
                        Lỗi API
                    </div>
                ) : (
                    <Line
                        data={{
                            labels: labels,
                            datasets: [{
                                label: 'Lịch sử ví',
                                data: data,
                                fill: false,
                                backgroundColor: 'rgb(75, 192, 192)',
                                borderColor: 'rgba(75, 192, 192, 0.2)',
                            }]
                        }}
                    />
                )}
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
                    transition-all
                    duration-500
                "
            >
                <h1 className="font-semibold md:text-3xl text-2xl flex-shrink-0">
                    Bảng doanh thu
                </h1>
                <div className="flex gap-3 flex-col md:flex-row transition-all duration-500 flex-wrap justify-end">
                    <DownMetalBtn onClick={() => { }} />
                    <div className="flex flex-col space-y-1 md:w-auto w-full transition-all duration-500">
                        <Search value={searchTerm} onChange={setSearchTerm} style="w-full" />
                    </div>
                </div>
            </div>
            {isLoading ? (
                <div className="h-96 flex items-center justify-center">
                    <LoadingFullScreen loading={isLoading} />
                </div>
            ) : !listIncoming || !filteredIncoming || listIncoming.data.historyWalletModels.length === 0 ? (
                <div className="flex items-center justify-center md:text-4xl text-3xl text-primary-blue-cus font-semibold h-96">
                    Không có doanh thu nào tồn tại
                </div>
            ) : error ? (
                <div className="flex items-center justify-center md:text-4xl text-3xl text-primary-blue-cus font-semibold h-96">
                    Lỗi API
                </div>
            ) : filteredIncoming && filteredIncoming.length === 0 ? (
                <div className="flex items-center justify-center md:text-4xl text-3xl text-primary-blue-cus font-semibold h-96">
                    Doanh thu trong khoảng này không tồn tại
                </div>
            ) : (
                <>
                    <TableReport listItem={visibleItems} />
                    {pageCount > 0 && (
                        <div className="flex justify-center mt-10 text-base font-semibold">
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
            )}
        </section>
    )
}

export default ReportManagement