import styled from 'styled-components'
import { components, colors, breakpoints } from '@/services/styledVariables'

export const Navbar = styled.div`
    padding: 16px 36px 21px ;
    box-sizing: border-box;
    position: fixed;
    height: ${components.navbar.height.desktop};
    top: 0;
    left: 0;
    width: 100%;
    box-shadow: 0 10px 12px -2px rgba(0, 0, 0, .12);
    background: ${colors.frostedYellow};
    display: flex;
    @media (max-width: ${breakpoints.xs.max}) {
        justify-content: center;
    }
`

export const Logo = styled.img`
    height: 100%;
    width: auto;
`

export const LogoArea = styled.div`
    padding-right: 40px;
    width: 100px;
    @media (max-width: ${breakpoints.xs.max}) {
        width: auto;
    }
`
