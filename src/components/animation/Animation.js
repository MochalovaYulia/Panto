import React, { useState } from 'react'
import styles from './Animation.module.scss'

export const Animation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button className={styles.infoDot} onClick={handleClick}>
                <div className={styles.circle}></div>
                <div className={styles.radius}></div>
            </button>
            {isOpen &&
                <div className={styles.hint}>
                    <label>
                        <input type='radio' name='circle' className={styles.radio} />
                        <div className={`${styles.fake} ${styles['fake--orange']}`}></div>
                    </label>

                    <label>
                        <input type='radio' name='circle' className={styles.radio} />
                        <div className={`${styles.fake} ${styles['fake--biruza']}`}></div>
                    </label>

                    <label>
                        <input type='radio' name='circle' className={styles.radio} />
                        <div className={`${styles.fake} ${styles['fake--gray']}`}></div>
                    </label>
                </div>
            }
        </>
    )
}
