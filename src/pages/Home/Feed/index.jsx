import React, { useContext } from 'react'

import * as Styled from './styled'
import Header from '../../../components/Header'
// import { useNavigate } from "react-router-dom"
// import { goToRestaurant } from "../../../Routes/coodinator"
import { useProtectedPage } from '../../../hooks/useProtectedPage'
import CardRestautant from '../../../components/CardRestautant'
import GlobalStateContext from '../../../Global/GlobalStateContext'

const Feed = () => {
  useProtectedPage();
  // const navigate = useNavigate()
  const { restaurants } = useContext(GlobalStateContext)
  
  return (
    <Styled.Container>
        <Header>
            <h2>ifuture</h2>
        </Header>
        {
          restaurants.length > 0 ?
          restaurants.map((restaurant) => {
            return <CardRestautant key={restaurant.id} restaurant={restaurant}/>
          }) 
          : <h1>Loading</h1>
        }
    </Styled.Container>
  )
}

export default Feed