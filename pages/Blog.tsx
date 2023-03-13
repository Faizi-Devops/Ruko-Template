import styles from '../styles/Blog.module.css';
import axios from 'axios';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '@/store/blogSlice';


import Navbar from '@/components/Navbar/Navbar';
import { useEffect, useState } from 'react';
import Footer from '@/components/Footer/Footer';
const Blog = () => {
    const [data, setData] = useState([])
    const dispatch = useDispatch();

    // useEffect(() => {
    //     fetchData();

    // }, [])
    useEffect(() => {
        dispatch(fetchUsers());
      }, [dispatch]);
    
  const users = useSelector((state:any) => state.users.data);

  
    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:4000/main');
            // const data = await response.json();
            setData(response.data);


        } catch (error) {
            console.log('====================================');
            console.log(error);
            console.log('====================================');

        }

    }
    return (
        <div className={styles.backgroundall}>
            <div className={` sticky-top ${styles.purerapper}`}>
                <div className={`${styles.purely}`}>
                    <Navbar />

                </div>
            </div>

            <div className={styles.one}>
                <h1 className={styles.mainHeading} >Our Blog.</h1>
                <div className={styles.two}>
                    <p>All the most current news and events of our creative team.</p>
                </div>
            </div>

            {
                users.map((value:any,index:number) => {
                    return (
                        <div key={index}>
                            <div className={` ${styles.three}`} >
                                <Image

                                    src={value.image}
                                    alt="Picture of the author"
                                    width={500}
                                    height={500}
                                    style={{ width: "100%", height: "auto" }}
                                />
                                <p className={` mt-3 ${styles.paraone}`} >{value.date}</p>
                                <p className={`${styles.paratwo}`} >{value.heading}</p>
                                <p className={`${styles.parathree}`} >{value.paragraph}</p>
                                <div>
                                    <button type="button" className={`btn ${styles.bootbutton}`}>Read More</button>
                                </div>



                            </div>
                            <br /><br /><br /><br />
                          
                        </div>
                    )
                })
            }
            {/* <div className={` ${styles.three}`}>




                <div className={`${styles.four}`}>
                    <Image

                        src="/blog2.jpg"
                        alt="Picture of the author"
                        width={500}
                        height={500}
                        style={{ width: "100%", height: "auto" }}
                    />
                    <p className={` mt-3 ${styles.paraone}`} >07 AUGUST &nbsp;&nbsp; <span style={{ color: "#75dab4" }}>Wordpress - Themeforest - Ruko</span></p>
                    <p className={`${styles.paratwo}`} >Build a Beautiful Blog With Ease</p>
                    <p className={`${styles.parathree}`} >My job is simple and sophisticated, so it is possible to describe and simple, and flowery language. I love the <br /> feel and sophistication of its superiority. I like people with a keen mind and at the same time easy to talk to. <br /> These qualities can be combined perfectly natural. However, things like people look miserable, if these <br /> properties are connected.</p>





                </div>
                <div className={`${styles.four}`}>
                    <Image

                        src="/blog3.jpg"
                        alt="Picture of the author"
                        width={500}
                        height={500}
                        style={{ width: "100%", height: "auto" }}
                    />
                    <p className={` mt-3 ${styles.paraone} `} >07 AUGUST &nbsp;&nbsp; <span style={{ color: "#75dab4" }}>Wordpress - Themeforest - Ruko</span></p>
                    <p className={`${styles.paratwo}`} >Build a Beautiful Blog With Ease</p>
                    <p className={`${styles.parathree}`} >My job is simple and sophisticated, so it is possible to describe and simple, and flowery language. I love the <br /> feel and sophistication of its superiority. I like people with a keen mind and at the same time easy to talk to. <br /> These qualities can be combined perfectly natural. However, things like people look miserable, if these <br /> properties are connected.</p>





                </div>
                <div className={`${styles.four}`}>
                    <Image

                        src="/blog4.jpg"
                        alt="Picture of the author"
                        width={500}
                        height={500}
                        style={{ width: "100%", height: "auto" }}
                    />
                    <p className={` mt-3 ${styles.paraone}`}>07 AUGUST &nbsp;&nbsp; <span style={{ color: "#75dab4" }}>Wordpress - Themeforest - Ruko</span></p>
                    <p className={`${styles.paratwo}`} >Build a Beautiful Blog With Ease</p>
                    <p className={`${styles.parathree}`} >My job is simple and sophisticated, so it is possible to describe and simple, and flowery language. I love the <br /> feel and sophistication of its superiority. I like people with a keen mind and at the same time easy to talk to. <br /> These qualities can be combined perfectly natural. However, things like people look miserable, if these <br /> properties are connected.</p>





                </div>


            </div>
            <div className='mt-5'>
                <Footer />

            </div>






 */}
 <Footer />

        </div>
    )
}
export default Blog;