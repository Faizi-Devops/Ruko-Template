import React from "react";
import Image from "next/image";
import styles from "../styles/About.module.css";
import Navbar from "@/components/Navbar/Navbar";
const About = () => {
  return (
    <>
      <div className={`${styles.aboutmain} `}>
      <div className={`${styles.purely} sticky-top`}>
            <Navbar />

            </div>
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
            <div className="col-lg-2 col-md-6 col-sm-12 col-12">
              <h4 className={`${styles.wtext}`}>Who We Are?</h4>
            </div>
            <div className="col-lg-10 col-md-6 col-sm-12 col-12">
              <p style={{ fontSize: "16px" }}>
                {" "}
                We develop creative solutions for small and big brands alike,
                build authentic product Identities and much more.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit sit non facilisis
                vitae eu. Ultrices ut diam morbi risus dui, nec eget at lorem in
                id tristique in elementum leo nisi eleifend placerat magna lacus
                elementum ornare vehicula odio posuere quisque ultrices tempus
                cras id blandit maecenas in ornare quis dolor tempus risus vitae
                feugiat fames aliquet sed.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className={`${styles.cards}`}>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div
                  className="card"
                  style={{
                    width: "18rem",
                    backgroundColor: "#121a21",
                    marginTop: "20px",
                  }}
                >
                  <div className="card-body" style={{ padding: "35px" }}>
                    <Image
                      src="/thunder.png"
                      alt="im"
                      width={200}
                      height={200}
                      style={{ width: "40px", height: "40px" }}
                    />
                    <div className={`${styles.ctitle}`}>Digital Marketing</div>
                    <p className={`${styles.ctext}`}>
                      Tempore corrupti temporibus fuga earum asperiores fugit
                      laudantium Tempore corrupti temporibus fuga earum
                      asperiores fugit laudantium.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div
                  className="card"
                  style={{
                    width: "18rem",
                    backgroundColor: "#121a21",
                    marginTop: "20px",
                  }}
                >
                  <div className="card-body" style={{ padding: "35px" }}>
                    <Image
                      src="/phone.png"
                      alt="im"
                      width={200}
                      height={200}
                      style={{ width: "40px", height: "40px" }}
                    />
                    <div className={`${styles.ctitle}`}>Web development</div>
                    <p className={`${styles.ctext}`}>
                      Tempore corrupti temporibus fuga earum asperiores fugit
                      laudantium Tempore corrupti temporibus fuga earum
                      asperiores fugit laudantium.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div
                  className="card"
                  style={{
                    width: "18rem",
                    backgroundColor: "#121a21",
                    marginTop: "20px",
                  }}
                >
                  <div className="card-body" style={{ padding: "35px" }}>
                    <Image
                      src="/magic.png"
                      alt="im"
                      width={200}
                      height={200}
                      style={{ width: "40px", height: "40px" }}
                    />
                    <div className={`${styles.ctitle}`}>Graphic Desinghing</div>
                    <p className={`${styles.ctext}`}>
                      Tempore corrupti temporibus fuga earum asperiores fugit
                      laudantium Tempore corrupti temporibus fuga earum
                      asperiores fugit laudantium.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.client}`}>
        <h3 className={`${styles.textc}`}>
            So that's us , there is no other way to putit
        </h3>
        <div className="card" style={{width: '30rem', height:'20rem', position:'relative', left:'500px' , top:'200px',backgroundColor:'#75dab4' , padding:'50px'}}>
  <div className="card-body">
    <h5>Our Happy client</h5>
    <h4>What Clinet's Say?</h4>
    <p className="card-text">Nulla metus ullamcorper vell tincident sed euesmod nibh valutpat vellit class aptent taciti socioosqu ad litora.</p>
   <div className="img">
    <div className="men">
    <Image src="/sm.jpg" width={200} height={200} style={{ width: '48px', height: '50px', borderRadius: '50px' }} alt={""} />
    ALEX RAGELMEN 
    </div>

   </div>
  </div>
</div>
      </div>
    </>
  );
};

export default About;
