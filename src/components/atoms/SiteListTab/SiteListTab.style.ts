import styled, { css } from 'styled-components'
import { flexCenterSpaceBetween } from 'styles/OftenStyle'
export const ListTabDiv = styled.div`
    ${({ theme }) => {
        const { fonts, colors } = theme
        return css`
            margin: 20px;
            color: ${colors.white};
            font-weight: bold;
            cursor: pointer;

            .tab {
                ${flexCenterSpaceBetween}
                width: 166px;
                height: 64px;
                margin: 0 auto;
                background: ${colors.site3x3Bg};
                border-radius: 20px;
                padding: 0 20px;
                border: 2px solid ${colors.transparent};
                h4 {
                    font-size: ${fonts.f16};
                }

                .red {
                    color: ${colors.mainRed};
                }
            }
        `
    }}
`
