import React from 'react'

import { useNavigate } from "react-router-dom"
import Header from '../../components/Header'
import { useUnprotectedPage } from '../../hooks/useUnprotectedPage'
import { goToLogin } from "../../Routes/coodinator"

const Register = () => {
  useUnprotectedPage();
  const navigate = useNavigate()
  
  return (
    <div>
      <Header />
   

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