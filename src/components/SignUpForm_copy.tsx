import React, { useRef, useState } from 'react'
import { useForm } from "react-hook-form";
import FormField from './FormField';

// 여기서만 useform 사용

const SignUpForm = () => {
  const { register, handleSubmit, watch, formState: { errors, isDirty, isValid } }: any = useForm( { mode: "onChange" } );
  // const password = useRef();
  // password.current = watch("password");

  const onSubmit = (data) => { 
    console.log('data', data)
  };

  const [btn, setBtn] = useState(false);

  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmRef = useRef(null);
  const validCheck = () => {
    if (emailRef.current
      && nameRef.current
      && passwordRef.current
      && passwordConfirmRef.current) 
      {
        if (emailRef.current.value.length 
          && nameRef.current.value.length
          && passwordRef.current.value.length
          && passwordConfirmRef.current.value.length
          ) {setBtn(true); return;}
        setBtn(false)
        return
      }
    setBtn(false);
    return
  }
  const printValid = () => {
    console.log(validCheck())
  }

  const emailFieldProps = {
    label: '이메일', 
    inputType: 'email',
    ref: emailRef, 
  }
  const nameFieldProps = {
    label: '이름', 
    inputType: 'text',
    ref: nameRef, 
  }
  const passwordFieldProps = {
    label: '비밀번호', 
    inputType: 'password', 
    ref: passwordRef,
  }
  const passwordConfirmFieldProps = {
    label: '비밀번호 확인', 
    inputType: 'password', 
    ref: passwordConfirmRef,
  }

  return (
    <div className='w-full max-w-xs'>
      <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
        onSubmit={handleSubmit(onSubmit)}
        onChange={validCheck}>
        <FormField {...emailFieldProps} />
        <FormField {...nameFieldProps} />
        <FormField {...passwordFieldProps} />
        <FormField {...passwordConfirmFieldProps} />
        <input type="submit" value='Sign Up'
          className={btn ? 'form-btn-active' : 'form-btn-disabled'} 
          disabled={!btn}
        />
      </form>
    </div>

  )
}

export default SignUpForm

// 버튼 활성화: 각 필드가 비어있지 않고, 유효성 체크를 만족
// form-btn-disabled form-btn-active
// 고칠 것: password.current가 passwordConfirmField에 들어가야함

