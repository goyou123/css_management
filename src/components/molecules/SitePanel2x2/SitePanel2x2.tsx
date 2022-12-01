import ServiceStatusCircle from 'components/atoms/ServiceStatusCircle/ServiceStatusCircle'
import React from 'react'
import { SitePanel2x2Div } from 'components/molecules/SitePanel2x2/SitePanel2x2.style'
import { ReactComponent as IconBookMark } from 'assets/images/icon_bookmark.svg'
import TestImage from 'assets/images/내곡느티나무쉼터.jpg'

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

/** 사이트 리스트 2x2 그리드 형태 나오면 보이는 이미지 있는 사이트 패널 */
function SitePanel2x2({ data, _setSelectSiteId, selectSiteId }: Iprops) {
    return (
        <SitePanel2x2Div bgImg={TestImage} isBookmark={data?.is_bookmark}>
            <div
                onClick={() => _setSelectSiteId(data.site_id)}
                className={selectSiteId === data.site_id ? 'wrap pick' : 'wrap'}
            >
                <div className="title-box">
                    <b>{data.site_name}</b>
                    <p>{data.clusters[0].cluster_name}</p>
                </div>
                {/* TODO 추후 즐겨찾기 여부에 따라 다른 UI 필요 */}
                <div className="bookmark">
                    <IconBookMark />
                </div>

                <ul>
                    {data.subscriptions.map((s, i) => (
                        <ServiceStatusCircle
                            subscription_name={s.subscription_name}
                            status={s.status}
                            circle // boolean - css 모양
                            key={i}
                        />
                    ))}
                </ul>
            </div>
        </SitePanel2x2Div>
    )
}

export default SitePanel2x2
// export default React.memo(SitePanel2x2)
