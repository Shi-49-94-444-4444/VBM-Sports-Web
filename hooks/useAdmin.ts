import { create } from 'zustand';

interface AdminModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

interface AdminDeletePostModalStore {
    isOpen: boolean;
    postId: string | null;
    onOpen: (postId: string) => void;
    onClose: () => void;
}

interface SendNoticePostModalStore {
    isOpen: boolean;
    postId: string | null;
    onOpen: (postId: string) => void;
    onClose: () => void;
}

interface DeleteBlogModalStore {
    isOpen: boolean;
    blogId: string | null;
    onOpen: (blogId: string) => void;
    onClose: () => void;
}

interface TrackingReportModalStore {
    isOpen: boolean;
    adminId: string | null;
    reportId: string | null;
    onOpen: (adminId: string, reportId: string) => void;
    onClose: () => void;
}

interface ChangeMoneyToModalStore {
    isOpen: boolean;
    userId: string | null;
    money: string | null;
    title: string | null;
    onOpen: (userId: string, money: string, title: string) => void;
    onClose: () => void;
}
interface GoToMessModalStore {
    isOpen: boolean;
    roomId: string | null;
    onOpen: (roomId: string) => void;
    onClose: () => void;
}

export const useAdminBanModal = create<AdminModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}))

export const useAdminUnBanModal = create<AdminModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}))

export const useAdminUpRoleModal = create<AdminModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}))

export const useAdminDownRoleModal = create<AdminModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}))

export const useAdminDeletePostModal = create<AdminDeletePostModalStore>((set) => ({
    isOpen: false,
    postId: null,
    onOpen: (postId: string) => set({ isOpen: true, postId }),
    onClose: () => set({ isOpen: false, postId: null })
}))

export const useSendNoticeUserModal = create<AdminModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}))

export const useSendNoticePostModal = create<SendNoticePostModalStore>((set) => ({
    isOpen: false,
    postId: null,
    onOpen: (postId) => set({ isOpen: true, postId }),
    onClose: () => set({ isOpen: false, postId: null })
}))

export const useDeleteBLogModal = create<DeleteBlogModalStore>((set) => ({
    isOpen: false,
    blogId: null,
    onOpen: (blogId) => set({ isOpen: true, blogId }),
    onClose: () => set({ isOpen: false, blogId: null })
}))

export const useTrackingReportModal = create<TrackingReportModalStore>((set) => ({
    isOpen: false,
    adminId: null,
    reportId: null,
    onOpen: (adminId, reportId) => set({ isOpen: true, adminId, reportId }),
    onClose: () => set({ isOpen: false, adminId: null, reportId: null })
}))

export const useChangeMoneyToModal = create<ChangeMoneyToModalStore>((set) => ({
    isOpen: false,
    userId: null,
    money: null,
    title: null,
    onOpen: (userId, money, title) => set({ isOpen: true, userId, money, title }),
    onClose: () => set({ isOpen: false, userId: null, money: null, title: null })
}))

export const useGoToMessModal = create<GoToMessModalStore>((set) => ({
    isOpen: false,
    roomId: null,
    onOpen: (roomId) => set({ isOpen: true, roomId }),
    onClose: () => set({ isOpen: false, roomId: null })
}))