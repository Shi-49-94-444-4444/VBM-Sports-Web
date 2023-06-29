import { useState, useEffect } from 'react';
import { postNew } from "@/app/constants";
import Container from "../Container";
import PostNewItem from "./PostNewItem";

const PostNew = () => {
    const [displayedItems, setDisplayedItems] = useState<Array<{ id: number; src: string; description: string; }>>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % 5); // Chỉ số 5 là số lượng item bạn muốn hiển thị
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const slicedItems = postNew.slice(0, 5); // Lấy 5 item đầu tiên
        const firstItemIndex = currentIndex % slicedItems.length;
        const secondItemIndex = (currentIndex + 1) % slicedItems.length;
        const firstItem = slicedItems[firstItemIndex];
        const secondItem = slicedItems[secondItemIndex];
        setDisplayedItems([firstItem, secondItem]);
    }, [currentIndex]);

    return (
        <>
            <div className="w-full bg-gray-cus py-10">
                <Container>
                    <div className="grid grid-cols-2 gap-10">
                        {displayedItems.map((item) => (
                            <PostNewItem
                                key={item.id}
                                src={item.src}
                                description={item.description}
                            />
                        ))}
                    </div>
                </Container>
            </div>
        </>
    );
};

export default PostNew;
