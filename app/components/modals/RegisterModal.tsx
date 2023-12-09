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
import toast from "react-hot-toast"
import Button from "../Button"



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
            // console.log(error);
            toast.error('Something went wrong')
            
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
            <Input 
            id="name"
            label="Name"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
            />
            <Input 
            id="password"
            label="Password"
            type="password"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
            />
        </div>
     )

     const footerContent = (
        <div className="flex flex-col gap-4 mt-3">
            <hr />
            <Button 
            onClick={() => {}}
            outline
            label="Continue with Google"
            icon={FcGoogle}
            />
             <Button 
            onClick={() => {}}
            outline
            label="Continue with Github"
            icon={AiFillGithub}
            />
            <div className="text-neutral-500 font-light text-center">
                <div className="justify-center flex felx-row gap-2 items-center">
                    <div>Already have an account?</div>
                    <div onClick={registerModal.onClose}
                    className="text-neutral-800 hover:underline cursor-pointer">Log in</div>
                </div>
            </div>
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
        footer={footerContent}
        />
    )
}

export default RegisterModal