// import Image from "next/image";

// const Footer = () =>{
//     return(
//         <div className="fottermain">
//             <div className="footerone">
//                <div className="row">
//                 <div className="col-lg-4 col-md-6 col-sm-12 colxs-12 mt-5">
//                     <p className="footerparaone">Contact Us </p>
//                     <div className="fmain1" style={{display:'flex', justifyContent: 'space-between', width: '65%'}}>
//                     <div className="icon" >
//                     <Image src= "/location-pin.png" alt="myimage" width={500} height={500} style={{width: '20px', height:'20px'}}  />
//                     </div>
//                    <div className="adress">
//                    <b className="office"> Office Adress</b>
//                     <p className="Otext">504 White St Dawsonville, GA <br /> GA 30534 <br /> New York</p>
//                    </div>
//                 </div>
//                 <div className="fmain1" style={{display:'flex', justifyContent: 'space-between', width: '48%'}}>
//                     <div className="icon" >
//                     <Image src= "/email.png" alt="myimage" width={500} height={500} style={{width: '20px', height:'20px'}}  />
//                     </div>
//                    <div className="adress">
//                    <b className="office"> Email Us</b>
//                     <p className="Otext">support@gmail.com</p>
//                    </div>
//                 </div>
//                 <div className="fmain1" style={{display:'flex', justifyContent: 'space-between', width: '34%'}}>
//                     <div className="icon" >
//                     <Image src= "/location-pin.png" alt="myimage" width={500} height={500} style={{width: '20px', height:'20px'}}  />
//                     </div>
//                    <div className="adress">
//                    <b className="office"> Call Us</b>
//                     <p className="Otext">+8378748437</p>
//                    </div>
//                 </div>
//                     </div>
//                     <div className="col-lg-4 col-md-6 col-sm-12 colxs-12 mt-5">
//     <p className="footerparaone">Recent News</p>
//     <div className="fmain1" style={{display:'flex', justifyContent: 'space-between', width: '105%'}}>
//         <div className="icon" >
//             <Image src= "/1.jpg" alt="myimage" width={500} height={500} style={{width: '58px', height:'33px'}}  />
//         </div>
//         <div className="adress">
//             <p className="Otext" style={{fontSize:'13px'}}>The Start-Up Ultimate Guide to <br/>  Make Your WordPress Journal.Your WordPress Journal</p>
//             <p className="green" >14 JAN 2022</p>
//         </div>
//     </div>
//     <div className="fmain1" style={{display:'flex', justifyContent: 'space-between', width: '105%'}}>
//         <div className="icon" >
//             <Image src= "/2.jpg" alt="myimage" width={500} height={500} style={{width: '58px', height:'33px'}}  />
//         </div>
//         <div className="adress">
//             <p className="Otext" style={{fontSize:'13px'}}>The Start-Up Ultimate Guide to <br/>  Make Your WordPress Journal.Your WordPress Journal</p>
//             <p className="green" >14 JAN 2022</p>
//         </div> 

//     </div>
//     <div className="inputmain" style={{position:'absolute'}}>
//         <input type="email" className="inputt" placeholder="Type Your Email" />
//         <Image src="/send.png" alt="mying" className="send" width={200} height={200} />
//     </div>
//     </div>
//     <div className="col-lg-4 col-md-6 col-sm-12 colxs-12 mt-5">
//         <p className="footerparatwo">Ruko</p>
//         <div className="flast">
//             <Image src="/fwhite.png" className="licons" alt="my" width={200} height={200} />
//             <Image src="/twhite.png"   className="licons" alt="my" width={200} height={200}  />
//             <Image src="/instagram.png"   className="licons" alt="my" width={200} height={200}  />
//             <Image src="/youtube.png"  className="licons"  alt="my" width={200} height={200}  />
//         </div>
//         <p className="dull"> © 2022, ruko Template. Made with passion by <span className="green">desingh-story</span></p>
//     </div>
// </div>



//                </div>

//             </div>



//     )
// }
// export default Footer;

import Image from 'next/image'
const Footer = () => {
    return (
        <div className="fottermain">
            <div className="footterone">

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <p className="footerparaone">Contact Us</p>
                            <div className="d-flex mt-4">
                                <div style={{ paddingTop: "6px" }}>
                                    <Image

                                        src="/location-pin.png"
                                        alt="Picture of the author"
                                        width={20}
                                        height={25}
                                    />

                                </div>
                                <div style={{ paddingLeft: "30px" }}>
                                    <b className="office"> Office Adress</b>
                                    <p className="Otext">504 White St.Dawsonville, GA 30534 <br /> New York</p>
                                </div>

                            </div>
                            <div className="d-flex mt-3" >
                                <div style={{ paddingTop: "6px" }}>
                                    <Image

                                        src="/email.png"
                                        alt="Picture of the author"
                                        width={20}
                                        height={25}

                                    />

                                </div>
                                <div style={{ paddingLeft: "30px" }}>
                                    <b className="office">Email Us</b>
                                    <p className="Otext">support@gmail.com</p>
                                </div>

                            </div>
                            <div className="d-flex mt-3" >
                                <div style={{ paddingTop: "6px" }}>
                                    <Image

                                        src="/call.png"
                                        alt="Picture of the author"
                                        width={20}
                                        height={25}
                                    />

                                </div>
                                <div style={{ paddingLeft: "30px" }}>
                                    <b className="office">Call Us</b>
                                    <p className="Otext">+87986451666</p>
                                </div>

                            </div>

                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <p className="footerparaone">Contact Us</p>
                            <div className='d-flex'>
                                <div>
                                    <Image

                                        src="/1.jpg"
                                        alt="Picture of the author"
                                        width={100}
                                        height={65}
                                    />

                                </div>
                                <div style={{ paddingLeft: "10px" }}>
                                    <p className="Otext" style={{ fontSize: '13px', paddingTop: "2px" }}>The Start-Up Ultimate Guide to <br />  Make Your WordPress Journal.</p>
                                    <p className="green" >14 JAN 2022</p>

                                </div>

                            </div>
                            <div className='d-flex mt-3'>
                                <div>
                                    <Image

                                        src="/2.jpg"
                                        alt="Picture of the author"
                                        width={100}
                                        height={65}
                                    />

                                </div>
                                <div style={{ paddingLeft: "10px" }}>
                                    <p className="Otext" style={{ fontSize: '13px', paddingTop: "2px" }}>The Start-Up Ultimate Guide to <br />  Make Your WordPress Journal.</p>
                                    <p className="green" >14 JAN 2022</p>

                                </div>

                            </div>
                            <div className="inputmain pt-3" style={{ position: 'absolute' }}>
                                <input type="email" className="inputt" placeholder="Type Your Email" />
                                <Image src="/send.png" alt="mying" className="send" width={200} height={200} />
                            </div>

                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <p className="footerparatwo">Ruko</p>
                            <div className="flast mt-5">
                                <Image src="/fwhite.png" className="licons" alt="my" width={200} height={200} />
                                <Image src="/twhite.png" className="licons" alt="my" width={200} height={200} />
                                <Image src="/instagram.png" className="licons" alt="my" width={200} height={200} />
                                <Image src="/youtube.png" className="licons" alt="my" width={200} height={200} />
                            </div>
                           <p className='pt-3' style={{color:"white"}}>© 2022, RUKO TEMPLATE. MADE WITH</p>
                           <p style={{color:"white"}}>PASSION BY <span style={{color:"#75dab4"}}>DESIGN-STORY.</span></p>

                        </div>

                    </div>

                </div>

            </div>
            <br /><br /><br /><br />


        </div>
    )
}
export default Footer;