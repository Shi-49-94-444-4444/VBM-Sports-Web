"use client"

import { Images } from "@/types"
import { validateURLProduct } from "@/utils"
import Image from "next/image"

const ImageItemOther: React.FC<Images> = ({
    id,
    src
}) => {
    return (
        <div className="
                relative
                h-full
                transition
                duration-300
                overflow-hidden
            "
        >
            <div className="
                    absolute 
                    top-0 
                    left-0 
                    w-full 
                    h-full
                "
                key={id ?? "1"}
            >
                <Image
                    src={validateURLProduct(src)}
                    alt="QuickList"
                    className="rounded-lg object-cover"
                    fill
                    draggable="false"
                />
            </div>
        </div>
    )
}

export default ImageItemOther