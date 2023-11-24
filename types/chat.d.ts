export interface ChatRoom {
    message: string
    data: {
        roomId: string
        chatTitle: string
        coverImg: string
        lastSendMsg: string
        lastSendTime: string
    }[]
}

export interface ChatRoomData {
    roomId: string
    chatTitle: string
    coverImg: string
    lastSendMsg: string
    lastSendTime: string
}

export interface ChatDetail {
    message: string
    data: {
        messageId: string
        message: string
        userId: string
        sendTime: string
        sendUserName: string
    }[]
}

export interface ChatDetailData {
    messageId: string
    message: string
    userId: string
    sendTime: string
    sendUserName: string
}

export interface SendMessForm {
    message: string
}