import React, { useState, useEffect } from 'react'
import ServiceStatusCircle from 'components/atoms/ServiceStatusCircle/ServiceStatusCircle'

import { SitePanel3x3Div } from 'components/molecules/SitePanel3x3/SitePanel3x3.style'
import { ReactComponent as IconBookMark } from 'assets/images/icon_bookmark.svg'

interface Iprops {
    data: {
        customer_id: number
        is_bookmark: boolean
        site_id: string
        site_name: string
        clusters: {
            cluster_id: number
            cluster_name: string
        }[]
        subscriptions: {
            subscription_name: string
            status: string
        }[]
    }
    _setSelectSiteId: (siteData: string) => void
    selectSiteId: string
}
function SitePanel3x3({ data, _setSelectSiteId, selectSiteId }: Iprops) {
    const [isBookmark, _setIsBookmark] = useState<boolean>(false)
    console.log(data)
    useEffect(() => {
        if (data) {
            _setIsBookmark(data.is_bookmark)
        }
    }, [data])

    return (
        <SitePanel3x3Div bookmark={isBookmark}>
            <div onClick={() => _setSelectSiteId(data.site_id)} className={selectSiteId === data.site_id ? 'pick' : ''}>
                <b>{data.site_name}</b>
                <p>{data.clusters[0].cluster_name}</p>

                {/* TODO 추후 즐겨찾기 여부에 따라 다른 UI 필요 */}
                <div className="bookmark">
                    <IconBookMark />
                </div>

                <ul>
                    {data.subscriptions.map((s, i) => (
                        <ServiceStatusCircle
                            subscription_name={s.subscription_name}
                            status={s.status}
                            circle={false} // boolean - css 모양
                            key={i}
                        />
                    ))}
                </ul>
            </div>
        </SitePanel3x3Div>
    )
}

// export default SitePanel3x3
export default React.memo(SitePanel3x3)
