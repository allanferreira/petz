import styled from 'styled-components'
import { colors } from '@/services/styledVariables'

export const Center = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const Text = styled.div`
    color: ${colors.text[0]};
    font-size: 16px;
    line-height: 1.5;
`
