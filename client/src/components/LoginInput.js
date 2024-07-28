import React from 'react'
import { logininput } from '../assets'

const LoginInput = ({placeholder, icon}) => {
  return (
    <div>
       <div>
        {icon}
        <input placeholder={placeholder}/>
       </div>
    </div>
  )
}

export default LoginInput