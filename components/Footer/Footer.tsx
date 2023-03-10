import Image from "next/image";

const Footer = () =>{
    return(
        <div className="fottermain">
            <div className="footerone">
               <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 colxs-12 mt-5">
                    <p className="footerparaone">Contact Us </p>
                    <div className="fmain1" style={{display:'flex', justifyContent: 'space-between', width: '65%'}}>
                    <div className="icon" >
                    <Image src= "/location-pin.png" alt="myimage" width={500} height={500} style={{width: '20px', height:'20px'}}  />
                    </div>
                   <div className="adress">
                   <b className="office"> Office Adress</b>
                    <p className="Otext">504 White St Dawsonville, GA <br /> GA 30534 <br /> New York</p>
                   </div>
                </div>
                <div className="fmain1" style={{display:'flex', justifyContent: 'space-between', width: '48%'}}>
                    <div className="icon" >
                    <Image src= "/email.png" alt="myimage" width={500} height={500} style={{width: '20px', height:'20px'}}  />
                    </div>
                   <div className="adress">
                   <b className="office"> Email Us</b>
                    <p className="Otext">support@gmail.com</p>
                   </div>
                </div>
                <div className="fmain1" style={{display:'flex', justifyContent: 'space-between', width: '34%'}}>
                    <div className="icon" >
                    <Image src= "/location-pin.png" alt="myimage" width={500} height={500} style={{width: '20px', height:'20px'}}  />
                    </div>
                   <div className="adress">
                   <b className="office"> Call Us</b>
                    <p className="Otext">+8378748437</p>
                   </div>
                </div>
                    </div>
                <div className="col-lg-4 col-md-6 col-sm-12 colxs-12 mt-5">
                <p className="footerparaone">Recent News</p>
                <div className="fmain1" style={{display:'flex', justifyContent: 'space-between', width: '105%'}}>
                    <div className="icon" >
                    <Image src= "/1.jpg" alt="myimage" width={500} height={500} style={{width: '58px', height:'33px'}}  />
                    </div>
                   <div className="adress">
                  
                    <p className="Otext" style={{fontSize:'13px'}}>The Start-Up Ultimate Guide to <br/>  Make Your WordPress Journal.Your WordPress Journal</p>
                    <p className="green" >14 JAN 2022</p>
                   </div>
                </div>
                <div className="fmain1" style={{display:'flex', justifyContent: 'space-between', width: '105%'}}>
                    <div className="icon" >
                    <Image src= "/2.jpg" alt="myimage" width={500} height={500} style={{width: '58px', height:'33px'}}  />
                    </div>
                   <div className="adress">
                  
                    <p className="Otext" style={{fontSize:'13px'}}>The Start-Up Ultimate Guide to <br/>  Make Your WordPress Journal.Your WordPress Journal</p>
                    <p className="green" >14 JAN 2022</p>
                   </div> 
                   
                </div>
                <div className="inputmain" style={{position:'absolute'}}>
                    <input type="email" className="inputt" placeholder="Type Your Email" />
                    <Image src="/send.png" alt="mying" className="send" width={200} height={200} style={{width:'16px', height:'18px', position:'relative' , marginLeft:'-26px', backgroundColor:'#75dab4;'}}/>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 colxs-12 mt-5">
                <p className="footerparatwo">Ruko</p>
                <div className="flast">
                <Image src="/fwhite.png"  alt="my" width={200} height={200} style={{width:'20px', height:'20px'}}/>
                <Image src="/twhite.png"  alt="my" width={200} height={200}  style={{width:'20px', height:'20px'}}/>
                <Image src="/instagram.png"  alt="my" width={200} height={200}  style={{width:'20px', height:'20px'}}/>
                <Image src="/youtube.png"  alt="my" width={200} height={200}  style={{width:'20px', height:'20px'}}/>
                </div>
                <p className="dull"> © 2022, ruko Template. Made with passion by</p>
                </div>
               
                </div>


               </div>

            </div>

        </div>
    )
}
export default Footer;