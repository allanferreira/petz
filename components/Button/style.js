import styled from 'styled-components'
import { colors } from '@/services/styledVariables'

export const Button = styled.div`
    background: ${props => props.danger ? colors.danger : colors.main};
    color: ${colors.white};
    border-radius: 3px;
    padding: 3px;
    opacity: 1;
    display: inline-block;
    transition: opacity .2s;
    cursor: pointer;
    &:hover {
        opacity: .7;
    }
`
