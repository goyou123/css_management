import styled, { css } from 'styled-components'

export const SiteInfoDiv = styled.div`
    ${({ theme }) => {
        const { fonts, colors } = theme
        return css`
            flex: 22;
            padding: 24px;
            background: ${colors.mainGradientBg};
            h3 {
                font-size: ${fonts.f26};
                color: ${colors.white};
                padding-bottom: 8px;
                font-weight: 500;
            }

            .cluster-name {
                font-size: ${fonts.f20};
                color: ${colors.subGray};
            }

            .panel-list {
                margin-top: 20px;
            }
        `
    }}
`
