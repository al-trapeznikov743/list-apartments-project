import React, {useCallback, useEffect, useRef, useState} from 'react'
import {connect} from 'react-redux'
import {setLike, getList} from '../../redux/actions'
import ListApartments from './ListApartments'


const ListApartmentsContainer = (props) => {
    console.log(props)

    const [pageMode, setPageMode] = useState(true)

    const pageCount = Math.ceil(props.totalCount/props.pageSize)

    const pages = []

    for(let i = 0; i < pageCount; i++) {
        pages.push(i)
    }

    const lastPage = pages[pages.length-1]

    // intersectionObserver
    const loading = props.isFetching

    const onPageChanged = (entries) => {
        if(loading || pageMode) {
            return undefined
        }
        if(entries[0].intersectionRatio > 0) {
            const nextPage = props.currentPage + 1
            if (nextPage > lastPage+1) {
                return undefined
            }
            props.getList(nextPage, props.pageSize)
        }
    }


    const observer = useRef()
    const options = {
        root: null,
        rootMargin: '250px',
        threshold: 0.1
    }

    // eslint-disable-next-line
    const onPageChangedRef = useCallback(node => {
        if(observer.current) {
            observer.current.disconnect()
        }
        observer.current = new IntersectionObserver(onPageChanged, options)
        if(node) {
            observer.current.observe(node)
        }
    })

    useEffect(() => {
        props.getList(props.currentPage, props.pageSize).then(() => {
            setPageMode(false)
        })
        // eslint-disable-next-line
    }, [])

    return <ListApartments
        list={props.list}
        setLike={props.setLike}
        currentPage={props.currentPage}
        totalCount={props.totalCount}
        onPageChangedRef={onPageChangedRef}
    />
}


const mapStateToProps = (state) => {
    return {
        list: state.rootReducer.list,
        totalCount: state.rootReducer.totalCount,
        pageSize: state.rootReducer.pageSize,
        isFetching: state.rootReducer.isFetching,
        currentPage: state.rootReducer.currentPage
    }
}

export default connect(mapStateToProps, {setLike, getList})(ListApartmentsContainer)