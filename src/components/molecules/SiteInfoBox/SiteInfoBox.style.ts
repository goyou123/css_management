import styled, { css } from 'styled-components'

export const SiteInfoBoxDiv = styled.div`
    ${({ theme }) => {
        const { fonts, colors } = theme
        return css`
            position: relative;
            font-size: ${fonts.f14};
            color: ${colors.white};
            background: ${colors.site3x3Bg};
            padding: 18px;
            border-radius: 10px;
            margin-bottom: 10px;
            h3 {
                font-size: ${fonts.f20} !important;
                padding: 0 0 10px 0;
            }

            .service-info-box {
                display: flex;
                border-radius: 10px;
                margin-bottom: 4px;

                p {
                    color: ${colors.subGray};
                }

                .main-info {
                    flex: 45;
                    border-right: 1px solid ${colors.inputStroke};

                    b {
                        display: block;
                        font-size: ${fonts.f20};
                        margin: 8px 0 0 0;
                    }
                }

                .sub-info {
                    flex: 55;
                    ul {
                        li {
                            display: flex;
                            justify-content: space-between;
                            padding: 0 0 8px 10px;
                        }
                    }
                }
            }

            .event-box {
                margin-top: 10x;
                border: 2px solid ${colors.inputStroke};
                height: 66px;
                overflow: auto;
                padding: 4px 0;
                border-radius: 10px;
                ul li {
                    display: flex;
                    align-items: flex-start;
                    margin: 8px 0;
                    padding-left: 4px;
                    svg {
                        flex-shrink: 0;
                        width: 30px;
                    }
                    p {
                        padding: 0 px;
                        color: ${colors.subGray};
                        flex-shrink: 0;
                        width: 100px;
                    }
                    b {
                        flex-grow: 1;
                    }
                }
            }
        `
    }}
`

export const EmergencyDiv = styled.div`
    ${({ theme }) => {
        const { fonts, colors } = theme
        return css`
            display: flex;
            align-items: center;
            font-size: ${fonts.f14};
            color: ${colors.white};

            div:nth-child(2) {
                margin-left: 8px;
            }

            > div {
                border: 2px solid ${colors.inputStroke};
                border-radius: 10px;
                flex: 1;
                padding: 4px;
                margin: 8px 0;
                ul {
                    li:first-child {
                        padding: 8px 2px;
                        font-weight: bold;
                    }
                    li {
                        display: flex;
                        justify-content: space-between;
                        padding: 2px;

                        p {
                            color: ${colors.subGray};
                        }
                    }
                }
            }
        `
    }}
`
