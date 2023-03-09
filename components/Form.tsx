import React from 'react'
import styles from '../styles/Contact.module.css';

export default function Form() {
  return (
    <div>
      <div className={`${styles.fmain}`}>
      <div className={`${styles.left}`}>
        <h4  className={`${styles.get}`}>
        Get In Touch
        </h4>
        <input type="text"  placeholder='Name' className={`${styles.iname}`}/>
     <hr />
     <input type="text"  placeholder='email' className={`${styles.iname}`}/>
     <hr />
     <input type="text" placeholder='Message'  className={`${styles.iname}`}/>
      </div>

      </div>
    </div>
  )
}
