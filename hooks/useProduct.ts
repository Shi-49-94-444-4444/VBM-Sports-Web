import { CreateBadmintonForm } from '@/types';
import { create } from 'zustand';

interface CheckPostModalStore {
    isOpen: boolean;
    message: string | null;
    value: CreateBadmintonForm | null;
    onOpen: (message: string, value: CreateBadmintonForm) => void;
    onClose: () => void;
}

export const useCheckPostModal = create<CheckPostModalStore>((set) => ({
    isOpen: false,
    message: null,
    value: null,
    onOpen: (message, value) => set({ isOpen: true, message, value }),
    onClose: () => set({ isOpen: false, message: null, value: null })
}))