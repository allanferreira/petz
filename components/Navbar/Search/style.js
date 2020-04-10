import styled from 'styled-components'
import { breakpoints } from '@/services/styledVariables'

export const Search = styled.div`
    display: flex;
    flex: 1;
    @media (max-width: ${breakpoints.xs.max}) {
        display: none;
    }
    button {
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
    }
`

export const Input = styled.input`
    flex: 1;
    background: #fff;
    box-sizing: border-box;
    padding: 20px;
    border: 0;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
`
