import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { readRealTimeSite, readSitesDetail } from 'store/actions/siteDetails'
import SiteDetailsTemplate from 'templates/SiteDetails/SiteDetailsTemplate'

function SiteDatailsPage() {
    const [selectSiteId, _setSelectSiteId] = useState<string>('') // 사이트리스트에서 클릭한 사이트 ID 를 SiteInfo 컴포넌트에 전달
    const dispatch = useDispatch()

    // 기존에는 1분마다 데이터를 업데이트 해주는 형식이지만, API를 사용하지 않으므로 간단하게 처리
    useEffect(() => {
        dispatch(readSitesDetail())
    }, [])

    useEffect(() => {
        // console.log('변경된 사이트 아이디 : ', selectSiteId)
        if (selectSiteId) {
            dispatch(readRealTimeSite(selectSiteId))
        }
    }, [selectSiteId])

    return <SiteDetailsTemplate selectSiteId={selectSiteId} _setSelectSiteId={_setSelectSiteId} />
}

export default SiteDatailsPage
