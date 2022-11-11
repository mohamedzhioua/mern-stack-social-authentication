import React from 'react'
import '../CustomInput/CustomInput.css'
function CustomInput({label ,type , placeholder ,name ,onChangeHandler}) {
  return (
    <div class="form-group">
    <label >{label}</label>
    <input  type={type}  placeholder={placeholder} name={name} onChange={onChangeHandler}/>
  </div>
    )
}

export default CustomInput