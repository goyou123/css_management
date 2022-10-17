import styled, { css } from 'styled-components'
import { mainBackground, flexCenterAlign } from 'styles/OftenStyle'
export const SidebarDiv = styled.div<{ themeMode: string }>`
    ${({ theme, themeMode }) => {
        const { colors, fonts, mainStyle } = theme
        return css`
            z-index: 1003;
            position: absolute;
            top: 0;
            left: 10px;
            margin: 20px 0 20px 20px;
            width: 80px;
            height: 95%;
            /* min-height: 1000px; */
            background: ${colors.sidebarBg};
            box-shadow: ${mainStyle.mainShadow};
            backdrop-filter: blur(54px);
            border-radius: 20px;

            .sidebar_wrap {
                display: flex;
                flex-direction: column;

                .btn_dark_mode {
                    margin: 40px auto;
                    width: 40px;
                    height: 40px;
                    border-radius: 100%;
                    ${mainBackground}
                    line-height: 40px;

                    span {
                        ${flexCenterAlign}
                    }
                }

                .tab_menus {
                    li {
                        margin: 0 0 20px 0;
                        cursor: pointer;
                        text-align: center;
                        p {
                            font-size: ${fonts.f14};
                            color: ${colors.white};
                        }
                    }

                    li:hover {
                        font-weight: bold;
                    }
                }
            }
        `
    }}
`
