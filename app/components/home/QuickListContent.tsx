import { listItems } from "@/app/constants"
import Container from "../Container"
import QuickListItem from "./QuickListItem"

const QuickListContent = () => {
    return (
        <Container>
            <div className="
                        flex 
                        flex-col 
                        relative 
                        gap-y-20
                    "
            >
                <QuickListItem
                    listItems={listItems}
                />
            </div>
            <div className="
                        flex 
                        justify-center 
                        mt-20
                    "
            >
                <button className="
                            justify-center 
                            items-center 
                            uppercase 
                            text-xl 
                            font-semibold 
                            bg-slate-300 
                            text-white 
                            px-6 
                            py-2 
                            rounded-full
                        "
                >
                    Xem thêm
                </button>
            </div>
        </Container>
    )
}

export default QuickListContent