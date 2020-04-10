import styled from 'styled-components'
import { colors } from '@/services/styledVariables'

export const Button = styled.button`
    background: ${props => props.danger ? colors.danger : colors.darkBlue};
    color: ${colors.white};
    border-radius: 5px;
    padding: 0 20px;
    display: inline-block;
    transition: opacity .2s;
    cursor: pointer;
    height: 43px;
    align-items: center;
    display: flex;
    box-sizing: border-box;
    font-weight: bold;
    border: 0;
    text-transform: uppercase;
`
