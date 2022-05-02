import React from 'react'

import { useNavigate } from "react-router-dom"
import Header from '../../components/Header'
import { useUnprotectedPage } from '../../hooks/useUnprotectedPage'

import { Container, TextStyle3 } from "./styles";

import LogoFood from "../../components/logoFood/LogoFood"
import RegisterForm from "./RegisterForm"




const Register = () => {
  useUnprotectedPage();
  const navigate = useNavigate()
  
  return (
    <Container>
      <Header />
      <LogoFood/>

      <TextStyle3> <p>  Cadastrar </p> </TextStyle3>

      <RegisterForm/>
    </Container>
  )
}

export default Register