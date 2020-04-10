import styled from 'styled-components'
import { colors } from '@/services/styledVariables'

export const Info = styled.div`
    display: grid;
    grid-gap: 50px;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 40px;
`

export const ContentArea = styled.div``

export const ImageArea = styled.div`
    border: 1px solid ${colors.gray4};
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Image = styled.img`
    width: 100%;
    height: auto;
`

export const List = styled.ul`
    line-height: 1.3;
`
export const Item = styled.li`
    margin-bottom: 10px;
    color: ${colors.text[0]};
    strong {
        font-weight: bold;
        display: block;
        color: ${colors.text[1]};
    }
`
