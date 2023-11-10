import { create } from 'zustand';

interface PaymentModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export const useNotEnoughMoneyModal = create<PaymentModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}))

export const useFailPaymentModal = create<PaymentModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}))

export const useSuccessPaymentModal = create<PaymentModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}))

export const useContinuePaymentModal = create<PaymentModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}))