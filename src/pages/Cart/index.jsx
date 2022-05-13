import React from "react";
import Header from "../../components/Header";
import { CartContainer, ContainerAddress, PAddress, Address, Price } from "../Cart/styled";

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

        <h5>SUBTOTAL</h5>
        <Price>R$</Price>

        <p>Forma de Pagamento</p>
        <button>Confirmar</button>
      </CartContainer>
    </div>
  );
};

export default Cart;
