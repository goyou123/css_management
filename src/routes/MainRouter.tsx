import React from 'react'
import MainPage from 'pages/MainPage'
// import SubPage from 'pages/SubPage'
import SiteDatailsPage from 'pages/SiteDetailsPage'

import ErrorPage from 'pages/ErrorPage'
import { Route, Routes } from 'react-router-dom'

export interface RouteType {
    name: string
    path: string
}

// TODO : 메뉴에 세부 메뉴 있을때는 어떻게 ?
export const ROUTES: RouteType[] = [
    {
        name: '메인',
        path: '/main',
    },
    // {
    //     name: '서브',
    //     path: '/sub',
    // },
    {
        name: '상세',
        path: '/site-details',
    },
]

function MainRouter() {
    return (
        <Routes>
            <Route path="*" element={<ErrorPage />} />
            <Route path="/main" element={<MainPage />} />
            {/* <Route path="/sub" element={<SubPage />} /> */}
            <Route path="/site-details" element={<SiteDatailsPage />} />
        </Routes>
    )
}

export default MainRouter
