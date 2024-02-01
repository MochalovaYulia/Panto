import React from 'react'
import styles from './Benefits.module.scss'
import { NavLink } from 'react-router-dom'

export const Benefits = () => {
  return (
    <section className={styles.benefits}>
        <div className={`container`}>
            <div className={styles.grid}>
                <h2 className={styles.title}>Why Choosing Us</h2>
                <div className={styles.benefit}>
                    <h3>Luxury facilities</h3>
                    <p>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
                    <NavLink className={styles.link}>More Info &#8594;</NavLink>
                </div>
                <div className={styles.benefit}>
                    <h3>Affordable Price</h3>
                    <p>You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here.</p>
                    <NavLink className={styles.link}>More Info &#8594;</NavLink>
                </div>
                <div className={styles.benefit}>
                    <h3>Many Choices</h3>
                    <p>We provide many unique work space choices so that you can choose the workspace to your liking
                    </p>
                    <NavLink className={styles.link}>More Info &#8594;</NavLink>
                </div>
            </div>
        </div>
    </section>
  )
}
