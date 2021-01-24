import React from 'react'
import styles from './ListApartments.module.sass'
import img from '../../img/apartments.jpg'

const ListApartments = (props) => {

    return <div className={styles.list}>
        {props.list.map(item => {
            return <ListApartmentsItem
                key={item.id}
                postId={item.id}
                square={item.square}
                address={item.address}
                photo={img}
                cost={item.cost}
                like={item.like}
                setLike={props.setLike}
            />
        })}
        <div ref={props.onPageChangedRef}></div>
    </div>
}


const ListApartmentsItem = (props) => {

    const {postId, square, address, photo, cost} = props

    const toggleLIke = () => {
        props.setLike(postId)
    }

    return <div className={styles.list_wrapper}>
        <img className={styles.img} src={photo || ''} alt="img"/>
        <div className={styles.description}>
            <div className={styles.description_list}>
                <span className={styles.description_item}>Площадь: {square} кв.м</span>
                <span className={styles.description_item}>Адрес: {address}</span>
                <span className={styles.description_item}>Цена: {cost}</span>
            </div>
            <div className={styles.description_title}>
                <span>Подробности</span>
            </div>
            <div>
                <span onClick={toggleLIke}>
                    <i className={`fas fa-heart ${props.like ? styles.icon_activ : styles.icon}`}></i>
                </span>
            </div>
        </div>
    </div>
}


export default ListApartments