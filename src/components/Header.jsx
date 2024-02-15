import React from 'react'
import styles from './header.module.css'
import TodayDate from './Date'

function Header() {
  return (
    <div className={styles.header}>
      <div>My Todo List</div>
    </div>
  )
}

export default Header