import React, { useState } from 'react'
import styles from './Products.module.scss'
import { NavLink } from 'react-router-dom'
import { ProductItem } from './productItem/ProductItem'

const furnitureItems = ["Chair", "Beds", "Sofa", "Lamp"];

export const Products = () => {
  const [activeIndex, setAciveIndex] = useState(null);

  const handleClick = (index) => {
    setAciveIndex(index === activeIndex ? null : index);
  }

  return (
    <section className={styles.products}>
      <div className='container'>
        <div className={styles.title}>Best Selling Product</div>
        <div className={styles.tabs}>
          <div className={styles.controls}>
            {
              furnitureItems.map((item, index) => (
                <button className={`${styles.btn} ${index === activeIndex ? styles.active : ''}`} onClick={() => handleClick(index)}>{item}</button>
              ))
            }
          </div>
        </div>
        <ProductItem />
        <NavLink className={styles.link}>View All &#8594;</NavLink>
      </div>
    </section>
  )
}
