import styled from 'styled-components'
import { colors } from '@/services/styledVariables'

export const Info = styled.div`
    display: grid;
    grid-gap: 50px;
    grid-template-columns: 1fr 1fr;
`

export const ContentArea = styled.div``

export const ImageArea = styled.div`
    border: 1px solid ${colors.gray4};
`

export const Image = styled.img`
    width: 100%;
    height: auto;
`
