import React from 'react'
import { Link } from 'react-router-dom'

import { SidebarDiv } from 'layout/Sidebar/Sidebar.style'
import { RouteType } from 'routes/MainRouter'
import { ReactComponent as IconMoon } from 'assets/images/icon_moon.svg'
import { ReactComponent as IconSun } from 'assets/images/icon_sun.svg'

interface IProps {
    routes: RouteType[]
    themeMode: string
    toggleTheme: () => void
}

function Sidebar({ routes, themeMode, toggleTheme }: IProps) {
    return (
        <SidebarDiv themeMode={themeMode}>
            <div className="sidebar_wrap">
                <button className="btn_dark_mode" onClick={toggleTheme}>
                    <span>{themeMode === 'light' ? <IconSun /> : <IconMoon />}</span>
                </button>
                <ul className="tab_menus">
                    {routes.map((r, i) => {
                        return (
                            <li key={i}>
                                <Link to={r.path}>
                                    <p>{r.name}</p>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </SidebarDiv>
    )
}

export default Sidebar
