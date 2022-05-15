import React, { useContext, useEffect } from "react";
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

const Cart = () => {
  const [profile] = useRequestData(`${BASE_URL}/profile`);
  const guardaCarrinho = localStorage.getItem("carrinho")
  const cart = JSON.parse(guardaCarrinho)
  // console.log(cart)


  const cartList = cart.map( (item) => {
    return  <CartAdd key={item.id} item={item}/>
  } )
  
  const frete = cart.map( (item) => {
    return item.shipping
  })
  const fretes = frete;

  const restaurant = cart.map( (item) => {
    return item.nameRestaurant
  })
  const delivery = cart.map( (item) => {
    return item.deliveryTime
  })
  const nameRestaurant = cart.map( (item) => {
    return item.nameRestaurant
  })
  
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
          <div >{nameRestaurant && nameRestaurant}</div>
          <Styled.delivery><span>{delivery - 10 } - {delivery} min</span></Styled.delivery>
        </ContainerAddress>
          { cart === null ? <p>carrinho vazio</p> : cartList }
        <ContainerTotal>
          <br/>
          <br/>
          <ContainerH5>
            <H5Styled>SUBTOTAL</H5Styled>
          </ContainerH5>

          <ContainerPrice>
            <Freight>{ fretes === null ? "0,00" : `${frete},00`} R$</Freight>
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
              <InputStyled type="radio" name="pagamento" value="Cartão de crédito" />
              Cartão de crédito
            </LabelStyled>
          </div>
        </FormPayment>
        <Button>Confirmar</Button>
      </CartContainer>
    </div>
  );
};

export default Cart;
