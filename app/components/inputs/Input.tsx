"use client"
import { BiDollar } from "react-icons/bi";

import { 
    FieldErrors, 
    FieldValues, 
    UseFormRegister 
  } from "react-hook-form";

interface InputProps {
    id: string;
    label: string;
    type?:string;
    disabled?: boolean;
    priceFormate?: boolean;
    required?: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
}

const Input: React.FC<InputProps>  = ({
    id,
    label,
    type,
    disabled,
    priceFormate,
    required,
    register,
    errors,
}) => {
    return(
        <div className="w-full relative">
            {priceFormate && (
                <BiDollar 
                size={24}
                className="
                text-neutral-700
                absolute
                top-5
                left-2
                "
                />
               
            )}
             <input 
             id={id}
             disabled={disabled}
             {...register(id, { required })}
                />
        </div>
    )
}
export default Input