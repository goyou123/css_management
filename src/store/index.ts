import { combineReducers } from 'redux'

import siteDetails from 'store/actions/siteDetails'

const rootReducer = combineReducers({
    siteDetails,
})
export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
