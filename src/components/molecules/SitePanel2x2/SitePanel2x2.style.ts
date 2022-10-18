import styled, { css } from 'styled-components'
import { flexColumSpaceBetween } from 'styles/OftenStyle'
export const SitePanel2x2Div = styled.div<{ bgImg: string; isBookmark: boolean }>`
    ${({ theme, bgImg, isBookmark }) => {
        const { fonts, colors } = theme
        return css`
            display: inline-block;
            width: 32%;
            min-width: 336px;
            height: 270px;
            position: relative;
            margin: 4px;
            font-size: ${fonts.f14};
            background: url(${bgImg}) no-repeat;
            background-size: cover;
            border-radius: 10px;
            cursor: pointer;
            /* border: 2px solid ${colors.transparent}; */
            /* border: 2px solid ${colors.transBg}; */

            .wrap {
                ${flexColumSpaceBetween}
                height: 100%;
                background: ${colors.transBg};
                border-radius: 10px;
                border: 2px solid ${colors.transparent};

                .title-box {
                    padding: 20px;
                    b {
                        color: ${colors.white};
                        font-weight: bold;
                        font-size: ${fonts.f18};
                    }
                    p {
                        color: ${colors.subGray};
                        padding: 8px 0 16px 0;
                    }
                }

                .bookmark {
                    display: inline-block;
                    position: absolute;
                    width: 22px;
                    height: 22px;
                    top: 20px;
                    right: 20px;
                    svg {
                        width: 100%;
                        height: 100%;
                        path {
                            fill: ${isBookmark ? colors.mainGreen : colors.bookmark};
                        }
                    }
                }

                ul {
                    padding: 10px;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    border-radius: 0 0 10px 10px;

                    background: ${colors.transBg};
                    li {
                        margin-right: 2px;
                    }
                }
            }

            .pick {
                border: 2px solid ${colors.sitePanelStroke};
            }
        `
    }}
`
