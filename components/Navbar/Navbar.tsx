import Link from 'next/link'
const Navbar = () => {
    return (
        <div>
            
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"> <b style={{color:"white"}}>Ruko</b></a>
                    <button className="navbar-toggler" style={{color:"white"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" style={{color:"white"}} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span style={{color:"white"}}><b>Home</b></span>
                                </a>
                                <ul className=" dropdown-men">
                                    <li><a className="dropdown-item" href="#">Main Home</a></li>
                                    <li><a className="dropdown-item" href="#">Creative Studio</a></li>
                                    <li><a className="dropdown-item" href="#">Bussiness Startup</a></li>
                                    
                                </ul>
                            </li> */}
                             <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" style={{color:"white"}} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <span style={{color:"white"}}><b>Home</b></span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Main Home</a></li>
                                    <li><a className="dropdown-item" href="#">Creative Studio</a></li>
                                    <li><a className="dropdown-item" href="#">Bussiness Startup</a></li>
                                    
                                  
                                </ul>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                <span style={{color:"white"}}><b><Link href="/About" style={{textDecoration:"none",color:"white"}}>About</Link></b></span>
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" style={{color:"white"}} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <span style={{color:"white"}}><b>Portfolio</b></span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Masonry 3 Columns</a></li>
                                    <li><a className="dropdown-item" href="#">Masonry 3 Columns</a></li>
                                    <li><a className="dropdown-item" href="#">Pinteest List</a></li>
                                    
                                  
                                </ul>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">
                            <span style={{color:"white"}}><b><Link href="/Blog" style={{textDecoration:"none",color:"white"}}>Blogs</Link></b></span>
                            </a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">
                            <span style={{color:"white"}}><b><Link href="/Contact" style={{textDecoration:"none",color:"white"}}>Contact</Link></b></span>
                            </a>
                            </li>
                        </ul>
                       
                    </div>
                </div>
            </nav>


        </div>
    )
}
export default Navbar;