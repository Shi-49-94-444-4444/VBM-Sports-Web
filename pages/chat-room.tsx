import { ChatGroup, ChatMessages, Container, Navbar } from "@/app/components"
import * as jose from 'jose'
import cookie from 'cookie'
import Image from 'next/image'
import { getAllRoomService } from "@/services"
import { ChatRoom } from "@/types"
import Custom500 from "./500"

export async function getServerSideProps(context: any) {
    const cookies = cookie.parse(context.req.headers.cookie || '')
    const token = cookies["token"]

    const secret = new TextEncoder().encode(process.env.JWT_SECRET)

    let id: string | null = null
    if (token) {
        const { payload } = await jose.jwtVerify(token, secret)
        const { AccountId } = payload as { AccountId: string }
        id = AccountId
    }

    try {
        const listRoom = await getAllRoomService(id ? id : "0")

        return {
            props: {
                listRoom,
            },
        }
    } catch (error) {
        //console.log(error)
        return {
            props: {
                internalError: true
            }
        }
    }
}

const ChatRoomPage = ({ listRoom, internalError }: { listRoom: ChatRoom, internalError?: boolean }) => {
    if (internalError) {
        return <Custom500 />
    }

    return (
        <div className="overflow-hidden">
            <Navbar />
            <Container>
                {listRoom.data == null ? (
                    <div className="relative h-screen flex flex-col items-center justify-center gap-5 text-primary-blue-cus font-semibold">
                        <div className="flex space-x-3 items-center flex-wrap justify-center transition-all duration-500">
                            <h1 className="md:text-5xl text-3xl transition-all duration-500">Bạn chưa tham gia nhóm chat nào cả!</h1>
                            <div className="relative">
                                <Image
                                    src="/images/sad.gif"
                                    alt="Gif"
                                    width={100}
                                    height={100}
                                    className="object-contain md:w-32 md:h-32 h-20 w-20 transition-all duration-500"
                                />
                            </div>
                        </div>
                        <p className="md:text-3xl text-xl text-center transition-all duration-500">Vui lòng thực hiện giao dịch tham gia nhóm chat</p>
                    </div>
                ) : (
                    <div className="relative md:pt-5">
                        <div className="grid grid-cols-12 border border-black border-opacity-10 rounded-lg">
                            <ChatGroup listRoom={listRoom.data} />
                            <ChatMessages />
                        </div>
                    </div>
                )}
            </Container>
        </div>
    )
}

export default ChatRoomPage