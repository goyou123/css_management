import React from 'react'
import { SiteDetailsDiv } from 'templates/SiteDetails/SiteDetailsTemplate.style'

import SiteListPanel from 'components/organism/SiteDetails/SiteListPanel/SiteListPanel'
import SiteInfoPanel from 'components/organism/SiteDetails/SiteInfoPanel/SiteInfoPanel'

interface Iprops {
    selectSiteId: string
    _setSelectSiteId: (siteDataId: string) => void
}
function SiteDetailsTemplate({ selectSiteId, _setSelectSiteId }: Iprops) {
    return (
        <SiteDetailsDiv>
            <SiteListPanel selectSiteId={selectSiteId} _setSelectSiteId={_setSelectSiteId} />
            <SiteInfoPanel />
        </SiteDetailsDiv>
    )
}

export default SiteDetailsTemplate
