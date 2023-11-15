import { filterTitle } from "@/utils"
import { FaFilter } from "react-icons/fa"
import { FilterCus } from "../../providers"

const ProductFilter = () => {
    return (
        <>
            <div className="flex flex-row text-gray-600">
                <div className="flex whitespace-nowrap items-center space-x-2">
                    <FaFilter size={20} />
                    <span className="font-semibold text-xl">Bộ lọc tìm kiếm</span>
                </div>
            </div>
            <div className="relative">
                <ul className="py-2 lg:block hidden">
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
        </>
    )
}

export default ProductFilter