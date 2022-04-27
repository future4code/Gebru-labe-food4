import React from 'react'

import * as Styled from './styles'

export const Buttons = (props) => {

  return (
    <Styled.Container 
      onClick={props.onClick}
      width={props.width}
      height={props.height} 
    >
        {props.children}
    </Styled.Container>
  )
}