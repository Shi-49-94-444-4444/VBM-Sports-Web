import { create } from "zustand";

interface TransactionModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export const useTransactionModal = create<TransactionModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}))