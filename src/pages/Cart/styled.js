import styled from 'styled-components';

export const CartContainer = styled.div`
display: flex;
align-items: center;
flex-direction: column;
gap: 10px;
`
export const ContainerAddress = styled.div`
justify-content: left;
background-color: #e5e4e2;
width: 100%;
height: 10vh;
padding: 10px;
`

export const PAddress = styled.p`
color: lightgrey;
font-size: 16px;
font-weight: bold;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
letter-spacing: 1px;
margin-left: 10px;
gap: 5px;
`

export const Address = styled.p`
color: black;
font-size: 16px;
font-weight: bold;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
margin-left: 10px;
`

export const Price = styled.p`
color: #e8222e;
font-weight: bold;
`