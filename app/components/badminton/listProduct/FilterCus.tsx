import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import Link from "next/link";
import { useState } from "react";
import { FilterCusProps } from "@/types";

const FilterCus: React.FC<FilterCusProps> = ({
    id,
    title,
    listItem
}) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <li className="relative py-2" key={id}>
            <button className="
                    border-solid
                    border-2 
                    flex 
                    whitespace-nowrap 
                    justify-evenly 
                    items-center 
                    uppercase 
                    w-full 
                    text-bg
                    p-3
                    shadow-lg
                    transition-all
                    duration-500
                    focus:outline-none
                "
                type="button"
                id="dropdownMenuButton"
                data-dropdown-toggle="dropdown"
                aria-expanded="false"
                onClick={toggleDropdown}
            >
                {title}
                <span>
                    {isDropdownOpen ? <AiOutlineUp size={15} /> : <AiOutlineDown size={15} />}
                </span>
            </button>
            <div id="dropdown"
                className={`
                        ${isDropdownOpen ? 'block' : 'hidden'}
                        z-10 
                        bg-white
                    `}
            >
                <ul className="
                        py-2 
                        text-bg 
                        font-semibold 
                        uppercase
                    "
                    aria-labelledby="dropdownMenuButton"
                >
                    {listItem.map((item) => (
                        <li key={item.id}>
                            <Link
                                href={item.src}
                                className="
                                    border-b-2 
                                    border-solid 
                                    block 
                                    px-4 
                                    py-4 
                                    whitespace-nowrap
                                "
                            >
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </li>
    )
}

export default FilterCus