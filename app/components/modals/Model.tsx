"use client"
import { IoMdClose } from "react-icons/io"
import { useCallback, useEffect, useState } from "react";
import Button from "../Button";

interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: React.ReactElement;
    footer?:React.ReactElement;
    actionLabel?: string;
    disabled?: boolean;
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
    disabled,
    secondryAction,
    secondryActionLabel,

}) => {

    const [showModal, setShowModal ] = useState(isOpen);
    useEffect( () => {
        setShowModal(isOpen);
    }, [isOpen])

    const handleClose = useCallback( () => {
        if(disabled){
            return;
        }
        setShowModal(false)
        setTimeout( ()=> {
            onClose();
        }, 300)
    },[disabled, onClose]);

    const handleSubmit = useCallback( ()=> {
        if(disabled){
            return;
        }
        onSubmit();
    }, [disabled, onSubmit]);

    const handleSecondryAction = useCallback( () => {
        if(disabled || !secondryAction){
            return;
        }
        secondryAction();
    }, [disabled, secondryAction]);

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
           
            <div className="
            relative 
            w-full 
            sm:w-5/6
            md:w-4/6 
            lg:w-3/6 
            xl:w-2/5 
            my-6 
            mx-auto 
            h-full 
            lg:h-auto 
            md:h-auto 
            ">
            {/* content */}
            <div className={`
            translate
            duration-300
            h-full
            ${showModal} ? 'translate-y-0' : 'translate-y-full'
            ${showModal} ? 'opacity-100' : 'opacity-0'
            `}>
                <div className="
                flex
                flex-col
                relative
                bg-white
                h-full
                lg:h-auto
                md:h-auto
                transition
                shadow-lg
                rounded-lg
                w-full
                border-0
                outline:none
                focus:outline-none

                ">
                    {/* header */}
                    <div className="
                    flex
                    p-6
                    items-center
                    rounded-t
                    justify-center
                    border-b-[1px]
                    relative
                    ">
                        <button
                        onClick={handleClose} 
                        className="
                        p-1
                        hover:opacity-70
                        transition
                        absolute
                        border-0
                        right-5
                        ">
                        <IoMdClose  sixe={18}/>
                        </button>
                        <div className="text-lg font-semibold">
                            {title}
                        </div>

                    </div>
                    {/* body */}
                    <div className="relative p-6 flex-auto">
                        {body}
                    </div>
                    {/* footer */}
                    <div className="flex flex-col gap-2 p-6">
                        <div className="flex flex-row items-center gap-4 w-full">
                            {secondryAction && secondryActionLabel && (
                                <Button 
                                outline
                                disabled={disabled}
                                label={secondryActionLabel}
                                onClick={handleSecondryAction}
                                />
                            )}
                            <Button 
                            disabled={disabled}
                            label={actionLabel}
                            onClick={handleSubmit}
                            />
                        </div>
                    </div>
                </div>

            </div>
            </div>
            </div>
        </>
    )
}

export default Modal