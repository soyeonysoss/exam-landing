import React, { useRef, useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import FormField from './FormField';
import ErrorMsg from './ErrorMsg';
import Label from './Label';

const SignUpForm = () => {
  const { register, handleSubmit, watch, formState: { errors, isValid } }: any = useForm( { mode: "onChange" } );

  const onSubmit = (data) => { 
    console.log('data', data)
  };

  const ref = useRef(null);
  const passwordDCurrent = watch("password");

  const emailFieldProps = {
    inputType: 'email',
    register: {...register('email',{ required: true, pattern: /^\S+@\S+$/i })},
    ref: ref, 
  }
  const nameFieldProps = {
    inputType: 'text',
    register: {...register('name', { required: true, maxLength: 10 })}
    ,
    ref: ref, 
  }
  const passwordFieldProps = { 
    inputType: 'password', 
    register: {...register("password", { required: true, minLength: 6 })},
    ref: ref,
  }
  const passwordConfirmFieldProps = {
    inputType: 'password', 
    register: {...register("passwordConfirm", {
      required: true,
      validate: (value) =>
        value === passwordDCurrent
    })},
    ref: ref,
  }

  return (
    <div className='w-full max-w-xs'>
      {console.log(isValid)}
      <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
        onSubmit={handleSubmit(onSubmit)}
        >
        
        <Label label={'이메일'}/>
        <FormField {...emailFieldProps}  />
        <ErrorMsg name={'email'} type={'required'} msg={'이메일을 입력해주세요.'} errors={errors}/>
        <ErrorMsg name={'email'} type={'pattern'} msg={'이메일 형식에 맞게 입력해주세요.'} errors={errors}/>
        
        <Label label={'이름'}/>
        <FormField {...nameFieldProps} />
        <ErrorMsg name={'name'} type={'required'} msg={'이름을 입력해주세요.'} errors={errors}/>
        <ErrorMsg name={'name'} type={'maxLength'} msg={'10자 이내의 이름을 입력해주세요.'} errors={errors}/>

        <Label label={'비밀번호'}/>
        <FormField {...passwordFieldProps} />
        <ErrorMsg name={'password'} type={'required'} msg={'비밀번호를 입력해주세요.'} errors={errors}/>
        <ErrorMsg name={'password'} type={'minLength'} msg={'6자 이상의 비밀번호를 입력해주세요.'} errors={errors}/>
        
        <Label label={'비밀번호 확인'}/>
        <FormField {...passwordConfirmFieldProps} />
        <ErrorMsg name={'passwordConfirm'} type={'required'} msg={'비밀번호를 입력해주세요.'} errors={errors}/>
        <ErrorMsg name={'passwordConfirm'} type={'validate'} msg={'비밀번호가 일치하지 않습니다.'} errors={errors}/>

        <div className='h-10'>
          <input type="submit" value='Sign Up'
            className={isValid ? 'form-btn-active' : 'form-btn-disabled'} 
            disabled={!isValid}
          />
        </div>
        
      </form>
    </div>

  )
}

export default SignUpForm

