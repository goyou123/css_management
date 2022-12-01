import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'store/index'
// import SiteInfoPanel from 'components/organism/SiteDetails/SiteInfoPanel/SiteInfoPanel'
import SiteInfoBox from 'components/molecules/SiteInfoBox/SiteInfoBox'
import { SiteInfoDiv } from 'components/organism/SiteDetails/SiteInfoPanel/SiteInfo.style'

function SiteInfoPanel() {
    const { data, loading } = useSelector((state: RootState) => state.siteDetails.realTimeSite)
    return (
        <SiteInfoDiv>
            <h3>{data ? data.site_name : loading}</h3>
            <p className="cluster-name">{data?.clusters[0].cluster_name}</p>
            <div className="panel-list">
                {data?.subscriptions.map((s, i) => {
                    return <SiteInfoBox subscriptions={s} key={i} />
                })}
            </div>
        </SiteInfoDiv>
    )
}

export default SiteInfoPanel
