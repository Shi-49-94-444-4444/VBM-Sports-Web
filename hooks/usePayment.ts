import { create } from 'zustand';

interface SuccessModalStore {
    isOpen: boolean;
    tran_id: string | null;
    onOpen: (tran_id: string) => void;
    onClose: () => void;
}
interface FailModalStore {
    isOpen: boolean;
    message: string;
    onOpen: (message: string) => void;
    onClose: () => void;
}
interface ContinueModalStore {
    isOpen: boolean;
    slotsIdArray: {
        dateRegis: string,
        numSlots: number
    }[];
    post_id: string | null
    onOpen: (post_id: string) => void;
    onClose: () => void;
    setSlotsIdArray: (slotsIdArray: {
        dateRegis: string,
        numSlots: number
    }[]) => void
}

export const useFailPaymentModal = create<FailModalStore>((set) => ({
    isOpen: false,
    message: '',
    onOpen: (message) => set({ isOpen: true, message }),
    onClose: () => set({ isOpen: false, message: '' })
}))

export const useSuccessPaymentModal = create<SuccessModalStore>((set) => ({
    isOpen: false,
    tran_id: null,
    onOpen: (tran_id) => set({ isOpen: true, tran_id }),
    onClose: () => set({ isOpen: false })
}))

export const useContinuePaymentModal = create<ContinueModalStore>((set) => ({
    isOpen: false,
    slotsIdArray: [],
    post_id: null,
    onOpen: (post_id) => set({ isOpen: true, post_id }),
    onClose: () => set({ isOpen: false, slotsIdArray: [], post_id: null }),
    setSlotsIdArray: (slotsIdArray) => set({ slotsIdArray }),
}))