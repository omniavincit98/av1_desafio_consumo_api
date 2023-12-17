import { ModalContainer } from './styles';

export function Modal({ onClose, children }) {
    return (
        <ModalContainer>
            <div className="modal-content">
                <span className="close" onClick={onClose}>
                    &times;
                </span>
                {children}
            </div>
        </ModalContainer>
    );
}