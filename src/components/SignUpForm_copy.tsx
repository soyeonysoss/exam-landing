import React, { useRef, useState } from 'react'
import { useForm } from "react-hook-form";
import FormField from './FormField';

const SignUpForm = () => {
  const { register, handleSubmit, watch, formState: { errors } }: any = useForm( { mode: "onChange" } );
  const password = useRef();
  password.current = watch("password");

  const [ disabled, setDisabled ] = useState(true);
  const [ submitBtn, setSubmitBtn ] = useState('form-btn-disabled');
  const watchFields = watch(['email','name','password','passwordConfirm']);

  const onSubmit = (data) => {
    console.log('data', data)
  };
  const handleSubmitBtn = (e) => {
    e.preventDefault();
    if (watchFields[0] === '' || // 필드가 비어있거나 error가 있으면 submit button을 disabled
      watchFields[1] === '' ||
      watchFields[2] === '' ||
      watchFields[3] === '' ||
      Object.keys(errors).length !== 0) {
        console.log('disabled');
        setDisabled(true);
        setSubmitBtn('form-btn-disabled');
    } else {
      console.log('active');
      setDisabled(false);
      setSubmitBtn('form-btn-active');
    }
  }
  const emailFieldProps = {
    label: '이메일', 
    inputType: 'email', 
    regName: 'email',
    validation: { required: true, pattern: /^\S+@\S+$/i }, 
    errorMsgs: ['이메일을 입력해주세요.', '이메일 형식에 맞게 입력해주세요.']
  }
  const nameFieldProps = {
    label: '이름', 
    inputType: 'text', 
    regName: 'name',
    validation: { required: true, maxLength: 10 }, 
    errorMsgs: ['이름을 입력해주세요.', '10자 이내의 이름을 입력해주세요.']
  }
  const passwordFieldProps = {
    label: '비밀번호', 
    inputType: 'password', 
    regName: 'password',
    validation: { required: true, minLength: 6 }, 
    errorMsgs: ['비밀번호를 입력해주세요.', '6자 이상의 비밀번호를 입력해주세요.']
  }
  const passwordConfirmFieldProps = {
    label: '비밀번호 확인', 
    inputType: 'password', 
    regName: 'passwordConfirm',
    validation: {
      required: true,
      validate: (value) =>
        value === password.current
    }, 
    errorMsgs: ['비밀번호를 입력해주세요.', '비밀번호가 일치하지 않습니다.']
  }

  return (
    <div className='w-full max-w-xs'>
      <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
        onSubmit={handleSubmit(onSubmit)} onChange={handleSubmitBtn}>
        <FormField {...emailFieldProps} />
        <FormField {...nameFieldProps} />
        <FormField {...passwordFieldProps} />
        <FormField {...passwordConfirmFieldProps} />
        <input type="submit" value='Sign Up'
          className={submitBtn} disabled={disabled}
        />
      </form>
    </div>

  )
}

export default SignUpForm