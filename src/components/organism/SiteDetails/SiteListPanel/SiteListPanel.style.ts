import styled, { css } from 'styled-components'
import { flexCenterSpaceBetween } from 'styles/OftenStyle'
export const SiteListPanelDiv = styled.div`
    ${({ theme }) => {
        const { fonts, colors, mainStyle } = theme
        return css`
            display: flex;
            flex-direction: column;
            font-size: ${fonts.f20};
            color: ${colors.white};
            background: ${colors.mainGradientBg};
            height: 80%;
            margin: 0 40px 0 140px;
            border-radius: ${mainStyle.mainRadius};
            box-shadow: ${mainStyle.mainShadow};
            backdrop-filter: blur(21px);

            .top {
                display: flex;
                height: 64px;
                border-bottom: 1px solid ${colors.transBorder};

                h3 {
                    /* flex: 15; */
                    width: 208px;
                    line-height: 64px;
                    height: inherit;
                    padding-left: 20px;
                    font-weight: bold;
                }

                .select-area {
                    ${flexCenterSpaceBetween}

                    // 3x3, 2x2 버튼
                    .btn-layout {
                        display: flex;

                        div.active {
                            svg {
                                rect {
                                    fill: ${colors.white};
                                    stroke: ${colors.white};
                                }

                                rect:nth-child(1) {
                                    fill: none;
                                }
                            }
                        }
                        div {
                            cursor: pointer;
                        }
                        div:nth-child(2) {
                            margin-left: 12px;
                        }
                    }

                    // 선택 필터
                    .select-filter {
                        margin-right: 20px;
                    }
                }
            }

            .contents-area {
                height: inherit;
                display: flex;
                flex: 1;
                .tabs {
                    min-width: 208px;
                    border-right: 1px solid ${colors.transBorder};
                    .on div div {
                        border: 2px solid ${colors.sitePanelStroke};
                    }
                }

                .site-lists {
                    overflow: auto;
                    padding: 10px;
                }
            }
        `
    }}
`
