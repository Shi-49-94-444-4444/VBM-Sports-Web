import { navlinks } from '@/constant'
import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import IsMobileItem from './IsMobileItem'

const IsMobileNavLink = () => {
    const [openItemId, setOpenItemId] = useState<number[]>([]);

    const handleMenuToggle = (itemId: number) => {
        if (openItemId.includes(itemId)) {
            setOpenItemId(openItemId.filter((id) => id !== itemId));
        } else {
            setOpenItemId([...openItemId, itemId]);
        }
    };

    return (
        <div
            data-tag="dropdown-menu"
            className="
                bg-white
                px-4
                md:px-6
                py-2
                w-screen
                z-[-1]
                overflow-auto
                font-medium
                text-lg
            "
        >
            <ul className="
                    list-none 
                    pr-6 
                    md:pr-10 
                    space-y-2
                "
            >
                {navlinks.map((item) =>
                    <li 
                        key={item.id} 
                        className="
                            border-b-2 
                            py-2 
                        "
                    >
                        {item.label !== "Giá tiền" ? (
                            <button
                                className="
                                    flex 
                                    flex-row 
                                    items-center 
                                    justify-between 
                                    h-4 
                                    w-full
                                    hover:bg-slate-200
                                    px-4
                                    py-6
                                "
                                onClick={() => handleMenuToggle(item.id)}
                                aria-haspopup="true"
                                aria-expanded={openItemId.includes(item.id) ? 'true' : 'false'}
                                data-tag="dropdown-menu-item"
                            >
                                <span>{item.label}</span>
                                <span>
                                    <div className="inline-flex items-center">
                                        <AiOutlineDown size={16} />
                                    </div>
                                </span>
                            </button>
                        ) : (
                            <Link href={item.href || ""} legacyBehavior>
                                <div className="
                                        flex 
                                        flex-row 
                                        items-center 
                                        justify-between 
                                        h-4 
                                        w-full
                                        hover:bg-slate-200
                                        cursor-pointer
                                        px-4
                                        py-6
                                    "
                                >
                                    <span>{item.label}</span>
                                </div>
                            </Link>
                        )}
                        {openItemId.includes(item.id) && <IsMobileItem linkItems={item.linkItems} />}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default IsMobileNavLink