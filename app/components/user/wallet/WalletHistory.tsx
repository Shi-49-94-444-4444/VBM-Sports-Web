import { formatMoney } from "@/utils"
import Decimal from "decimal.js"

const WalletHistory = () => {
    const listTitleHistoryWallet = [
        { title: "Ngày" },
        { title: "Thao tác" },
        { title: "Trạng thái" },
        { title: "Số tiền" },
    ]

    const listHistoryWallet = [
        { date: "13/10/2023", action: "Rút tiền", status: "Thành công", money: "100000" },
        { date: "13/10/2023", action: "Nạp tiền", status: "Thành công", money: "100000" },
        { date: "13/10/2023", action: "Rút tiền", status: "Thất bại", money: "100000" },
        { date: "13/10/2023", action: "Nạp tiền", status: "Thất bại", money: "100000" },
    ]

    return (
        <div className="flex flex-col gap-5 text-gray-600">
            <div className="font-semibold text-3xl">
                Lịch sử giao dịch
            </div>
            <table className="table-auto border-separate border border-black border-opacity-10 rounded-2xl text-xl text-center max-h-full">
                <thead>
                    <tr>
                        {listTitleHistoryWallet.map((item, index) => (
                            <th className={`
                                                font-semibold 
                                                py-5 
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
                    {listHistoryWallet.map((item, index) => (
                        <tr key={index}>
                            <td className="py-5 border-r border-black border-opacity-10">{item.date}</td>
                            <td className="py-5 border-r border-black border-opacity-10">{item.action}</td>
                            <td className="py-5 border-r border-black border-opacity-10">{item.status}</td>
                            <td className="py-5">
                                {item.status === "Thất bại" ? (
                                    formatMoney(new Decimal(item.money))
                                ) : item.action === "Rút tiền" && item.status === "Thành công" ? (
                                    <span className="text-red-500">- {formatMoney(new Decimal(item.money))}</span>
                                ) : item.action === "Nạp tiền" && item.status === "Thành công" ? (
                                    <span className="text-green-500">+ {formatMoney(new Decimal(item.money))}</span>
                                ) : (
                                    formatMoney(new Decimal(item.money))
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default WalletHistory