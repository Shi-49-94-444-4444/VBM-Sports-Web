"use client"

import { AxiosClient } from "@/services"
import { ListProduct } from "@/types"
import { useContext } from "react"
import { BiSearch } from "react-icons/bi"
import useSWR from "swr"
import SearchResult from "./SearchResult"
import { GlobalContext } from "@/contexts"

const fetcher = (url: string) => AxiosClient.get(url).then(res => res.data)

const SearchBar = () => {
    const { setSearchValue, searchValue, setSearchResults, searchResults } = useContext(GlobalContext) || {}

    const { data: listProduct } = useSWR<ListProduct[]>('/api/posts/GetListPost', fetcher)

    const fetchValue = async (value: string) => {
        if (value.trim() === "") {
            if (setSearchResults) setSearchResults([]);
        } else {
            const filterResult = listProduct?.filter((result) => {
                return result.title?.toLowerCase().includes(value.toLowerCase())
            })

            if (setSearchResults) setSearchResults(filterResult ?? [])
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (setSearchValue) setSearchValue(e.target.value)
        fetchValue(e.target.value)
    }

    const handleClearInput = () => {
        if (setSearchValue) setSearchValue("");
        fetchValue("")
    }

    return (
        <div className="
                box-border 
                block 
                transition 
                duration-300 
                mb-1
                lg:flex
                md:mb-0
            "
        >
            <div className="
                    box-border 
                    flex-grow-[2px] 
                    transition 
                    duration-300
                "
            >
                <form
                    role="search"
                    className="
                        relative 
                        flex 
                        flex-row 
                        items-center
                    "
                >
                    <div className="
                            bg-search-cus 
                            rounded-full 
                            cursor-default 
                            py-1 
                            px-3 
                            static 
                            w-full 
                            z-[1000]
                            lg:w-auto
                            lg:absolute
                            lg:right-0
                        "
                    >
                        <div className="
                                box-border 
                                relative 
                                transition 
                                duration-300
                            "
                        >
                            <div className="
                                    bg-transparent 
                                    border-none 
                                    cursor-pointer
                                "
                            >
                                <div className="
                                        box-border 
                                        flex 
                                        items-center 
                                        transition 
                                        duration-300
                                    "
                                >
                                    <div className="
                                            inline-flex 
                                            items-center 
                                            cursor-pointer
                                        "
                                    >
                                        <BiSearch size={24} />
                                    </div>
                                    <input
                                        className="
                                            lg:w-auto
                                            w-full 
                                            bg-search-cus 
                                            outline-none 
                                            border-none
                                            focus:ring-0
                                            font-medium 
                                            text-base
                                            transition 
                                            duration-300 
                                            z-[900] 
                                            pl-2
                                        "
                                        placeholder="Tìm Kiếm"
                                        value={searchValue ?? ""}
                                        onChange={handleInputChange}
                                    />
                                    <button className="inline-flex text-2xl font-medium" type="button" onClick={handleClearInput}>
                                        &times;
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <SearchResult results={searchResults ?? []} />
            </div>
        </div>
    )
}

export default SearchBar