import React from 'react'

import { useNavigate } from "react-router-dom"
import { goToLogin } from "../../Routes/coodinator"

const Register = () => {
  const navigate = useNavigate()
  
  return (
    <div>
        <h1>Cadastro</h1>
        <button
          onClick={() => goToLogin(navigate)}
        >
          Cadastrar
        </button>
    </div>
  )
}

export default Register