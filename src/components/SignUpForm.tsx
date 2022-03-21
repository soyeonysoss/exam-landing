import React, { useRef } from 'react'
import { useForm } from "react-hook-form";


const SignUpForm = () => {
  const { register, handleSubmit, watch, formState: { errors } }: any = useForm();
  const password = useRef();
  password.current = watch("password");

  const onSubmit = (data) => {
    console.log('data', data)
  };

  return (
    <div className='w-full max-w-xs'>
      <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
        onSubmit={handleSubmit(onSubmit)}>

        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>이메일</label>
          <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            type="email"
            {...register('email',{ required: true })}
          />
          {errors.email && <p className='text-red-500 text-xs italic'>이메일을 입력해주세요.</p>}
        </div>

        <div>
          <label className='block text-gray-700 text-sm font-bold mb-2'>이름</label>
          <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            {...register('name', { required: true, maxLength: 10 })}
          />
          {errors.name && errors.name.type === "required"
            && <p className='text-red-500 text-xs italic'>이름을 입력해주세요.</p>}
          {errors.name && errors.name.type === "maxLength"
            && <p className='text-red-500 text-xs italic'>10자 이내의 이름을 입력해주세요.</p>}
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>비밀번호</label>
          <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            type="password"
            ref={register("password", { required: true, minLength: 6 })}
          />
          {errors.password && errors.password.type === "required"
            && <p className='text-red-500 text-xs italic'>비밀번호를 입력해주세요.</p>}
          {errors.password && errors.password.type === "minLength"
            && <p className='text-red-500 text-xs italic'>6자 이상의 비밀번호를 입력해주세요.</p>}
        </div>
        
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>비밀번호 확인</label>
          <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            type="password"
            ref={register("password_confirm", {
              required: true,
              validate: (value) =>
                value === password.current
            })}
          />
          {errors.password_confirm && errors.password_confirm.type === "required"
            && <p className='text-red-500 text-xs italic'>비밀번호를 입력해주세요.</p>}
          {errors.password_confirm && errors.password_confirm.type === "validate"
            && <p className='text-red-500 text-xs italic'>비밀번호가 일치하지 않습니다.</p>}
        </div>
        <input type="submit" value='Sign Up'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
        />

      </form>
    </div>

  )
}

export default SignUpForm