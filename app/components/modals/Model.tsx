"use client"

import { useCallback, useEffect, useState } from "react";

interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: React.ReactElement;
    footer?:React.ReactElement;
    actionLabel?: string;
    disable?: boolean;
    secondryAction?: () => void;
    secondryActionLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    onSubmit,
    title,
    body,
    footer,
    actionLabel,
    disable,
    secondryAction,
    secondryActionLabel,

}) => {

    const [showModal, setShowModal ] = useState(isOpen);
    useEffect( () => {
        setShowModal(isOpen);
    }, [isOpen])

    const handleClose = useCallback( () => {
        if(disable){
            return;
        }
        setShowModal(false)
        setTimeout( ()=> {
            onClose();
        }, 300)
    },[disable, onClose]);

    const handleSubmit = useCallback( ()=> {
        if(disable){
            return;
        }
        onSubmit();
    }, [disable, onSubmit]);

    const handleSecondryAction = useCallback( () => {
        if(disable || !secondryAction){
            return;
        }
        secondryAction();
    }, [disable, secondryAction]);

    if(!isOpen){
        return null;
    }

    return(
        <>
        <div className="
        flex
        items-center
        justify-center
        bg-neutral-800/70
        fixed
        z-50
        overflow-x-hidden
        overflow-y-auto
        inset-0
        outline-none
        focus:outline-none
        ">
            modal</div>
        </>
    )
}

export default Modal