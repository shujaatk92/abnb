"use client"
import axios from "axios"
import { useCallback, useState } from "react"
import { AiFillGithub } from "react-icons/ai"
import { FcGoogle } from "react-icons/fc"

import Modal from "./Model"
import Heading from "../Heading"
import Input from "../inputs/Input"
import useRegisterModal from "@/app/hooks/useRegisterModel"
import { 
    FieldValues, 
    SubmitHandler, 
    useForm 
} from "react-hook-form"



const RegisterModal = () => {
    const registerModal = useRegisterModal();
    const [isLoading, setIsLoading] = useState(false)

    const { 
        register,
        handleSubmit,
        formState: {
            errors,
        }
     }
     = useForm<FieldValues>({
        defaultValues: {
            name: "",
            email: "",
            password: "",
        }
     })

     const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        axios.post('/api/register', data)
        .then( () => {
            registerModal.onClose();
        })
         .catch((error) => {
            console.log(error);
            
         })
         .finally( () => {
            setIsLoading(false);
         })

     }

     const bodyContent = (
        <div className="flex gap-3 flex-col">
            <Heading
            title="Welcome to Airbnb"
            subtitle="Create an account!"
            />
            <Input 
            id="email"
            label="Email"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
            />
        </div>
     )

    return(
        <Modal 
        disabled={isLoading}
        isOpen={registerModal.isOpen}
        title="Register"
        actionLabel="Contiune"
        onClose={registerModal.onClose}
        onSubmit={handleSubmit(onSubmit)}
        body={bodyContent}
        />
    )
}

export default RegisterModal