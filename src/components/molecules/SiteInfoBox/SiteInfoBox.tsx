import React from 'react'
import { SiteInfoBoxDiv } from 'components/molecules/SiteInfoBox/SiteInfoBox.style'
import { ReactComponent as IconError } from 'assets/images/icon_error.svg'
import { changeDateFormat } from 'lib/utils'

interface Iprops {
    subscriptions: {
        subscription_name: string
        subscription_info: any // 서비스마다 다른 내용이 배치됨
        status: string
        event_history: {
            event_id: number
            message: string
            status: string
            datetime: string
        }[]
    }
}

function SiteInfoBox({ subscriptions }: Iprops) {
    const info = subscriptions.subscription_info
    const event = subscriptions.event_history

    return (
        <SiteInfoBoxDiv>
            <h3>{subscriptions.subscription_name}</h3>
            <div className="service-info-box">
                {subscriptions.subscription_name === 'DRMS' ? (
                    <>
                        <div className="main-info">
                            <p>실시간 소비 전력</p>
                            <b>{info.power ? info.power : '-'} kW</b>
                        </div>
                        <div className="sub-info">
                            <ul>
                                <li>
                                    <p>정산용 전력 사용량</p>
                                    <b>{info.iso_power_consum ? info.iso_power_consum : '-'} kWh</b>
                                </li>
                                <li>
                                    <p>실시간 사용량</p>
                                    <b>{info.power_consum_1m ? info.power_consum_1m : '-'} kWh</b>
                                </li>
                                <li>
                                    <p>총 감축량</p>
                                    <b>{info.total_reduction ? info.total_reduction : '-'} kWh</b>
                                </li>
                            </ul>
                        </div>
                    </>
                ) : subscriptions.subscription_name === 'FEMS' ? (
                    <>
                        <div className="main-info">
                            <p>실시간 소비 전력</p>
                            <b>{info.power1} KW</b>
                        </div>
                        <div className="sub-info">
                            <ul>
                                <li>
                                    <p>요금적용 전력</p>
                                    <b>{info.maximum_demand} KW</b>
                                </li>
                                <li>
                                    <p>오늘의 사용량</p>
                                    <b>{info.today_power_consum} kWh</b>
                                </li>
                                <li>
                                    <p>최대수요전력</p>
                                    <b>{info.peak_demand} KW</b>
                                </li>
                            </ul>
                        </div>
                    </>
                ) : subscriptions.subscription_name === 'PVMS' ? (
                    <>
                        <div className="main-info">
                            <p>설비 용량</p>
                            <b>{info.device_capacity} kWp</b>
                        </div>
                        <div className="sub-info">
                            <ul>
                                <li>
                                    <p>발전 시간</p>
                                    <b>{info.generation_hour} 시간</b>
                                </li>
                                <li>
                                    <p>현재 가동률</p>
                                    <b>{info.generation_rate} %</b>
                                </li>
                                <li>
                                    <p>오늘의 발전량</p>
                                    <b>{info.today_power_generation} kWh</b>
                                </li>
                            </ul>
                        </div>
                    </>
                ) : null}
            </div>
            <div className="event-box">
                <ul>
                    {event.length !== 0 ? (
                        event.map((e) => {
                            return (
                                <li key={e.event_id}>
                                    <IconError />
                                    <p>{changeDateFormat(e.datetime)}</p>
                                    <b>{e.message}</b>
                                </li>
                            )
                        })
                    ) : (
                        <li>이상이 없습니다.</li>
                    )}
                </ul>
            </div>
        </SiteInfoBoxDiv>
    )
}

// props 변화가 없을 시 재랜더링 하지 않는다.
// export default React.memo(SiteInfoBox)
export default SiteInfoBox
