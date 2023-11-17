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

export const useAdminBanModal = create<AdminModalStore>((set) => ({
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