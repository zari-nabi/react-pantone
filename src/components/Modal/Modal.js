import { ModalBackground, ModalContainer } from "./Modal.style"

export const Modal=({showModal,onClose,children})=>{
    return(
        <ModalBackground>
            <ModalContainer>
                {children}
            </ModalContainer>
        </ModalBackground>
    )
}