import { Container } from '@/app/components'
import Layout from '@/app/layout'
import Image from 'next/image'
import Link from 'next/link'

const WalletSuccessPage = () => {
    return (
        <Layout>
            <Container>
                <div className="h-screen flex flex-col items-center justify-center gap-5">
                    <div className="relative">
                        <Image
                            src="/images/error.png"
                            alt="error"
                            width={200}
                            height={200}
                            className="object-cover w-32 h-32"
                        />
                    </div>
                    <div className="md:text-5xl text-3xl text-primary-blue-cus text-center font-semibold transition-all duration-500">
                        Nạp tiền thất bại!
                    </div>
                    <div className="flex gap-5">
                        <Link href="/" className="bg-white text-primary-blue-cus py-3 px-5 md:px-10 text-xl md:text-2xl font-semibold border border-primary-blue-cus rounded-xl transition-all duration-500">
                            Trang chủ
                        </Link>
                        <Link href="/user/wallet" className="bg-primary-blue-cus text-white py-3 px-5 md:px-10 text-xl md:text-2xl font-semibold border border-primary-blue-cus rounded-xl transition-all duration-500">
                            Ví tiền
                        </Link>
                    </div>
                </div>
            </Container>
        </Layout>
    )
}

export default WalletSuccessPage