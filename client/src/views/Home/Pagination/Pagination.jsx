import React from 'react';
import styles from './pagination.module.css'

const Pagination = ({nPages, currentPage, setCurrentPage}) => {

    const next = () => {
        if(currentPage !== nPages) setCurrentPage(currentPage + 1)
    }

    const prev = () => {
        if(currentPage !== 1) setCurrentPage( currentPage - 1 )
    }

    return (
        <>

            <div className={styles.div}>
                <div className={styles.h3}>
                    <span onClick={prev}>Prev</span>
                </div>
                <div className={styles.h3}>
                    <span>{currentPage} / {nPages}</span>
                </div>
                <div className={styles.h3}>
                    <span onClick={next}>Next</span>
                </div>
            </div>
        </>
    );
};

export default Pagination;