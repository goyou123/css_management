import { useEffect, useState } from 'react'

/* 로컬스토리지에 저장된 테마로 이동한다라고 보면 됨 */
export const useDarkMode = (): [string, () => void] => {
    const [theme, _setTheme] = useState('dark')
    const toggleTheme = () => {
        if (theme === 'dark') {
            window.localStorage.setItem('theme', 'light')
            _setTheme('light')
        } else {
            window.localStorage.setItem('theme', 'dark')
            _setTheme('dark')
        }
    }

    useEffect(() => {
        const localTheme: string | null = window.localStorage.getItem('theme')
        localTheme && _setTheme(localTheme)
    }, [])

    return [theme, toggleTheme]
}
