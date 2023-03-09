<<<<<<< HEAD
import Form from '@/components/Form';
import Navbar from '@/components/Navbar/Navbar';
=======
import Form from '@/components/kuch';
>>>>>>> c9285348108f74baa287daf15fe58dceecd61e67

import Image from 'next/image';
import styles from '../styles/Contact.module.css';
const Contact = () =>{
    return(
        <div>
          <div className={`${styles.navclr}`}> <Navbar/></div>

         
          <div className={`${styles.Contact_main}`}>
           <h4 className={`${styles.mtext}`}> 
           <span>Lest's</span> Talk About Your Project
           </h4>
           <span className={`${styles.stext}`}>Feel free to ask me any question or let's do to talk about our future collaboration.</span>
           </div>
           <Image src="/about.jpg" alt="My Image" width={500} height={500}  style={{ width: '100%' , height: 'auto' }} />

           <Form/>

        </div>
    )
}
export default Contact;