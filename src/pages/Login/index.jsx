import React from 'react'

import { useNavigate } from "react-router-dom"
import { goToFeed, goToRegister } from "../../Routes/coodinator"

const Login = () => {
  const navigate = useNavigate()
  
  return (
    <div>
        <h1>Login</h1>
        <button
          onClick={() => goToFeed(navigate)}
        >
          Entrar
        </button>
        <h4>
          Não possui cadastro
          <button
            onClick={() => goToRegister(navigate)}
          >
            Clique aqui
          </button>
        </h4>
    </div>
  )
}

export default Login