import { create } from 'zustand';

interface WalletModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}
interface ContinueWalletModalStore {
    isOpen: boolean
    url: string | null
    onOpen: (url: string) => void
    onClose: () => void
}

export const useWithdrawModal = create<WalletModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}))

export const useRechargeModal = create<WalletModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}))

export const useContinueWalletModal = create<ContinueWalletModalStore>((set) => ({
    isOpen: false,
    url: null,
    onOpen: (url: string) => set({ isOpen: true, url }),
    onClose: () => set({ isOpen: false, url: null })
}))