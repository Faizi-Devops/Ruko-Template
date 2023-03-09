import Image from "next/image";

const Footer = () =>{
    return(
        <div className="fottermain">
            <div className="footerone">
               <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 colxs-12 mt-5">
                    <p className="footerparaone">Contact Us </p>
                    <Image src= "/location-pin.png" alt="myimage" width={500} height={500} style={{width: '20px', height:'20px'}}  />
                    <b> Office Adress</b>
                    <p>504 White St Dawsonville, GA <br /> GA 30534 <br /> New York</p>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 colxs-12 mt-5">
                <p className="footerparaone">Recent News</p>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 colxs-12 mt-5">
                <p className="footerparatwo">Ruko</p>
                <i className="fa-solid fa-user" style={{color:"blue"}}></i>
                </div>


               </div>

            </div>

        </div>
    )
}
export default Footer;