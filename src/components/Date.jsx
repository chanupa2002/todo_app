import React, { useState } from 'react';
import styles from './date.module.css'

function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${month}/${date}/${year}`;
}

function TodayDate() {
  const [currentDate, setCurrentDate] = useState(getDate());

  return (
    <div className={styles.tdDate}>
      <p>{currentDate}</p>
    </div>
  );
}

export default TodayDate;
