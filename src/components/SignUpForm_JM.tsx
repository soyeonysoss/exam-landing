import React, { useRef, useState } from 'react'
import { useForm } from "react-hook-form";
import FormField from './FormField';

// 여기서만 useform 사용

const SignUpForm = () => {
  const { register, handleSubmit, watch, formState: { errors, isDirty, isValid } }: any = useForm( { mode: "onChange" } );

  const onSubmit = (data) => { 
    console.log('data', data)
  };

  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmRef = useRef(null);
  passwordRef.current = watch("password");
  

  const emailFieldProps = {
    label: '이메일', 
    inputType: 'email',
    register: register,
    regName: 'email',
    errors: errors,
    validation: { required: true, pattern: /^\S+@\S+$/i },
    errMsg: { 
      required: '이메일을 입력해주세요.', 
      pattern: '이메일 형식에 맞게 입력해주세요.' },
    isDirty: isDirty,
    isValid: isValid,
    ref: emailRef, 
  }
  const nameFieldProps = {
    label: '이름', 
    inputType: 'text',
    register: register,
    regName: 'name',
    errors: errors,
    validation: { required: true, maxLength: 10 },
    errMsg: {
      required: '이름을 입력해주세요.',
      maxLength: '10자 이내의 이름을 입력해주세요.'
    },
    ref: nameRef, 
  }
  const passwordFieldProps = {
    label: '비밀번호', 
    inputType: 'password', 
    register: register,
    regName: 'password',
    errors: errors,
    validation: { required: true, minLength: 6 },
    errMsg: {
      required: '비밀번호를 입력해주세요.',
      minLength: '6자 이상의 비밀번호를 입력해주세요.',
    },
    ref: passwordRef,
  }
  const passwordConfirmFieldProps = {
    label: '비밀번호 확인', 
    inputType: 'password', 
    register: register,
    regName: 'passwordCheck',
    errors: errors,
    validation: {
      required: true,
      validate: (value) =>
        value === passwordRef.current
    },
    errMsg: {
      required: '비밀번호를 입력해주세요.',
      validate: '비밀번호가 일치하지 않습니다.'
    },
    ref: passwordConfirmRef,
  }

  return (
    <div className='w-full max-w-xs'>
      {console.log(isValid)}
      <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
        onSubmit={handleSubmit(onSubmit)}
        >
        <FormField {...emailFieldProps}  />
        <FormField {...nameFieldProps} />
        <FormField {...passwordFieldProps} />
        <FormField />

        <input type="submit" value='Sign Up'
          className={isValid ? 'form-btn-active' : 'form-btn-disabled'} 
          disabled={!isValid}
        />
      </form>
    </div>

  )
}

export default SignUpForm

// 버튼 활성화: 각 필드가 비어있지 않고, 유효성 체크를 만족
// form-btn-disabled form-btn-active
// 고칠 것: password.current가 passwordConfirmField에 들어가야함

