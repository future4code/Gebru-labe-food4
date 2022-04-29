import React from 'react'

import Header from '../../components/Header'
import { useProtectedPage } from '../../hooks/useProtectedPage'


const Profile = () => {
useProtectedPage();

  return (
    <div>
        <Header>
            <h2>Perfil</h2>
        </Header>
        <h1>Perfil</h1>
    </div>
  )
}

export default Profile