import React from 'react'
import MainPage from 'pages/MainPage'
import SiteDatailsPage from 'pages/SiteDetailsPage'

import ErrorPage from 'pages/ErrorPage'
import { Route, Routes } from 'react-router-dom'

export interface RouteType {
    name: string
    path: string
}

export const ROUTES: RouteType[] = [
    {
        name: '예시',
        // path: '/site-details',
        path: '/',
    },
]

function MainRouter() {
    return (
        <Routes>
            <Route path="*" element={<ErrorPage />} />
            <Route path="/" element={<SiteDatailsPage />} />
            {/* <Route path="/main" element={<MainPage />} /> */}
            {/* <Route path="/site-details" element={<SiteDatailsPage />} /> */}
        </Routes>
    )
}

export default MainRouter
