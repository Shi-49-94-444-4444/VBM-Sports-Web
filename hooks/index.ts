import { useWithdrawModal, useRechargeModal } from "./useWallet"
import {
    useNotEnoughMoneyModal,
    useRoutePaymentModal,
    useContinuePaymentModal,
    useFailPaymentModal,
    useSuccessPaymentModal
} from "./usePayment"
import { useReportModal } from "./useReport"
import { useAdminBanModal, useAdminDeletePostModal } from "./useAdmin"

export {
    useRechargeModal,
    useWithdrawModal,
    useFailPaymentModal,
    useNotEnoughMoneyModal,
    useSuccessPaymentModal,
    useReportModal,
    useContinuePaymentModal,
    useRoutePaymentModal,
    useAdminBanModal,
    useAdminDeletePostModal
}