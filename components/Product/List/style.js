import styled from 'styled-components'
import { breakpoints } from '@/services/styledVariables'

export const Grid = styled.div`
    display: grid;
    grid-gap: 15px;
    @media (min-width: ${breakpoints.xl.min}) {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    }
    @media (max-width: ${breakpoints.lg.max}) and (min-width: ${breakpoints.md.min}) {
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media (max-width: ${breakpoints.sm.max}) and (min-width: ${breakpoints.sm.min}) {
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width: ${breakpoints.xs.max}) {
        grid-template-columns: 1fr;
    }
`
