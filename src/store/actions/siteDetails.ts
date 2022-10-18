import { ActionType, createAsyncAction } from 'typesafe-actions'
import { getRealTimeSitesData, getSitesDetail } from 'api/SiteDetailsAPI'

import { RealTimeSite, SitesDetail } from 'constant/SiteDetailsType'
import { createPromiseThunk, handleAsyncActions, reducerType, reducerUtils } from '../asyncUtils'

/* 액션 타입 정의 */
const READ_SITES_DETAIL = 'READ_SITES_DETAIL'
const READ_SITES_DETAIL_SUCCESS = 'READ_SITES_DETAIL_SUCCESS'
const READ_SITES_DETAIL_ERROR = 'READ_SITES_ERROR'
const READ_REALTIME_SITE = 'READ_REALTIME_SITE'
const READ_REALTIME_SITE_SUCCESS = 'READ_REALTIME_SITE_SUCCESS'
const READ_REALTIME_SITE_ERROR = 'READ_REALTIME_SITE_ERROR'

/* 액션 생성 */
export const readSitesDetail = createPromiseThunk(READ_SITES_DETAIL, getSitesDetail)
export const readRealTimeSite = createPromiseThunk(READ_REALTIME_SITE, getRealTimeSitesData)

const readSitesDetailAsync = createAsyncAction(READ_SITES_DETAIL, READ_SITES_DETAIL_SUCCESS, READ_SITES_DETAIL_ERROR)()
const readRealTimeSiteAsync = createAsyncAction(
    READ_REALTIME_SITE,
    READ_REALTIME_SITE_SUCCESS,
    READ_REALTIME_SITE_ERROR
)()

const actions = {
    readSitesDetailAsync,
    readRealTimeSiteAsync,
}
type SiteDetailsActions = ActionType<typeof actions>

/* state 정의 */
interface SiteDetailsState {
    realTimeSite: reducerType<RealTimeSite | null>
    sitesDetail: reducerType<SitesDetail | null>
}

const initialState: SiteDetailsState = {
    realTimeSite: reducerUtils.initial(),
    sitesDetail: reducerUtils.initial(),
}

const readSitesDetailReducer = handleAsyncActions(READ_SITES_DETAIL, 'sitesDetail', true)
const readRealTimeSiteReducer = handleAsyncActions(READ_REALTIME_SITE, 'realTimeSite', true)

const siteDetails = (state = initialState, action: SiteDetailsActions): SiteDetailsState => {
    switch (action.type) {
        case READ_SITES_DETAIL:
        case READ_SITES_DETAIL_SUCCESS:
        case READ_SITES_DETAIL_ERROR:
            console.log(action)
            return readSitesDetailReducer(state, action)

        case READ_REALTIME_SITE:
        case READ_REALTIME_SITE_SUCCESS:
        case READ_REALTIME_SITE_ERROR:
            return readRealTimeSiteReducer(state, action)

        default:
            return state
    }
}

export default siteDetails
