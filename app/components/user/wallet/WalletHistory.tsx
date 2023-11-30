"use client"

import { GlobalContext } from "@/contexts"
import { AxiosClient } from "@/services"
import { HistoryTransaction } from "@/types"
import { formatMoney } from "@/utils"
import Decimal from "decimal.js"
import { useContext, useState } from "react"
import useSWR from "swr"
import { DownMetalBtn, LoadingFullScreen, Search } from "../../providers"

const fetcher = (url: string) => AxiosClient.get(url).then(res => res.data)

const WalletHistory = () => {
    const [searchTerm, setSearchTerm] = useState<string>("")
    const { user } = useContext(GlobalContext) || {}

    const listTitleHistoryWallet = [
        { title: "Thời gian" },
        { title: "Thao tác" },
        { title: "Trạng thái" },
        { title: "Số tiền" },
    ]

    const { data: listHistoryWallet, isLoading } = useSWR<HistoryTransaction>(user && user.id ? `/api/wallet/user/${user.id}/history` : null, fetcher, { refreshInterval: 1000 })

    const filterHistoryWallet = listHistoryWallet && listHistoryWallet.data && listHistoryWallet.data.filter(history => history.time && history.time.trim().toLowerCase().includes(searchTerm.trim().toLowerCase()))

    return (
        <div className="flex flex-col gap-5 text-gray-600">
            <div className="flex lg:flex-row flex-col lg:items-center lg:justify-between gap-3 transition-all duration-500">
                <div className="font-semibold text-3xl">
                    Lịch sử giao dịch
                </div>
                <div className="flex gap-3 flex-col md:flex-row lg:justify-normal justify-between transition-all duration-500">
                    <DownMetalBtn />
                    <div className="flex flex-col space-y-1 md:w-auto w-full transition-all duration-500">
                        <Search value={searchTerm} onChange={setSearchTerm} style="w-full" />
                        {filterHistoryWallet && filterHistoryWallet.length === 0 && (
                            <p className="text-lg text-red-500 font-medium h-3">
                                Lịch sử này không tồn tại!
                            </p>
                        )}
                    </div>
                </div>
            </div>
            {isLoading ? (
                <LoadingFullScreen loading={isLoading} />
            ) : !listHistoryWallet || !filterHistoryWallet || listHistoryWallet.data.length === 0 ? (
                <div className="flex items-center justify-center">
                    Bạn chưa thực hiện giao dịch nào cả!
                </div>
            ) : (
                <table className="table-auto border-separate border border-black border-opacity-10 rounded-2xl text-xl text-center min-h-full max-h-screen overflow-auto">
                    <thead>
                        <tr>
                            {listTitleHistoryWallet.map((item, index) => (
                                <th className={`
                                    font-semibold 
                                    py-3 
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
                        {filterHistoryWallet.map((item, index) => (
                            <tr key={index}>
                                <td className="py-2 border-r border-black border-opacity-10">{item.time}</td>
                                <td className="py-2 border-r border-black border-opacity-10">Nạp tiền</td>
                                <td className="py-2 border-r border-black border-opacity-10 text-green-500 font-semibold">{item.status}</td>
                                <td className="py-2 font-semibold">
                                    {item.amount.toString().startsWith("-") ? (
                                        <span className="text-red-500">{formatMoney(new Decimal(item.amount))}</span>
                                    ) : (
                                        <span className="text-green-500">{formatMoney(new Decimal(item.amount))}</span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default WalletHistory