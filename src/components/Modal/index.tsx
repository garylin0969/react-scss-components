import { ReactNode, useEffect, useState } from 'react';

interface Props {
    title?: string;
    size?: 'sm' | 'lg' | 'xl';
    onClose: () => void;
    children?: ReactNode;
}

const Modal = ({ title, size = 'xl', onClose, children }: Props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        setIsOpen(true);
        document.body.classList.add('modal-open');
        return () => {
            document.body.classList.remove('modal-open');
            setIsOpen(false);
        };
    }, []);

    return (
        <>
            <div className={`modal-overlay ${isOpen ? 'show' : ''}`}>
                <div className="modal-container">
                    <div className={`modal-content ${size}`}>
                        <div className="modal-header">
                            <div className="modal-title">{title}</div>
                            <button onClick={onClose}>關閉</button>
                        </div>
                        <div className="modal-body">{children}</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
