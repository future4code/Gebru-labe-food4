import React from 'react'

import Header from '../../components/Header'

const Cart = () => {
  return (
    <div>
        <Header>
          <h2>Meu carrinho</h2>
        </Header>
        <div>
          <p>Endereço de Entrega</p> 
        </div>

        <button>Confirmar</button>
    </div>
  )
}

export default Cart