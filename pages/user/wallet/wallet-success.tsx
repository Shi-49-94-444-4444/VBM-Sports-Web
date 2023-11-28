import Image from 'next/image'

const WalletSuccessPage = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center gap-10">
            <div className="relative">
                <Image
                    src="/images/success.png"
                    alt="success"
                    width={200}
                    height={200}
                    className="object-cover w-32 h-32"
                />
            </div>
            <div className="md:text-5xl text-3xl text-primary-blue-cus text-center font-semibold transition-all duration-500">
                Nạp tiền thành công!
            </div>
        </div>
    )
}

export default WalletSuccessPage