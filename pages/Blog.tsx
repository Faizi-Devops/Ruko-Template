import styles from '../styles/Blog.module.css';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from '@/components/Navbar/Navbar';
import { useEffect } from 'react';
const Blog = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, [])
    return (
        <div className={styles.backgroundall}>
            <div className={` sticky-top ${styles.purerapper}`}>
            <div className={`${styles.purely}`}>
            <Navbar />

            </div>
            </div>
            
            <div className={styles.one}>
                <h1 className={styles.mainHeading} data-aos="fade-down">Our Blog.</h1>
                <div className={styles.two}>
                    <p data-aos="fade-up">All the most current news and events of our creative team.</p>
                </div>
            </div>
            <div className={` ${styles.three}`}>
                <Image

                    src="/blog1.jpg"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                    style={{ width: "100%", height: "auto" }}
                />


                <p className={` mt-3 ${styles.paraone}`} data-aos="fade-right">07 AUGUST &nbsp;&nbsp; <span style={{ color: "#75dab4" }}>Wordpress - Themeforest - Ruko</span></p>
                <p className={`${styles.paratwo}`} data-aos="fade-up-right">Build a Beautiful Blog With Ease</p>
                <p className={`${styles.parathree}`} data-aos="fade-left">My job is simple and sophisticated, so it is possible to describe and simple, and flowery language. I love the <br /> feel and sophistication of its superiority. I like people with a keen mind and at the same time easy to talk to. <br /> These qualities can be combined perfectly natural. However, things like people look miserable, if these <br /> properties are connected.</p>
                <div>
                    <button type="button" className={`btn ${styles.bootbutton}`}>Read More</button>
                </div>

                <div className={`${styles.four}`}>
                    <Image

                        src="/blog2.jpg"
                        alt="Picture of the author"
                        width={500}
                        height={500}
                        style={{ width: "100%", height: "auto" }}
                    />
                    <p className={` mt-3 ${styles.paraone}`} data-aos="fade-right">07 AUGUST &nbsp;&nbsp; <span style={{ color: "#75dab4" }}>Wordpress - Themeforest - Ruko</span></p>
                    <p className={`${styles.paratwo}`} data-aos="fade-up-right">Build a Beautiful Blog With Ease</p>
                    <p className={`${styles.parathree}`} data-aos="fade-left">My job is simple and sophisticated, so it is possible to describe and simple, and flowery language. I love the <br /> feel and sophistication of its superiority. I like people with a keen mind and at the same time easy to talk to. <br /> These qualities can be combined perfectly natural. However, things like people look miserable, if these <br /> properties are connected.</p>





                </div>
                <div className={`${styles.four}`}>
                    <Image

                        src="/blog3.jpg"
                        alt="Picture of the author"
                        width={500}
                        height={500}
                        style={{ width: "100%", height: "auto" }}
                    />
                    <p className={` mt-3 ${styles.paraone} `} data-aos="fade-right">07 AUGUST &nbsp;&nbsp; <span style={{ color: "#75dab4" }}>Wordpress - Themeforest - Ruko</span></p>
                    <p className={`${styles.paratwo}`} data-aos="fade-up-right">Build a Beautiful Blog With Ease</p>
                    <p className={`${styles.parathree}`} data-aos="fade-left">My job is simple and sophisticated, so it is possible to describe and simple, and flowery language. I love the <br /> feel and sophistication of its superiority. I like people with a keen mind and at the same time easy to talk to. <br /> These qualities can be combined perfectly natural. However, things like people look miserable, if these <br /> properties are connected.</p>





                </div>
                <div className={`${styles.four}`}>
                    <Image

                        src="/blog4.jpg"
                        alt="Picture of the author"
                        width={500}
                        height={500}
                        style={{ width: "100%", height: "auto" }}
                    />
                    <p className={` mt-3 ${styles.paraone}`} data-aos="fade-right">07 AUGUST &nbsp;&nbsp; <span style={{ color: "#75dab4" }}>Wordpress - Themeforest - Ruko</span></p>
                    <p className={`${styles.paratwo}`} data-aos="fade-up-right">Build a Beautiful Blog With Ease</p>
                    <p className={`${styles.parathree}`} data-aos="fade-left">My job is simple and sophisticated, so it is possible to describe and simple, and flowery language. I love the <br /> feel and sophistication of its superiority. I like people with a keen mind and at the same time easy to talk to. <br /> These qualities can be combined perfectly natural. However, things like people look miserable, if these <br /> properties are connected.</p>





                </div>


            </div>
           






        </div>
    )
}
export default Blog;