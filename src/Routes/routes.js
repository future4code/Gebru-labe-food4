import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Login from '../pages/Login'
import Register from '../pages/Register'
import Feed from '../pages/Home/Feed'
import Restaurant from '../pages/Home/Restaurant'
import Profile from '../pages/Profile'
import Cart from '../pages/Cart'

export const Router = () => (
    <Routes>
        <Route index element={ <Feed /> } />
        <Route path='restaurante/:id' element={ <Restaurant /> } />
        <Route path='perfil' element={ <Profile /> } />
        <Route path='login' element={ <Login /> } />
        <Route path='cadastro' element={ <Register /> } />
        <Route path='carrinho' element={ <Cart /> } />
    </Routes> 
)
