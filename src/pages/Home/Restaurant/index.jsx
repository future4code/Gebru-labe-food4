import React from 'react'

import Header from '../../../components/Header'
import { useNavigate } from "react-router-dom"
import { goToFeed } from "../../../Routes/coodinator"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useProtectedPage } from '../../../hooks/useProtectedPage'

const Restaurant = () => {
  useProtectedPage();
  const navigate = useNavigate()

  return (
    <div>
        <Header>
            <button onClick={() => goToFeed(navigate)}>
              <ArrowBackIosNewIcon />
            </button>
            <h2>Restaurante</h2>
        </Header>
        <h1>Restaurante</h1>
    </div>
  )
}

export default Restaurant