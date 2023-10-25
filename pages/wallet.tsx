import { Container } from '@/app/components';
import Layout from '@/app/layout';
import { GlobalContext } from '@/contexts';
import { formatMoney } from '@/utils';
import Decimal from 'decimal.js';
import Image from 'next/image';
import { useContext } from 'react';

const WalletPage = () => {

    const { user } = useContext(GlobalContext) || {}

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
        <Layout>
            <Container>
                <div className="relative md:py-10 py-5">
                    <div className="flex flex-col md:gap-10 gap-5">
                        <div className="flex flex-col gap-3 md:gap-0 md:flex-row justify-between items-center py-10 px-5 w-full md:bg-[#F5F5F5] md:border md:border-black md:border-opacity-10 md:rounded-lg">
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
                                    <p className="font-semibold text-3xl">
                                        {formatMoney(new Decimal(user?.balance ?? 0))}
                                    </p>
                                </section>
                            </div>
                            <div className="flex space-x-3 h-full md:py-0 md:px-0 p-5 md:bg-white md:border-none bg-[#F5F5F5] border border-black border-opacity-10 md:rounded-none rounded-lg">
                                <button className="flex flex-col h-full w-36 py-2 items-center justify-center bg-primary-blue-cus text-white rounded-lg">
                                    <div className="relative flex-shrink-0">
                                        <Image
                                            src="/images/withdraw.png"
                                            alt="withdraw"
                                            height={60}
                                            width={60}
                                            className="object-cover h-12 w-12"
                                        />
                                    </div>
                                    <div className="font-semibold text-lg">
                                        Rút tiền
                                    </div>
                                </button>
                                <button className="flex flex-col h-full w-36 py-2 items-center justify-center bg-primary-blue-cus text-white rounded-lg">
                                    <div className="relative flex-shrink-0">
                                        <Image
                                            src="/images/recharge.png"
                                            alt="withdraw"
                                            height={60}
                                            width={60}
                                            className="object-cover h-12 w-12"
                                        />
                                    </div>
                                    <div className="font-semibold text-lg">
                                        Nạp tiền
                                    </div>
                                </button>
                            </div>
                        </div>
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
                    </div>
                </div>
            </Container>
        </Layout>
    )
}

export default WalletPage