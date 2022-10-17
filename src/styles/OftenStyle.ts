import { css } from 'styled-components'
/** 자주 사용되는 CSS 묶음들을 정의한 파일* */

/* 가운데 정렬 - 중앙 */
export const flexCenterAlign = css`
    display: flex;
    align-items: center;
    justify-content: center;
`

/* 가운데 정렬 - 양쪽 끝 */
export const flexCenterSpaceBetween = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

/* 대쉬보드 패널,버튼들에 들어가는 배경 색 */
export const mainBackground = css`
    ${({ theme }) => {
        const { mainStyle, colors } = theme
        return css`
            background: ${colors.mainGradientBg};
            box-shadow: ${mainStyle.mainShadow};
            backdrop-filter: ${mainStyle.mainFilter};
            border-radius: ${mainStyle.mainRadius};
        `
    }}
`
