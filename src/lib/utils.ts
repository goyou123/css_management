/** 전역적으로 사용되는 함수들 모음 * */

/* 배열이나 객체를 로컬스토리지에 String 형태로 저장한다. 
 - KEY 값은 항상 대문자 영어로 할 것 */
export const setLocalStorage = (KEY: string, value: any) => {
    localStorage.setItem(KEY, JSON.stringify(value))
}

/* string 형태의 로컬스토리지 값을 가져와 객체로 만든다. */
export const getLocalStorage = (KEY: string) => {
    const stringData = localStorage.getItem(KEY)
    // console.log(typeof stringData, stringData)

    if (stringData) {
        const data = JSON.parse(stringData)
        return data
    }
}

/* 2022-05-10T08:51:00  형태를  2022.05.10 08:00 형태로 만들어주는 함수 */
export const changeDateFormat = (date: string | undefined) => {
    // 1. T 를 공백으로 변환
    // 2. - 를 . 으로 변환
    const removeT = date?.replace('T', ' ')
    const resultDate = removeT?.replace(/-/g, '.')
    return resultDate
}
