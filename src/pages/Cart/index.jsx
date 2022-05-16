import React, {  useState } from "react";
import Header from "../../components/Header";
import CartAdd from "../../components/CartAdd"
import * as Styled from './styled'
import {
  CartContainer,
  ContainerAddress,
  PAddress,
  Address,
  Price,
  FormOfPayment,
  H5Styled,
  Button,
  ContainerH5,
  ContainerPrice,
  Freight,
  ContainerTotal,
  FormPayment,
  LabelStyled,
  InputStyled
} from "../Cart/styled";
import { useRequestData } from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/BASE_URL";
import Footer from '../../components/Footer'
import axios from "axios";

const headers = {
  headers: {
    auth: localStorage.getItem('token')
  }
}

const Cart = () => {

  const [profile] = useRequestData(`${BASE_URL}/profile`);
  const guardaCarrinho = localStorage.getItem("carrinho")
  const cart = JSON.parse(guardaCarrinho)
 console.log(cart)
  const body = {
    products: [{
        id: cart[0].id,
        quantity: cart[0].amount
    }],
    paymentMethod: 'creditcard'
}
 
  const confirmPedido = () => {
    axios 
    .post(`${BASE_URL}/restaurants/${cart[0].idRes}/order`,body, headers )
    .then( () => {
      alert("pedido confirmado")
    })
    .catch( (err) => {
      alert(err.response.data.message)
    })
  }

  const cartList = cart.map( (item) => {
    return  <CartAdd key={item.id} item={item}/>
  } )
  
  let totalPrice = 0;
  cart.forEach( (cal) => {
    totalPrice += cal.shipping + Number(cal.price * cal.amount)
  })

  return (
    <div>
      <Header>
        <h2>Meu carrinho</h2>
      </Header>
      <CartContainer>
        <ContainerAddress>
          <PAddress>Endereço de entrega</PAddress>
          <Address>{profile?.user.address}</Address>
          <div >{cart[0]?.nameRestaurant}</div>
          <Styled.delivery><span>{cart[0]?.deliveryTime - 10 } - {cart[0]?.deliveryTime} min</span></Styled.delivery>
        </ContainerAddress>
          { cart === null ? <p>carrinho vazio</p> : cartList }
        <ContainerTotal>
          <br/>
          <br/>
          <ContainerH5>
            <H5Styled>SUBTOTAL</H5Styled>
          </ContainerH5>

          <ContainerPrice>
            <Freight>{ cart[0].shipping === null ? "0,00" : `${cart[0].shipping},00`} R$</Freight>
            <Price>R$ {totalPrice === 0 ? "0,00" : `${totalPrice},00`}</Price>
          </ContainerPrice>
        </ContainerTotal>

        <FormOfPayment>Forma de pagamento</FormOfPayment>
        <FormPayment>
          <div>
            <LabelStyled>
              <InputStyled type="radio" name="pagamento" value="Dinheiro" />
              Dinheiro
            </LabelStyled>
          </div>
          <div>
            <LabelStyled>
              <InputStyled type="radio" name="pagamento" value="Cartão de crédito vinicius" />
              Cartão de crédito
            </LabelStyled>
          </div>
        </FormPayment>
        <Button onClick={ () => confirmPedido()}>Confirmar</Button>
        <br/>
        <Footer />
      </CartContainer>
    </div>
  );
};

export default Cart;
