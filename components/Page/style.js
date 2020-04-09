import styled from 'styled-components'
import { components, colors } from '@/services/styledVariables'

export const Page = styled.div`
    width: 80%;
    margin: 0 auto;
    background: ${colors.background};
    padding-top: calc(${components.navbar.height.desktop} + 40px);
`
