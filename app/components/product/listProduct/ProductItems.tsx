"use client"

import ReactPaginate from 'react-paginate'
import { useState } from 'react'
import { ListProductData } from '@/types'
import ProductContent from './ProductContent'

interface ProductItemProps {
    listItem: ListProductData[]
}

const ProductItems: React.FC<ProductItemProps> = ({
    listItem
}) => {
    const [currentPage, setCurrentPage] = useState(0)
    const itemsPerPage = 10
    const pageCount = Math.ceil(listItem.length / itemsPerPage)

    const handlePageChange = (selectedPage: { selected: number }) => {
        setCurrentPage(selectedPage.selected)
    }

    const startIndex = currentPage * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const visibleItems = listItem.slice(startIndex, endIndex)

    return (
        <>
            {visibleItems.map((item) => (
                <ProductContent
                    key={item.idPost}
                    idPost={item.idPost}
                    title={item.title}
                    contentPost={item.contentPost}
                    addressSlot={item.addressSlot}
                    days={item.days}
                    startTime={item.startTime}
                    endTime={item.endTime}
                    quantitySlot={item.quantitySlot}
                    highlightUrl={item.highlightUrl}
                    fullName={item.fullName}
                    price={item.price}
                    userId={item.userId}
                    userImgUrl={item.userImgUrl}
                />
            ))}
            <div className="flex justify-end mt-10 text-base font-semibold">
                <ReactPaginate
                    pageCount={pageCount}
                    pageRangeDisplayed={4}
                    marginPagesDisplayed={1}
                    onPageChange={handlePageChange}
                    containerClassName="pagination flex p-0 m-0"
                    activeClassName="text-gray-400 bg-gray-200"
                    previousLabel="<"
                    nextLabel=">"
                    pageClassName="border-2 px-4 py-2"
                    previousClassName="border-2 px-4 py-2"
                    nextClassName="border-2 px-4 py-2"
                    pageLinkClassName="pagination-link"
                    nextLinkClassName="pagination-link"
                    breakClassName="pagination-items border-2 px-3 py-2"
                />
            </div>
        </>
    );
};

export default ProductItems;
