import { QuickListContent } from "@/types"
import QuickListItem from "./QuickListItem"
import Container from "../../Container"

const QuickListContent: React.FC<QuickListContent> = ({
    listItem
}) => {
    return (
        <Container>
            <div className="
                    grid 
                    xl:grid-cols-3 
                    md:grid-cols-2 
                    grid-cols-1
                    gap-5
                    transition-all
                    duration-300    
                "
            >
                {listItem.slice(0,6).map((item) => (
                    <QuickListItem
                        key={item.id}
                        id={item.id}
                        src={item.src}
                        title={item.title}
                        date={item.date}
                        price={item.price}
                        timeOpen={item.timeOpen}
                        timeClose={item.timeClose}
                        description={item.description}
                    />
                ))}
            </div>
        </Container>
    )
}

export default QuickListContent