import Image from "next/image"

const BannerImage = () => {
    return (
        <div className="
                col-span-3 
                absolute 
                w-2/4 
                h-full 
                bottom-0 
                right-10 
                hidden
                lg:block
                transition-all
                duration-300
            "
        >
            <div className="
                    h-full 
                    flex 
                    justify-end
                    transition-all
                    duration-300
                "
            >
                <Image
                    src="/images/banner.png"
                    alt="Your Image"
                    className="object-contain object-bottom"
                    fill
                />
            </div>
        </div>
    )
}

export default BannerImage