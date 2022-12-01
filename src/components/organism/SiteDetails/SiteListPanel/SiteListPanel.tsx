import React, { useState, useEffect, useCallback } from 'react'
import { SiteListPanelDiv } from 'components/organism/SiteDetails/SiteListPanel/SiteListPanel.style'
import { ReactComponent as Icon3x3 } from 'assets/images/icon_3x3_button.svg'
import { ReactComponent as Icon2x2 } from 'assets/images/icon_2x2_button.svg'
import { useTab } from 'hooks/useTab'
import SiteListTab from 'components/atoms/SiteListTab/SiteListTab'
import SitePanel2x2 from 'components/molecules/SitePanel2x2/SitePanel2x2'
import SitePanel3x3 from 'components/molecules/SitePanel3x3/SitePanel3x3'

import { useSelector } from 'react-redux'
import { RootState } from 'store/index'

interface Iprops {
    selectSiteId: string
    _setSelectSiteId: (siteData: string) => void
}

function SiteListPanel({ selectSiteId, _setSelectSiteId }: Iprops) {
    const { data, loading, error } = useSelector((state: RootState) => state.siteDetails.sitesDetail)
    const [gridStyle, _setGridStyle] = useState(true) // true일때 기본 3x3 : 이미지 없는 버전
    const siteArrayBeforeReverse = data ? [...data.sites_detail[0].sites, ...data.sites_detail[1].sites] : []
    const totalSiteArray = [...siteArrayBeforeReverse].reverse() // error 가 있는 사이트들이 리스트 앞쪽에 오도록 순서 변경해줌
    // 초기 값 세팅 - 최초 1회 실행
    useEffect(() => {
        if (data && selectSiteId === '' && totalSiteArray.length !== 0) {
            _setSelectSiteId(totalSiteArray[0].site_id)
        }
    }, [data])

    /* 2x2 / 3x3 선택에 따라 다른 형태의 component를 반환한다. */
    const Tab = data
        ? [
              {
                  title: <SiteListTab title="전체" count={data.sites_total_count} />,
                  content: gridStyle ? (
                      // 3x3 일 때 - 이미지 없는 버전
                      totalSiteArray ? (
                          totalSiteArray.map((s, i) => (
                              <SitePanel3x3
                                  data={s}
                                  key={i}
                                  _setSelectSiteId={_setSelectSiteId}
                                  selectSiteId={selectSiteId}
                              />
                          ))
                      ) : (
                          <div>데이터가 없습니다.</div>
                      )
                  ) : // 2x2 일 때 - 이미지 있음
                  // TODO - 후에 API에 이미지도 추가되어야 함
                  totalSiteArray ? (
                      totalSiteArray.map((s, i) => (
                          <SitePanel2x2
                              data={s}
                              key={i}
                              _setSelectSiteId={_setSelectSiteId}
                              selectSiteId={selectSiteId}
                          />
                      ))
                  ) : (
                      <div>데이터가 없습니다.</div>
                  ),
              },

              {
                  title: <SiteListTab title="정상" count={data.sites_detail[0].sites_count} />,
                  content: gridStyle ? (
                      // 3x3 일 때 - 이미지 없는 버전
                      data.sites_detail[0] ? (
                          data.sites_detail[0].sites.map((s, i) => (
                              <SitePanel3x3
                                  data={s}
                                  key={i}
                                  _setSelectSiteId={_setSelectSiteId}
                                  selectSiteId={selectSiteId}
                              />
                          ))
                      ) : (
                          <div>데이터가 없습니다.</div>
                      )
                  ) : // 2x2 일 때 - 이미지 있음
                  data.sites_detail[0] ? (
                      data.sites_detail[0].sites.map((s, i) => (
                          <SitePanel2x2
                              data={s}
                              key={i}
                              _setSelectSiteId={_setSelectSiteId}
                              selectSiteId={selectSiteId}
                          />
                      ))
                  ) : (
                      <div>데이터가 없습니다.</div>
                  ),
              },
              {
                  title: <SiteListTab red title="에러" count={data.sites_detail[1].sites_count} />,
                  content: gridStyle ? (
                      // 3x3 일 때 - 이미지 없는 버전
                      data.sites_detail[1] ? (
                          data.sites_detail[1].sites.map((s, i) => (
                              <SitePanel3x3
                                  data={s}
                                  key={i}
                                  _setSelectSiteId={_setSelectSiteId}
                                  selectSiteId={selectSiteId}
                              />
                          ))
                      ) : (
                          <div>데이터가 없습니다.</div>
                      )
                  ) : // 2x2 일 때 - 이미지 있음
                  data.sites_detail[1] ? (
                      data.sites_detail[1].sites.map((s, i) => (
                          <SitePanel2x2
                              data={s}
                              key={i}
                              _setSelectSiteId={_setSelectSiteId}
                              selectSiteId={selectSiteId}
                          />
                      ))
                  ) : (
                      <div>데이터가 없습니다.</div>
                  ),
              },
          ]
        : []

    const { currentIdx, currentItem, changeItem } = useTab(0, Tab)

    if (loading) return <div>로딩중..</div>
    if (error) return <div>Error</div>

    return (
        <SiteListPanelDiv>
            <div className="top">
                <h3>사이트 리스트</h3>

                <div className="select-area">
                    <div className="btn-layout">
                        <div className={gridStyle ? 'grid3x3 active' : 'grid3x3'} onClick={() => _setGridStyle(true)}>
                            <Icon3x3 />
                        </div>
                        <div className={!gridStyle ? 'grid2x2 active' : 'grid2x2'} onClick={() => _setGridStyle(false)}>
                            <Icon2x2 />
                        </div>
                    </div>
                </div>
            </div>
            <div className="contents-area">
                <ul className="tabs">
                    {Tab
                        ? Tab.map((t, i) => (
                              <li className={currentIdx === i ? 'on' : 'none'} key={i} onClick={() => changeItem(i)}>
                                  {t.title}
                              </li>
                          ))
                        : null}
                </ul>

                <div className="site-lists">{currentItem ? currentItem.content : '데이터 없음'}</div>
            </div>
        </SiteListPanelDiv>
    )
}

export default SiteListPanel
