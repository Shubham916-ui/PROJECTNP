import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ isOpen, onClose, title, message, type = 'success', showCloseButton = true, showFooter = true }) => {

    // Close on Escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && showCloseButton) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            // Prevent scrolling when modal is open
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose, showCloseButton]);

    if (!isOpen) return null;

    return createPortal(
        <div className="modal-overlay" onClick={showCloseButton ? onClose : undefined}>
            <div
                className={`modal-content modal-${type}`}
                onClick={e => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
            >
                {showCloseButton && (
                    <button className="modal-close" onClick={onClose} aria-label="Close">
                        &times;
                    </button>
                )}

                <div className="modal-header">
                    {type === 'success' && (
                        <div className="modal-icon success-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                    )}
                    {type === 'error' && (
                        <div className="modal-icon error-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                    )}
                    <h3 id="modal-title">{title}</h3>
                </div>

                <div className="modal-body">
                    <p>{message}</p>
                </div>

                {showFooter && (
                    <div className="modal-footer">
                        <button className="btn btn-primary" onClick={onClose}>
                            Close
                        </button>
                    </div>
                )}
            </div>
        </div>,
        document.body
    );
};

export default Modal;
