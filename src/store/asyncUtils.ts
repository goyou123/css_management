import axios, { AxiosError } from 'axios'
import { AnyAction, Dispatch } from 'redux'
// import { onAuthorize401Error } from '../lib/login'
// https://intrepidgeeks.com/tutorial/day-9-7576 참고
export const createPromiseThunk = (type: string, promiseCreator: Function) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`]

    return <P>(params?: P) => {
        return async (dispatch: Dispatch) => {
            dispatch({ type })
            try {
                const payload: any = await promiseCreator(params)
                const { data } = payload

                dispatch({
                    type: SUCCESS,
                    payload: data,
                    // payload,
                })

                // return payload
                return data
            } catch (err) {
                dispatch({
                    type: ERROR,
                    payload: err,
                })
                // 401 에러 뜨면 재로그인 진행
                if (axios.isAxiosError(err)) {
                    if (err.response?.status === 401) {
                        // 로그인 에러 처리 생략
                    }
                }
            }
        }
    }
}

export const handleAsyncActions = (type: string, key: string, keepData?: boolean) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`]

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return <S extends { [index: string]: any }, D>(state: S, action: AnyAction, prevData?: D) => {
        switch (action.type) {
            case type:
                return {
                    ...state,
                    [key]: reducerUtils.loading(keepData ? state[key].data : null),
                }
            case SUCCESS:
                return {
                    ...state,
                    [key]: reducerUtils.success(action.payload ? action.payload : state[key].data),
                }
            case ERROR:
                return {
                    ...state,
                    [key]: reducerUtils.error(action.payload),
                }
            default:
                return state
        }
    }
}

export interface reducerType<D> {
    loading: boolean
    data: D
    error: AxiosError | null
}

export const reducerUtils = {
    initial: (initialData = null) => ({
        loading: false,
        data: initialData,
        error: null,
    }),
    loading: <D>(prevState: D | null = null) => ({
        loading: true,
        data: prevState,
        error: null,
    }),
    success: <D>(payload: D) => ({
        loading: false,
        data: payload,
        error: null,
    }),
    error: (error: AxiosError) => ({
        loading: false,
        data: null,
        error,
    }),
}

// DR에서 코드 가져옴
export class UserException extends Error {
    statusCode: number

    message: string

    constructor(statusCode: number, message: string) {
        super()
        this.name = 'UserException'
        this.statusCode = statusCode
        this.message = message
    }
}
