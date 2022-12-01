import Send from '.'
import {
    listData,
    site1,
    site2,
    site3,
    site4,
    site5,
    site6,
    site7,
    site8,
    site9,
    site10,
} from 'dummyData/API_REQUEST_DATA'

/** API는 하드코딩으로 대체 */

/* 사이트 실시간 정보 조회 API siteId: string */
export const getRealTimeSitesData = async (siteId: string) => {
    // const res = await Send.get(`/cems/sites/${siteId}`)
    switch (siteId) {
        case '000000001':
            return site1
        case '000000002':
            return site2
        case '000000003':
            return site3
        case '000000004':
            return site4
        case '000000005':
            return site5
        case '000000006':
            return site6
        case '000000007':
            return site7
        case '000000008':
            return site8
        case '000000009':
            return site9
        case '000000010':
            return site10

        default:
            return site1
    }
}

/* 사이트 목록 조회 API
 * - 더미데이터를 return하는 형태로 수정
 */
export const getSitesDetail = async () => {
    // const res = await Send.post('/cems/sites', {
    //     cluster_ids,
    // })

    // console.log(res)

    // return res

    return listData
}

/* 즐겨찾기 API (토글형태 ) 생략 */
// export const postBookmark = async ({ site_id, is_check }: { site_id: string; is_check: boolean }) => {
//     console.log(`서버로 보내는 북마크 : ${is_check}`)

//     const res = await Send.post(`/cems/sites/bookmark`, {
//         site_id,
//         is_check,
//     })
//     return res
// }
