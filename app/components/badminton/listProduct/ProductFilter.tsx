import { filterTitle } from "@/constant"
import { FaFilter } from "react-icons/fa"
import { FilterCus } from "../../providers"

const ProductFilter = () => {
    return (
        <div className="col-span-1 flex flex-col gap-3">
            <div className="flex flex-row">
                <div className="flex whitespace-nowrap items-center space-x-2">
                    <FaFilter size={20} />
                    <span className="text-xl font-semibold opacity-80">Bộ lọc tìm kiếm</span>
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