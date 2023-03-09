import React from "react";
import styles from "../styles/Contact.module.css";
import Image from "next/image";


export default function Form() {
  return (
    <>
    <div className={`${styles.fmain}`}>
      <div className="container" style={{display:'flex'}}>
        <div className={`${styles.left}`}>
          <h4 className={`${styles.get}`}>Get In Touch</h4>
          <input type="text" placeholder="Name" className={`${styles.iname}`} />
          <hr className={`${styles.line}`} />
          <input
            type="text"
            placeholder="email"
            className={`${styles.iname}`}
          />
          <hr className={`${styles.line}`} />

          <textarea className={`${styles.textarea}`}></textarea>
          <button className={`${styles.btn}`}>send message</button>
        </div>
      
      <div className={`${styles.right}`}>
        <h4 className={`${styles.get}`}>Contact Info</h4>
        <h5 className={`${styles.tv}`}>LET'S TALK</h5>
        <h6 className={`${styles.dull}`}>Email@example.com</h6>
        <h6 className={`${styles.dull}`}>+4.930.705.5448</h6>
        <h5 className={`${styles.tv}`}>VISIT US</h5>
        <h6 className={`${styles.dull}`}>
          Melbourne,59 Whiting <br></br>street Australia
        </h6>
        <div className={`${styles.social}`}>
          <Image
            src="/fwhite.png"
            alt="My Image"
            width={20}
            height={20}
            style={{
              background: "rgba(255, 255, 255, 0.01)",
              borderRadius: "50px",
              padding: "5px",
            }}
          />
          <Image
            src="/twhite.png"
            alt="My Image"
            width={20}
            height={20}
            style={{
              background: "rgba(255, 255, 255, 0.01)",
              borderRadius: "50px",
              padding: "5px",
            }}
          />
          <Image
            src="/pwhite.png"
            alt="My Image"
            width={20}
            height={20}
            style={{
              background: "rgba(255, 255, 255, 0.01)",
              borderRadius: "50px",
              padding: "5px",
            }}
          />
          <Image
            src="/bwhite.png"
            alt="My Image"
            width={20}
            height={20}
            style={{
              background: "rgba(255, 255, 255, 0.01)",
              borderRadius: "50px",
              padding: "5px",
            }}
          />
        </div>
      </div>
    
    </div>
    </div>

    <Image
            src="/blur.png"
            alt="My Image"
            width={500}
            height={500}
            style={{
             
            }}
          />
    </>
    
  );
}
