import React, { useRef, useState, forwardRef } from 'react'

// 여기서는 useform 없애야함, 순수 formField를 만들어야 한다. - useref 사용, recoil 제거
// useRef 를 알아보고 글로 정리하기 - forward ref에 대해 알아보기 - formfield를 커스텀하게 만들기
export interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
   
}

const FormField = forwardRef<HTMLInputElement, FormFieldProps>((props, ref:any) => {
    // const { label, inputType, register, regName, errors, validation, isDirty, isValid, errMsg } = props;
    const {className, ...etcProps} = props;
    // const errMsgKeys = Object.keys(errMsg);
    // const paintErrMsg = errMsgKeys.map((item) => {
    //     return errors[regName] && errors[regName].type === item
    //     && <p key={item} className='form-validation-error'>{errMsg[item]}</p>
    // })
    
    return (
        <div className={className}>
            {/* <label className='form-label'>{label}</label> */}
            <input className="form-input"
                ref={ref}
                type={'text'}
                {...etcProps}
            />
            {/* {paintErrMsg} */}
        </div>
    )
  });

FormField.displayName = "FormField"
export default FormField;