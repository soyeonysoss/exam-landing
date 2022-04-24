import React from 'react'

function Label(props) {
  const label = props;
  return (
    <div>
      <label className='form-label'>{label.label}</label>
    </div>
  )
}

export default Label