import Send from '.'
import { res } from 'dummyData/API_REQUEST_DATA'

/* 사이트 실시간 정보 조회 API */
export const getRealTimeSitesData = async (siteId: string) => {
    // const res = await Send.get(`/cems/sites/${siteId}`)
    // // console.log(res.data)
    // return res
}

/* 사이트 목록 조회 API
 * - 더미데이터를 return하는 형태로 수정
 */
export const getSitesDetail = async () => {
    // console.log(cluster_ids)
    // const res = await Send.post('/cems/sites', {
    //     cluster_ids,
    // })

    // console.log(res)

    // return res

    return res
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
