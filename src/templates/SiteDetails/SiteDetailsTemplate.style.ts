import styled from 'styled-components'
import { templateBackground } from 'styles/OftenStyle'

export const SiteDetailsDiv = styled.div`
    ${templateBackground}
    display: flex;
    align-items: center;
    position: relative;
    > div:nth-child(1) {
        flex: 78;
        height: 80%;
    }
    > div:nth-child(2) {
        flex: 22;
        height: 100vh;
    }
`
