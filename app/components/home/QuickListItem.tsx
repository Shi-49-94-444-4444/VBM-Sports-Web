'use client'

import QuickListImage from "./QuickListImage";
import QuickListOverview from "./QuickListOverview";

interface ListItem {
    src: string;
    title: string;
    price: number;
    timeOpen: string;
    timeClose: string;
    description: string;
}

interface QuickListItemProps {
    listItems: ListItem[];
}

const QuickListItem: React.FC<QuickListItemProps> = ({ listItems }) => {
    const renderListItems = listItems
        .slice(0, 4)
        .map((item, index) => {
            const isOdd = index % 2 === 0;
            const reverseClass = isOdd ? "flex-row" : "flex-row-reverse";

            return (
                <div 
                    key={index} 
                    className={`
                            flex 
                            gap-7 
                            ${reverseClass}
                        `
                    }
                >
                    <QuickListImage src={item.src} />
                    <QuickListOverview
                        title={item.title}
                        price={item.price}
                        timeOpen={item.timeOpen}
                        timeClose={item.timeClose}
                        description={item.description}
                        isOdd={isOdd}
                    />
                </div>
            );
        });

    return <>{renderListItems}</>;
};

export default QuickListItem;
