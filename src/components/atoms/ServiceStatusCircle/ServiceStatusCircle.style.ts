import styled, { css } from 'styled-components'

/* circle 여부에 따라 타원형, 원형이 결정됨 */
export const ServiceStatusCircleLi = styled.li<{ status: string; circle: boolean }>`
    ${({ theme, status, circle }) => {
        const { colors, fonts } = theme
        // NOTUSED 인것들은 서버에서 아예 보내지 않기로 함!
        return css`
            ${status === 'NORMAL' ? `border: 1px solid ${colors.mainGreen}; color : ${colors.mainGreen};` : ''}
            ${status === 'ERROR' ? `border: 1px solid ${colors.mainRed}; color : ${colors.mainRed};` : ''}
            ${status === 'UNKNOWN' ? `border: 1px solid ${colors.mainGray}; color : ${colors.subGray};` : ''}
            ${status === 'NOTUSED' ? `border: 1px solid ${colors.mainGray}; color : ${colors.subGray};` : ''}
            font-size: ${fonts.f12};
            width: 48px;
            height: 20px;
            height: ${circle ? '48px' : '20px'};
            line-height: ${circle ? '48px' : '20px'};
            border-radius: 99px;
            text-align: center;
        `
    }}
`
