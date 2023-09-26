import Modal from 'react-modal';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    width?: string;
    height?: string;
    children: React.ReactNode;
}

const CustomModal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    title,
    width,
    height,
    children
}) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel={title}
            className={`
                    custom-modal 
                    ${width}
                    ${height}
                `
            }
            overlayClassName="custom-overlay"
        >
            <div className="flex flex-col items-center ">
                <h2 className="text-2xl font-bold mb-4">{title}</h2>
                {children}
                <button className="mt-4 text-pink-cus-tx hover:underline" onClick={onClose}>
                    Close
                </button>
            </div>
        </Modal>
    );
};

export default CustomModal;
