import React, { useRef, useState, useEffect } from 'react'
import { useForm } from "react-hook-form";

const SignUpForm = () => {
  const { register, handleSubmit, watch, formState: { errors } }: any = useForm( { mode: "onChange" } );
  const password = useRef();
  password.current = watch("password");

  const [ disabled, setDisabled ] = useState(true);
  const [ submitBtn, setSubmitBtn ] = useState('form-btn-disabled');
  const watchFields = watch(['email','name','password','password_confirm']);
  console.log(watchFields[0] === '');
  console.log(watchFields[1] === '');
  console.log(watchFields[2] === '');
  console.log(watchFields[3] === '');
  console.log(errors);
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
  
  return (
    <div className='w-full max-w-xs'>
      <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
        onSubmit={handleSubmit(onSubmit)} onChange={handleSubmitBtn}>

        <div className='mb-4'>
          <label className='form-label'>이메일</label>
          <input className='form-input'
            type="email"
            {...register('email',{ required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email && errors.email.type === 'required' && <p className='form-validation-error'>이메일을 입력해주세요.</p>}
          {errors.email && errors.email.type === 'pattern' 
            && <p className='form-validation-error'>이메일 형식에 맞게 입력해주세요.</p>}
        </div>

        <div>
          <label className='form-label'>이름</label>
          <input className='form-input'
            {...register('name', { required: true, maxLength: 10 })}
          />
          {errors.name && errors.name.type === "required"
            && <p className='form-validation-error'>이름을 입력해주세요.</p>}
          {errors.name && errors.name.type === "maxLength"
            && <p className='form-validation-error'>10자 이내의 이름을 입력해주세요.</p>}
        </div>

        <div className='mb-4'>
          <label className='form-label'>비밀번호</label>
          <input className='form-input'
            type="password"
            {...register("password", { required: true, minLength: 6 })}
          />
          {errors.password && errors.password.type === "required"
            && <p className='form-validation-error'>비밀번호를 입력해주세요.</p>}
          {errors.password && errors.password.type === "minLength"
            && <p className='form-validation-error'>6자 이상의 비밀번호를 입력해주세요.</p>}
        </div>

        <div className='mb-4'>
          <label className='form-label'>비밀번호 확인</label>
          <input className='form-input'
            type="password"
            {...register("password_confirm", {
              required: true,
              validate: (value) =>
                value === password.current
            })}
          />
          {errors.password_confirm && errors.password_confirm.type === "required"
            && <p className='form-validation-error'>비밀번호를 입력해주세요.</p>}
          {errors.password_confirm && errors.password_confirm.type === "validate"
            && <p className='form-validation-error'>비밀번호가 일치하지 않습니다.</p>}
        </div>
        <input type="submit" value='Sign Up'
          className={submitBtn} disabled={disabled}
        />

      </form>
    </div>

  )
}

export default SignUpForm