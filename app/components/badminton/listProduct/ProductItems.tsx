import ReactPaginate from 'react-paginate';
import { useState } from 'react';
import { ListProduct } from '@/types';
import ProductContent from './ProductContent';

const ProductItems: React.FC<ListProduct> = ({
    listItem
}) => {
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 5;
    const pageCount = Math.ceil(listItem.length / itemsPerPage);

    const handlePageChange = (selectedPage: { selected: number }) => {
        setCurrentPage(selectedPage.selected);
    };

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const visibleItems = listItem.slice(startIndex, endIndex);

    return (
        <>
            {visibleItems.map((item) => (
                <ProductContent
                    key={item.id}
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    timeOpen={item.timeOpen}
                    timeClose={item.timeClose}
                    slot={item.slot}
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
