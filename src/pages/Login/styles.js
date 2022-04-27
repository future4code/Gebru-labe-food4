import styled from 'styled-components'
import { Buttons } from '../../components/Buttons'
import * as Colors from '../../constants/colors'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Content = styled.div`

`

export const Button = styled(Buttons)`
    color: ${Colors.primary};
    background: ${props => props.background};
    padding: ${props => props.padding};
`