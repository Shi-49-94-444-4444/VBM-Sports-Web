"use client"

import { ListTransactionData } from "@/types"
import { useState } from "react";
import TransactionContent from "./TransactionContent";
import ReactPaginate from "react-paginate";

interface TransactionItemsProps {
    listItem: ListTransactionData[]
}

const TransactionItems: React.FC<TransactionItemsProps> = ({
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
            <div className="flex flex-col gap-5">
                {visibleItems.map((item) => (
                    <TransactionContent
                        key={item.transacionId}
                        transacionId={item.transacionId}
                        postId={item.postId}
                        areaName={item.areaName}
                        availableSlot={item.availableSlot}
                        bookedInfos={item.bookedInfos}
                        coverImage={item.coverImage}
                        startTime={item.startTime}
                        endTime={item.endTime}
                        postTitle={item.postTitle}
                        moneyPaid={item.moneyPaid}
                        status={item.status}
                    />
                ))}
            </div>
            <div className="flex justify-center mt-10 text-base font-semibold">
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
    )
}

export default TransactionItems