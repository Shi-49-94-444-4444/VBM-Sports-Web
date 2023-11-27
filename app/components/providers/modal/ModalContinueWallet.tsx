"use client"

import { useContinueWalletModal } from "@/hooks"
import CustomModal from "./Modal"

const ModalContinueWallet = () => {
    const continueWalletModal = useContinueWalletModal()

    return (
        <CustomModal
            isOpen={continueWalletModal.isOpen}
            onClose={continueWalletModal.onClose}
            width="md:w-2/4 w-full"
            height="h-auto"
        >
            <iframe src={continueWalletModal.url ?? ""} width="600" height="800"/>
        </CustomModal>
    )
}

export default ModalContinueWallet