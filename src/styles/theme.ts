/* 타입스크립트에서 styled-components를 사용하려면  DefaultTheme 형식과 themes.ts 의 타입을 맞춰야 한다. */
import { DefaultTheme } from 'styled-components'
import bg_dark from 'assets/images/bg_dark.svg'
import bg_light from 'assets/images/bg_light.svg'

const fonts = {
    f12: '1.2rem',
    f14: '1.4rem',
    f15: '1.5rem',
    f16: '1.6rem',
    f18: '1.8rem',
    f20: '2.0rem',
    f24: '2.4rem',
    f26: '2.6rem',
}

const mainStyle = {
    mainBg: 'linear-gradient(135deg, rgba(17, 17, 17, 0.6) 0%, rgba(17, 17, 17, 0.08) 100%)',
    mainShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    mainFilter: 'blur(21px)',
    mainRadius: '20px',
}

/* 공통으로 사용되는 color 정의 */
const colors = {
    transparent: 'transparent',
    mainRed: '#FF5C5C',
    mainGreen: '#62D1AD',
    mainGray: '#AAAAAA',
}

/* 라이트 모드에서만 사용되는 color 정의 */
const onlyLight = {
    BACKGOUND: bg_light,
    mainGradientBg: 'linear-gradient(135deg, rgba(239, 239, 239, 0.65) 0%, rgba(239, 239, 239, 0.32) 100%)', // 기본 그라디언트 배경색
    sidebarBg: 'linear-gradient(135deg, rgba(239, 239, 239, 0.65) 0%, rgba(239, 239, 239, 0.32) 100%)', // 사이드가 그라디언트 배경색
    site3x3Bg: 'linear-gradient(130.04deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.32) 100%);', // 사이트 3x3 패널에 쓰이는 색
    white: '#333333',
    inputStroke: '#0000001F',
    subGray: '#666666',
    transBorder: '#0000001F',
    transBg: '#FFFFFF8A',
    bookmark: '#DDDDDDD',
    sitePanelStroke: '#00B794',
}

/* 다크모드에서만 사용되는 color 정의 */
const onlyDark = {
    BACKGOUND: bg_dark,
    mainGradientBg: 'linear-gradient(135deg, rgba(17, 17, 17, 0.6) 0%, rgba(17, 17, 17, 0.08) 100%)',
    sidebarBg: 'linear-gradient(151.95deg, rgba(17, 17, 17, 0.6) 0%, rgba(17, 17, 17, 0.08) 100%)',
    site3x3Bg: 'rgba(17, 17, 17, 0.12);',
    white: '#ffffff',
    inputStroke: '#FFFFFF1F',
    subGray: '#AAAAAA',
    transBorder: '#ffffff36',
    transBg: '#1111119A',
    bookmark: '#777777',
    sitePanelStroke: 'rgba(255,255,255,0.6)',
}

/* 최종 라이트모드에서 사용되는 컬러 정의 */
const lightThemeColors = {
    colors: {
        ...colors,
        ...onlyLight,
    },
}

/* 최종 다크모드에서 사용되는 컬러 정의 */
const darkThemeColors = {
    colors: {
        ...colors,
        ...onlyDark,
    },
}

const darkTheme: DefaultTheme = {
    ...darkThemeColors,
    fonts,
    mainStyle,
}

const lightTheme: DefaultTheme = {
    ...lightThemeColors,
    fonts,
    mainStyle,
}

export { darkTheme, lightTheme }
