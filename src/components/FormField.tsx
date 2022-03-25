import React, { useRef, useState } from 'react'
import { useForm } from "react-hook-form";

function FormField({ label, inputType, regName, validation, errorMsgs }) {
    const { register, handleSubmit, watch, formState: { errors } }: any = useForm( { mode: "onChange" } );
    const password = useRef();
    password.current = watch("password");

    const validationTypes = Object.keys(validation);
    
    return (
        <div className='mb-4'>
            <label className='form-label'>{label}</label>
            <input className='form-input'
            type={inputType}
            {...register(regName, validation)}
            />
            {errors[regName] && errors[regName].type === validationTypes[0] && <p className='form-validation-error'>{errorMsgs[0]}</p>}
            {errors[regName] && errors[regName].type === validationTypes[1] 
            && <p className='form-validation-error'>{errorMsgs[1]}</p>}
        </div>
  )
}

export default FormField