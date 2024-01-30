import React, { useState } from 'react'
import styles from './Header.module.scss'
import { Link, NavLink } from 'react-router-dom'
import { FaBagShopping } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { Animation } from './animation/Animation';

const logo = (
  <div className={styles.logo}>
    <Link to='/'>
      <span>Panto</span>
    </Link>
  </div>
)

const activeLink = (
  ({isActive}) => (isActive ? `${styles.active}` : '')
)


export const Header = () => {
  const [value, setValue] = useState('');


  return (
    <div className={styles.header}>
      <div className='container'>
        <nav className={styles.nav}>
          {logo}
          <ul className={styles.links}>
            <li>
              <NavLink className={activeLink} to='/Furniture'>Furniture</NavLink>
            </li>
            <li>
              <NavLink className={activeLink} to='/Shop'>Shop</NavLink>
            </li>
            <li>
              <NavLink className={activeLink} to='/About Us'>About Us</NavLink>
            </li>
            <li>
              <NavLink className={activeLink} to='/Contact'>Contact</NavLink>
            </li>
          </ul>

          <div className={styles.cart}>
            <Link to='/cart'>
              <FaBagShopping color='#fff' size={28} />
              <div className={styles.cartCount}>0</div>
            </Link>
          </div>
        </nav>
      </div>

      <div className={`container ${styles.content}`}>
        <h1>Make your interior more minimalistic & modern</h1>
        <p>Turn your room with panto into a lot more minimalist and modern with ease and speed</p>

        <form className={styles.form}>
          <input 
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className={styles.input} 
            type='text' 
            placeholder='Search furniture' 
          />
          <button className={styles.btn}>
            <FiSearch className={styles.svg} size={24} />
          </button>
        </form>
        
        <div className={styles.DotSofa}>
          <Animation />
        </div>
        <div className={styles.DotVase}>
          <Animation />
        </div>
        <div className={styles.DotCandle}>
          <Animation />
        </div>
      </div>
    </div>
  )
}
