import styles from './Header.module.sass'



const Header = () => {

    return <div className={styles.header}>
        <div className={styles.tools}>
            <input placeholder='Search' type='text' className={styles.top_search}/>
        </div>
    </div>
}

export default Header