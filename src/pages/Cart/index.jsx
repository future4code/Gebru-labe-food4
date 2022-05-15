import React from "react";
import Header from "../../components/Header";
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
import Footer from '../../components/Footer'

const Cart = () => {
  return (
    <div>
      <Header>
        <h2>Meu carrinho</h2>
      </Header>
      <CartContainer>
        <ContainerAddress>
          <PAddress>Endereço de entrega</PAddress>
          <Address>Endereço aqui</Address>
        </ContainerAddress>

        <ContainerTotal>
          <ContainerH5>
            <H5Styled>SUBTOTAL</H5Styled>
          </ContainerH5>

          <ContainerPrice>
            <Freight>Frete R$</Freight>
            <Price>R$</Price>
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
        <Footer />
      </CartContainer>
    </div>
  );
};

export default Cart;
