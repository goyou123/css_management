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
    console.log(subscriptions)

    const info = subscriptions.subscription_info
    const event = subscriptions.event_history

    return (
        <SiteInfoBoxDiv>
            <h3>{subscriptions.subscription_name}</h3>
            <div className="service-info-box">
                {
                    // !info.reliability
                    subscriptions.subscription_name === 'DRMS' ? (
                        info.reliability || info.voluntary ? (
                            // 신뢰성 DR 발령시 보여줄 부분
                            (
                                info.reliability && (
                                    <div className="sub-info">
                                        <ul>
                                            <li>
                                                <b>신뢰성 DR (10:00 ~ 11:00)</b>
                                            </li>
                                            <li>
                                                <p>신뢰성 CBL</p>
                                                <b>{info.reliability.cbl ? info.reliability.cbl : '-'} kWh</b>
                                            </li>
                                            <li>
                                                <p>목표 전력</p>
                                                <b>
                                                    {info.reliability.target_power
                                                        ? info.reliability.target_power
                                                        : '-'}{' '}
                                                    KWh
                                                </b>
                                            </li>
                                            <li>
                                                <p>실시간 이행률</p>
                                                <b>
                                                    {info.reliability.reduction_rate
                                                        ? info.reliability.reduction_rate
                                                        : '-'}{' '}
                                                    %
                                                </b>
                                            </li>
                                            <li>
                                                <p>정산용 이행률</p>
                                                <b>
                                                    {info.reliability.iso_reduction_rate
                                                        ? info.reliability.iso_reduction_rate
                                                        : '-'}{' '}
                                                    %
                                                </b>
                                            </li>
                                        </ul>
                                    </div>
                                )
                            )(
                                // 자발적 DR 발령 감축시 보여줄 부분
                                info.voluntary && (
                                    <div className="sub-info">
                                        <ul>
                                            <li>
                                                <b>자발적 DR (10:00 ~ 11:00)</b>
                                            </li>
                                            <li>
                                                <p>자발적 CBL</p>
                                                <b>{info.voluntary.cbl ? info.info.voluntary.cbl : '-'} kWh</b>
                                            </li>
                                            <li>
                                                <p>목표 전력</p>
                                                <b>
                                                    {info.voluntary.target_power ? info.voluntary.target_power : '-'}{' '}
                                                    kWh
                                                </b>
                                            </li>
                                            <li>
                                                <p>실시간 이행률</p>
                                                <b>
                                                    {info.voluntary.reduction_rate
                                                        ? info.voluntary.reduction_rate
                                                        : '-'}{' '}
                                                    %
                                                </b>
                                            </li>
                                            <li>
                                                <p>정산용 이행률</p>
                                                <b>
                                                    {info.voluntary.iso_reduction_rate
                                                        ? info.voluntary.iso_reduction_rate
                                                        : '-'}{' '}
                                                    %
                                                </b>
                                            </li>
                                        </ul>
                                    </div>
                                )
                            )
                        ) : (
                            // 평상시 보여줄 부분 (발령 없을 시)
                            <>
                                <div className="main-info">
                                    <p>실시간 소비 전력</p>
                                    <b>{info.demand.power ? info.demand.power : '-'} kW</b>
                                </div>
                                <div className="sub-info">
                                    <ul>
                                        <li>
                                            <p>정산용 전력 사용량</p>
                                            <b>
                                                {info.demand.iso_power_consum ? info.demand.iso_power_consum : '-'} kWh
                                            </b>
                                        </li>
                                        <li>
                                            <p>실시간 사용량</p>
                                            <b>{info.demand.power_consum_1m ? info.demand.power_consum_1m : '-'} kWh</b>
                                        </li>
                                        <li>
                                            <p>총 감축량</p>
                                            <b>{info.total_reduction ? info.total_reduction : '-'} kWh</b>
                                        </li>
                                    </ul>
                                </div>
                            </>
                        )
                    ) : subscriptions.subscription_name === 'FEMS' ? (
                        <>
                            <div className="main-info">
                                <p>실시간 소비 전력</p>
                                <b>{info.power} KW</b>
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
                        // <div className='service-info-box'>
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
                    ) : // </div>
                    null // 후에 다른 서비스들도 추가하기
                }
            </div>
            <div className="event-box">
                <ul>
                    {
                        // 현재는 에러메세지만 보여주는데, 에러메세지가 해결된 경우는 현재 각 서비스들에서 보내주나?
                        // 오늘의 이벤트만 보여준다.
                        event.length !== 0 ? (
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
                        )
                    }
                </ul>
            </div>
        </SiteInfoBoxDiv>
    )
}

export default SiteInfoBox
// export default React.memo(SiteInfoBox)
