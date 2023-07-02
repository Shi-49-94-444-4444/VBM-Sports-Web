import Image from "next/image"

const BannerImage = () => {
    return (
        <div className="col-span-3 absolute w-3/4 h-full bottom-0 right-0">
            <div className="h-full flex justify-end">
                <Image
                    src="/images/banner.png"
                    alt="Your Image"
                    layout="responsive"
                    objectFit="contain"
                    objectPosition="bottom"
                    height={400}
                    width={400}
                />
            </div>
        </div>
    )
}

export default BannerImage