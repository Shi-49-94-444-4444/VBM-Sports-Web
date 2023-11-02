import { ChatGroup, ChatMessages, Container, Navbar } from "@/app/components"

const ChatRoomPage = () => {
    return (
        <>
            <Navbar />
            <Container>
                <div className="relative py-10">
                    <div className="grid grid-cols-11 border border-black border-opacity-10 rounded-lg h-screen">
                        <ChatGroup />
                        <ChatMessages />
                    </div>
                </div>
            </Container>
        </>
    )
}

export default ChatRoomPage