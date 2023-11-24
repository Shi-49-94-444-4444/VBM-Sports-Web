import { Container, TransactionItems } from '@/app/components'
import Layout from '@/app/layout'
import { getListTransaction } from '@/services'
import { ListTransaction } from '@/types'
import Custom500 from '../500'
import Custom404 from '../404'
import * as jose from 'jose'
import cookie from 'cookie'
import Image from 'next/image'

export async function getServerSideProps(context: any) {
    const cookies = cookie.parse(context.req.headers.cookie || '')
    const token = cookies["token"]

    const secret = new TextEncoder().encode(process.env.JWT_SECRET)

    let id: string | null = null
    if (token) {
        const { payload } = await jose.jwtVerify(token, secret)
        const { AccountId } = payload as { AccountId: string }
        id = AccountId
    }

    try {
        const listTransaction = await getListTransaction(id ? id : "0")

        return {
            props: {
                listTransaction,
            },
        }
    } catch (error) {
        //console.log(error)
        return {
            props: {
                internalError: true
            }
        }
    }
}

const TransactionDetailPage = ({ listTransaction, internalError }: { listTransaction: ListTransaction, internalError?: boolean }) => {
    if (internalError) {
        return <Custom500 />
    }

    return (
        <Layout>
            <Container>
                <div className="relative py-10">
                    <div className="flex flex-col">
                        <div className="flex items-center justify-center text-4xl text-gray-600 font-semibold pb-10">
                            Chi tiết thanh toán
                        </div>
                        {listTransaction.data.length === 0 ? (
                            <div className="relative h-screen flex flex-col items-center justify-center gap-5 text-primary-blue-cus font-semibold">
                                <div className="flex space-x-3 items-center flex-wrap justify-center transition-all duration-500">
                                    <h1 className="md:text-5xl text-3xl transition-all duration-500">Bạn chưa có hóa đơn nào cả!</h1>
                                    <div className="relative">
                                        <Image
                                            src="/images/sad.gif"
                                            alt="Gif"
                                            width={100}
                                            height={100}
                                            className="object-contain md:w-32 md:h-32 h-20 w-20 transition-all duration-500"
                                        />
                                    </div>
                                </div>
                                <p className="md:text-3xl text-xl text-center transition-all duration-500">Vui lòng thực hiện giao dịch để có hóa đơn</p>
                            </div>
                        ) : (
                            <TransactionItems listItem={listTransaction.data} />
                        )}
                    </div>
                </div>
            </Container>
        </Layout>
    )
}

export default TransactionDetailPage