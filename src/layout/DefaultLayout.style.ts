import styled from 'styled-components'

export const MainLayoutDiv = styled.div`
    position: relative;
`

export const InnerLayoutDiv = styled.main<{ background?: string }>`
    height: 100vh;
    /* min-height: 1080px; */
    overflow: auto;
`
