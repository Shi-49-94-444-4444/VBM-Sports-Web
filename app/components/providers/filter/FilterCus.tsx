import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
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
                    justify-between
                    items-center 
                    w-full 
                    text-bg
                    p-3
                    rounded-md
                    transition-all
                    duration-500
                    focus:outline-none
                    text-gray-600
                "
                type="button"
                id="dropdownMenuButton"
                data-dropdown-toggle="dropdown"
                aria-expanded="false"
                onClick={toggleDropdown}
            >
                {title}
                <span>
                    {isDropdownOpen ?
                        <AiFillCaretUp
                            size={15}
                            className="text-gray-400"
                        />
                        :
                        <AiFillCaretDown
                            size={15}
                            className="text-gray-400"
                        />}
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
                        focus:outline-none
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
                                    py-3 
                                    whitespace-nowrap
                                    text-gray-600
                                    focus:outline-none
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