import { create } from 'zustand';

interface PolicyModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export const usePolicyModal = create<PolicyModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}))