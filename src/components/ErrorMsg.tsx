import React from 'react'

function ErrorMsg(props) {
  const {name, type, msg, errors} = props;
  return (
    <div className='mb-4 inline-block'>
      {errors[name] && errors[name].type === type && 
      <p className='form-validation-error'>{msg}</p>}
    </div>
  )
}

export default ErrorMsg