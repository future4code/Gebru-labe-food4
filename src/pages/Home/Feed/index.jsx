import React from 'react'

import Header from '../../../components/Header'
import { useNavigate } from "react-router-dom"
import { goToRestaurant } from "../../../Routes/coodinator"

const Feed = () => {
  const navigate = useNavigate()

  return (
    <div>
        <Header>
            <h2>4FOOD</h2>
        </Header>
        <h1>4FOOD</h1>
        <button onClick={() => goToRestaurant(navigate)}>
          Restaurante
        </button>
    </div>
  )
}

export default Feed