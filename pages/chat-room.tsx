import { ChatGroup, ChatMessages, Container, Navbar } from "@/app/components"

const ChatRoomPage = () => {
    return (
        <div className="overflow-hidden">
            <Navbar />
            <Container>
                <div className="relative md:pt-5">
                    <div className="grid grid-cols-12 border border-black border-opacity-10 rounded-lg">
                        <ChatGroup />
                        <ChatMessages />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ChatRoomPage