import React from "react";
import Image from "next/image";
import styles from "../styles/About.module.css";
const About = () => {
  return (
    <>
      <div className={`${styles.aboutmain}`}>
        <div
          className="container"
          style={{
            color: " white",
            paddingTop: "266px",
            paddingBottom: "266px",
          }}
        >
          <h4 className={`${styles.text}`}>
            We believe that every{" "}
            <span className={`${styles.bold}`}>project</span> exist in <br />{" "}
            <span className={`${styles.bold}`}>digital world</span> is a result
            of an <span className={`${styles.bold}`}> idea</span> and <br />
            every idea has a casuse
          </h4>
          <h1 className={`${styles.about}`}> About Us</h1>
        </div>
        <Image
          src="/about.jpg"
          alt="img"
          width={500}
          height={500}
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className={`${styles.whowe}`}>
  <div className="container">
    <div className="row">
      <div className="col-lg-2 col-md-6 col-sm-12 col-12"><h4 className={`${styles.wtext}`}>Who We Are?</h4></div>
      <div className="col-lg-10 col-md-6 col-sm-12 col-12" >
        <p style={{fontSize:'16px'}}>        We develop creative solutions for small and big brands alike, build authentic product Identities and much more.Lorem ipsum dolor sit amet, consectetur adipiscing elit sit non facilisis vitae eu. Ultrices ut diam morbi risus dui, nec eget at lorem in id tristique in elementum leo nisi eleifend placerat magna lacus elementum ornare vehicula odio posuere quisque ultrices tempus cras id blandit maecenas in ornare quis dolor tempus risus vitae feugiat fames aliquet sed.
</p>
      </div>
    </div>
  </div>
  <div className={`${styles.cards}`}>
    <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="card" style={{width: '18rem'}}>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
  </div>
</div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12"><div className="card" style={{width: '18rem'}}>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
  </div>
</div></div>
        <div className="col-lg-4 col-md-12 col-sm-12"><div className="card" style={{width: '18rem'}}>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
  </div>
</div></div>
    </div>

</div>
</div>



    </>
  );
};

export default About;
