import styled, { css } from 'styled-components'

export const SitePanel3x3Div = styled.div<{ bookmark: boolean }>`
    ${({ theme, bookmark }) => {
        const { fonts, colors } = theme
        return css`
            display: inline-block;
            width: 19%;
            min-width: 200px;
            background: ${colors.site3x3Bg};
            position: relative;
            border-radius: 10px;
            margin: 4px;
            cursor: pointer;
            border: 1px solid ${colors.transparent};

            > div {
                padding: 14px;
                border-radius: 10px;
                border: 2px solid transparent;
            }
            > div.pick {
                border: 2px solid ${colors.sitePanelStroke};

                /* border: 3px solid; */
            }

            b {
                font-size: ${fonts.f16};
                color: ${colors.white};
                font-weight: bold;
            }
            p {
                color: ${colors.subGray};
                font-size: ${fonts.f14};
                padding: 8px 0 16px 0;
            }

            .bookmark {
                position: absolute;
                top: 14px;
                right: 14px;
                svg path {
                    fill: ${bookmark ? colors.mainGreen : colors.bookmark};
                    /* fill: ${bookmark ? colors.bookmark : colors.mainGreen}; */
                }
            }

            ul {
                display: grid;
                grid-gap: 3px;
                grid-template-columns: repeat(auto-fit, minmax(48px, 1fr));
            }
        `
    }}
`
