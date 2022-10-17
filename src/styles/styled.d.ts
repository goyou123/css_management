import { ReactComponentElement } from 'react'
import 'styled-components'

/**
 * - defaultTheme 인터페이스는 node_modules/@types/styled-components/ts3.7/index.d.ts에 정의되어있다(빈객체 상태).
 *   해당 인터페이스를 확장하는 개념이다
 * - 타입스크립트에서 theme.ts객체를 사용하기 위함
 */

declare module 'styled-components' {
    // ThemeProvider theme에 적용할 타입으로, theme.ts의 속성과 동일하게 작성
    export interface DefaultTheme {
        colors: {
            BACKGOUND: ReactComponentElement
            pageBackGround: string
            sidebarBg: string
            sidebarIcon: string
            mainGradientBg: string
            site3x3Bg: string
            panelBg: string
            bgColor: string
            white: string
            black: string
            transparent: string
            test: string
            btnOpenBorder: string
            subBorder: string
            mainRed: string
            mainGreen: string
            mainGray: string
            lightRed: string
            lightGreen: string
            bubbleBg: string
        }

        fonts: {
            f12: string
            f14: string
            f15: string
            f16: string
            f18: string
            f20: string
            f24: string
            f26: string
        }

        mainStyle: {
            mainBg: string
            mainShadow: string
            mainFilter: string
            mainRadius: string
        }
    }
}
