import React, { useRef, useState, forwardRef } from 'react'

const FormField = forwardRef((props:any, ref:any) => {
    const { inputType, register } = props;
    

    return (
        <div className=''>
            <input className='form-input'
                type={inputType}
                // ref={ref} // ref 안 쓰는데 왜 되지..?
                {...register}
            />

        </div>
    )
  });

FormField.displayName = "FormField"
export default FormField;