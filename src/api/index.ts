import axios from 'axios'

/** axios instance를 만들어 관리한다 */
const instance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_BASE_URL,
    headers: { 'Content-Type': 'application/json;charset=UTF-8' },
    timeout: 10000,
})

// 로그인 헤더 config 생략 ...

export default instance
