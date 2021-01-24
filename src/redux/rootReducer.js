import {
    SET_APARTMENT_LIKE,
    SET_CURRENT_PAGE,
    SET_LIST_APARTMENT,
    SET_TOTAL_COUNT,
    TOGGLE_IS_FETCHING
} from './type'

const initialState = {
    list: [],
    totalCount : null,
    currentPage: 1,
    pageSize : 12,
    isFetching: false
}

export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_APARTMENT_LIKE: {
            return {
                ...state,
                list: [
                    ...state.list,
                    state.list[action.id-1].like = !state.list[action.id-1].like
                ]
            }
        }
        case SET_LIST_APARTMENT: {
            return {
                ...state,
                list: [...state.list, ...action.list]
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.pageNumber
            }
        }
        case SET_TOTAL_COUNT: {
            return {
                ...state,
                totalCount: action.totalCount
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        default: return state
    }
}