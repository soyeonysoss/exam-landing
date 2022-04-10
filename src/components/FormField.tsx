import React, { useRef, useState, forwardRef } from 'react'
import { useForm } from "react-hook-form";

// 여기서는 useform 없애야함, 순수 formField를 만들어야 한다. - useref 사용, recoil 제거
// useRef 를 알아보고 글로 정리하기 - forward ref에 대해 알아보기 - formfield를 커스텀하게 만들기

const FormField = forwardRef((props:any, ref:any) => {
    const { label, inputType } = props;
    return (
        <div className='mb-4'>
            <label className='form-label'>{label}</label>
            <input className='form-input'
                type={inputType}
                ref={ref}
            />
        </div>
    )
  });

FormField.displayName = "FormField"
export default FormField;