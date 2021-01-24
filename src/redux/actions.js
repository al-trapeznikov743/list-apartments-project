import {api} from '../api/api'
import {
    SET_APARTMENT_LIKE,
    SET_CURRENT_PAGE,
    SET_LIST_APARTMENT,
    TOGGLE_IS_FETCHING,
    SET_TOTAL_COUNT
} from './type'

export const setLike = (id) => {
    return {
        type: SET_APARTMENT_LIKE,
        id
    }
}

export const setListApartment = (list) => {
    return {
        type: SET_LIST_APARTMENT,
        list
    }
}

const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}

const setCurrentPage = (pageNumber) => {
    return {
        type: SET_CURRENT_PAGE,
        pageNumber
    }
}
const setTotalCount = (totalCount) => {
    return {
        type: SET_TOTAL_COUNT,
        totalCount
    }
}

export const getList = (pageNumber, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(pageNumber))

        const response = await api.getList(pageNumber, pageSize)

        console.log(response)
        dispatch(toggleIsFetching(false))
        dispatch(setListApartment(response.data.data))
        dispatch(setTotalCount(response.data.totalCount))
    }
}