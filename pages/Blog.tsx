import styles from '../styles/Blog.module.css';
import Image from 'next/image'
const Blog = () => {
    return (
        <div className={styles.backgroundall}>
            <div className={styles.one}>
                <h1 className={styles.mainHeading}>Our Blog.</h1>
                <div className={styles.two}>
                    <p>All the most current news and events of our creative team.</p>
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
                

                <p className={` mt-3 ${styles.paraone}`}>07 AUGUST &nbsp;&nbsp; <span style={{color:"#75dab4"}}>Wordpress - Themeforest - Ruko</span></p>
                <p className={`${styles.paratwo}`}>Build a Beautiful Blog With Ease</p>
                <p className={`${styles.parathree}`}>My job is simple and sophisticated, so it is possible to describe and simple, and flowery language. I love the <br /> feel and sophistication of its superiority. I like people with a keen mind and at the same time easy to talk to. <br /> These qualities can be combined perfectly natural. However, things like people look miserable, if these <br /> properties are connected.</p>
                <div>
                <button type="button" className={`btn ${styles.bootbutton}`}>Read More</button>
                </div>

            </div>






        </div>
    )
}
export default Blog;