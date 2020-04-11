import styled from 'styled-components'
import { colors } from '@/services/styledVariables'

export const Product = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    border: 1px solid ${colors.gray4};
    border-radius: 4px;
    padding: 10px 10px 23px;
    a {
        display: inherit;
        flex-direction: inherit;
        align-items: inherit;
    }
`

export const Image = styled.img`
    max-width: 116px;
    width: 100%;
`

export const Name = styled.h1`
    color: ${colors.darkBlue};
    text-align: center;
    margin-bottom: 15px;
    line-height: 1.3;
`
