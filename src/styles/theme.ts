/* 타입스크립트에서 styled-components를 사용하려면  DefaultTheme 형식과 themes.ts 의 타입을 맞춰야 한다. */
import { DefaultTheme } from 'styled-components'
import bg_dark from 'assets/images/bg_dark.svg'
import bg_light from 'assets/images/bg_light.svg'
/* styles.scss에 62.5%로 설정해놓아서 1.2rem = 12px  */
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
    bgColor: '#202020',

    black: '#000000',
    transparent: 'transparent',
    mainRed: '#FF5C5C',
    mainGreen: '#62D1AD',
    mainGray: '#AAAAAA',
    lightRed: '#FFBEBE', // 대쉬보드 얼굴모양안에 들어가는 게이지 색
    lightGreen: '#A6F8B3', // 대쉬보드 얼굴모양안에 들어가는 게이지 색
    activeButton: 'rgba(170, 170, 170, 0.32)', // 클러스터 관리 - 팝업 추가,변경 버튼 배경색
}

/* 라이트 모드에서만 사용되는 color 정의 */
const onlyLight = {
    BACKGOUND: bg_light,
    pageBackGround: 'linear-gradient(153.06deg, #E4F6F0 0%, #D2F8F3 59.9%, #E1EDE4 100%);', // 페이지 공통 배경 그라디언트

    mainGradientBg: 'linear-gradient(135deg, rgba(239, 239, 239, 0.65) 0%, rgba(239, 239, 239, 0.32) 100%)', // 기본 그라디언트 배경색
    sidebarBg: 'linear-gradient(135deg, rgba(239, 239, 239, 0.65) 0%, rgba(239, 239, 239, 0.32) 100%)', // 사이드가 그라디언트 배경색
    sidebarIcon: 'rgba(102, 102, 102, 0.54);',
    clusterSumPanelBg: 'linear-gradient(130.04deg,rgba(10,17,17,0.072) 0%,rgba(255,255,255,0.396) 100%)',
    site3x3Bg: 'linear-gradient(130.04deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.32) 100%);', // 사이트 3x3 패널에 쓰이는 색
    panelBg: 'background: rgba(17, 17, 17, 0.32);',
    test: 'red',
    btnOpenBorder: 'rgba(255,255,255,0.6)', // 대쉬보드에 있는 팝업 버튼들 open했을때 색
    subBorder: 'rgba(255,255,255,0.12)', // 타임라인 안에 있는 border
    bubbleBg: '#e2e2e2', // 대쉬보드 지도 변경 시 말풍선 배경색
    white: '#333333',
}

/* 다크모드에서만 사용되는 color 정의 */
const onlyDark = {
    BACKGOUND: bg_dark,
    pageBackGround: 'linear-gradient(153.06deg, #086A8A 0%, #034156 59.9%, #3C3A4E 100%);',

    mainGradientBg: 'linear-gradient(135deg, rgba(17, 17, 17, 0.6) 0%, rgba(17, 17, 17, 0.08) 100%)',
    sidebarBg: 'linear-gradient(151.95deg, rgba(17, 17, 17, 0.6) 0%, rgba(17, 17, 17, 0.08) 100%)',
    sidebarIcon: '#7A7A7A',
    clusterSumPanelBg: 'linear-gradient(130.04deg, rgba(255, 255, 255, 0.2) 0%, rgba(17, 17, 17, 0.0096) 31%);',
    site3x3Bg: 'rgba(17, 17, 17, 0.12);', // 사이트 상세 페이지 사이트 3x3 패널에 쓰이는 색
    panelBg: 'rgba(17, 17, 17, 0.32);',

    test: 'blue',
    btnOpenBorder: 'rgba(255,255,255,0.6)', // 버튼 활성화됬을 때 색
    subBorder: 'rgba(255,255,255,0.12)', // 타임라인 안에 있는 border
    bubbleBg: '#222222', // 대쉬보드 지도 변경 시 말풍선 배경색
    white: '#ffffff',
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
