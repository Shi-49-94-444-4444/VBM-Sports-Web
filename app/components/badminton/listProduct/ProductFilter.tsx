import { filterTitle } from "@/app/constants"
import { FiFilter } from "react-icons/fi"
import FilterCus from "./FilterCus"

const ProductFilter = () => {
    

    return (
        <div className="col-span-1 flex flex-col gap-3">
            <div className="flex flex-row">
                <div className="flex whitespace-nowrap">
                    <FiFilter size={30} />
                    <span className="text-xl">Bộ lọc tìm kiếm</span>
                </div>
            </div>
            <div className="relative">
                <ul className="py-4">
                    {filterTitle.map((item) => (
                        <FilterCus 
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            listItem={item.list}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ProductFilter