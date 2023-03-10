
import Form from '@/components/Form';
import Navbar from '@/components/Navbar/Navbar';




import Image from 'next/image';
import styles from '../styles/Contact.module.css';
const Contact = () =>{
    return(
        <div>
<<<<<<< HEAD
          <div className={` sticky-top ${styles.purerapper}`}>
            <div className={`${styles.purely}`}>
            <Navbar />

            </div>
            </div>

=======
          <Navbar/>
>>>>>>> c7c52c735d6312b165b951ee9aa2b2d95f1078fa
         
          <div className={`${styles.Contact_main}`}>
           <div className="container">
           <h4 className={`${styles.mtext}`}> 
           <span>Lest's</span> Talk About Your Project
           </h4>
           <span className={`${styles.stext}`}>Feel free to ask me any question or let's do to talk about our future collaboration.</span>

           </div>
           </div>
           <Image src="/about.jpg" alt="My Image" width={500} height={500}  style={{ width: '100%' , height: 'auto' }} />

           <Form/>

        </div>
    )
}
export default Contact;