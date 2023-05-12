import React from 'react'
import logowhite from '../../assets/img/logo_white.png'
import logocolor from '../../assets/img/logo_color.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
       <header className="main-header position-absolute w-100">
            <nav className="navbar navbar-expand-xl navbar-light sticky-header z-10">
                <div className="container d-flex align-items-center justify-content-lg-between position-relative">
                    <a href="/" className="navbar-brand d-flex align-items-center mb-md-0 text-decoration-none">
                        <img src="assets/img/logo_white.png" alt="logo" className="img-fluid logo-white" />
                        <img src="assets/img/logo_color.png" alt="logo" className="img-fluid logo-color" />
                    </a>
                    <a className="navbar-toggler position-absolute right-0 border-0" href="#offcanvasWithBackdrop">
                        <i className="flaticon-menu" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop"
                     data-bs-toggle="offcanvas" role="button"></i>
                    </a>
                    <div className="clearfix"></div>
                    <div className="collapse navbar-collapse justify-content-center">
                        <ul className="nav col-12 col-md-auto justify-content-center main-menu">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Products</a>
                                <div className="dropdown-menu border-0 rounded-custom shadow py-0 bg-white">
                                    <div className="dropdown-grid rounded-custom width-full homepage-dropdown">
                                        <div className="dropdown-grid-item bg-white">
                                            <a href="/" className="dropdown-link">
                                                <span className="demo-list"><i className="fa fa-desktop fa-2x"></i> </span>
                                                <div className="dropdown-info">
                                                    <div className="drop-title ctitle">Simulanis Learning Suite</div>
                                                    <h6 className="">Learn</h6>
                                                </div>
                                            </a>
                                            <a href="/assist" className="dropdown-link">
                                                <span className="demo-list"> <i className="fa-sharp fa-solid fa-phone fa-2x"></i> </span>
                                                <div className="dropdown-info">
                                                    <div className="drop-title ctitle">Simulanis Assistance Suite</div>
                                                    <h6 className="">Assist</h6>
                                                </div>
                                            </a>
                                            <a href="/creator" className="dropdown-link">
                                                <span className="demo-list"> <i className="fa fa-image fa-2x"></i> </span>
                                                <div className="dropdown-info">
                                                    <div className="drop-title ctitle">Simulanis Creator Suite</div>
                                                    <h6 className="">Create</h6>
                                                </div>
                                            </a>
                                            <a href="/engage" className="dropdown-link">
                                                <span className="demo-list"> <i className="fa fa-vr-cardboard fa-2x"></i> </span>
                                                <div className="dropdown-info">
                                                    <div className="drop-title ctitle">Simulanis Metaverse Suite</div>
                                                    <h6 className="">Engage</h6>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Services</a>
                                <div className="dropdown-menu border-0 rounded-custom shadow py-0 bg-white">
                                    <div className="dropdown-grid rounded-custom width-full homepage-dropdown">
                                        <div className="dropdown-grid-item bg-white">
                                            <a href="/coe-setup" className="dropdown-link">
                                                <div className="drop-title">COE set up</div>
                                            </a>
                                            <a href="/custom-solutions" className="dropdown-link">
                                                <div className="drop-title">Custom solutions</div>
                                            </a>
                                            <a href="/videos-and-animations" className="dropdown-link">
                                                <div className="drop-title">Videos & animations</div>
                                            </a>
                                            <a href="http://academy.simulanis.io/" target='_blank' className="dropdown-link">
                                                <div className="drop-title">Become an expert</div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Customers</a>
                                <div className="dropdown-menu border-0 rounded-custom shadow py-0 bg-white ">
                                    <div className="dropdown-grid rounded-custom width-full homepage-dropdown">
                                        <div className="dropdown-grid-item bg-white">
                                            <a href="#" className="dropdown-link">
                                                <div className="drop-title">Clients</div>
                                            </a>
                                            <a href="#" className="dropdown-link">
                                                <div className="drop-title">Success stories</div>
                                            </a>
                                            <a href="/case-study" className="dropdown-link">
                                                <div className="drop-title">Case studies</div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Support</a>
                                <div className="dropdown-menu border-0 rounded-custom shadow py-0 bg-white">
                                    <div className="dropdown-grid rounded-custom width-full homepage-dropdown">
                                        <div className="dropdown-grid-item bg-white">
                                            <a href="/sales-support" className="dropdown-link">
                                                <div className="drop-title">Sales support</div>
                                            </a>
                                            <a href="/technical-support" className="dropdown-link">
                                                <div className="drop-title">Technical support</div>
                                            </a>
                                            <a href="#" className="dropdown-link">
                                                <div className="drop-title">Customer success</div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
 
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Company</a>
                                <div className="dropdown-menu border-0 rounded-custom shadow py-0 bg-white">
                                    <div className="dropdown-grid rounded-custom width-full homepage-dropdown">
                                        <div className="dropdown-grid-item bg-white">
                                            <a href="/about" className="dropdown-link px-0">
                                                <div className="drop-title">Our journey so far</div>
                                            </a>
                                            <a href="/our-values" className="dropdown-link px-0">
                                                <div className="drop-title">Our values</div>
                                            </a>
                                            <a href="/awards" className="dropdown-link">
                                                <div className="drop-title">Credibility</div>
                                            </a>
                                            <a href="/career" className="dropdown-link">
                                                <div className="drop-title">Join us</div>
                                            </a>   
                                            <a href="/partnerships" className="dropdown-link">
                                                <div className="drop-title">Partnerships</div>
                                            </a>                                        
                                            <a href="/become-partner" className="dropdown-link">
                                                <div className="drop-title">Become a partner</div>
                                            </a>                                                                                                                                      
                                            <a href="/news" className="dropdown-link">
                                                <div className="drop-title">News</div>
                                            </a>                                                                                                                                      
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="action-btns text-end me-5 me-lg-0 d-flex align-items-center">
                        <a href="javascript:void(0)" className="btn btn-link p-1 tt-theme-toggle">
                            <div className="tt-theme-light" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Light"><i className="flaticon-sun-1 fs-lg"></i></div>
                            <div className="tt-theme-dark" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Dark"><i className="flaticon-moon-1 fs-lg"></i></div>
                        </a> 
                        <a href="#" className="btn btn-outline-danger btn-sm text-decoration-none me-2 ms-3 d-none d-md-block d-lg-block">Get in touch</a>
                        <a href="#" className="btn btn-primary btn-sm btn-link text-decoration-none  d-none d-md-block d-lg-block"><i className="fa fa-cart-shopping"></i> Store</a>
                    </div>
                </div>
            </nav>
            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasWithBackdrop">
                <div className="offcanvas-header d-flex align-items-center mt-2">
                    <a href="#" className="d-flex align-items-center mb-md-0 text-decoration-none">
                        <img src="assets/img/logo_color.png" alt="logo" className="img-fluid ps-2" />
                    </a>
                    <button type="button" className="close-btn text-danger" data-bs-dismiss="offcanvas" aria-label="Close">
                        <i className="flaticon-cancel"></i>
                    </button>
                </div>
                <div className="offcanvas-body z-10">
                    <ul className="nav col-12 col-md-auto justify-content-center main-menu">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Products
                            </a>
                            <div className="dropdown-menu border-0 rounded-custom mt-0 shadow py-0 bg-white homepage-list-wrapper">
                                <div className="dropdown-grid rounded-custom width-full homepage-dropdown">
                                    <div className="dropdown-grid-item bg-white radius-left-side">
                                        <a href="/" className="dropdown-link">
                                                <span className="demo-list"><i className="fa fa-desktop fa-2x"></i> </span>
                                                <div className="dropdown-info">
                                                    <div className="drop-title ctitle">Simulanis Learning Suite</div>
                                                    <h6 className="">Learn</h6>
                                                </div>
                                            </a>
                                            <a href="/assist" className="dropdown-link">
                                                <span className="demo-list"> <i className="fa-sharp fa-solid fa-phone fa-2x"></i> </span>
                                                <div className="dropdown-info">
                                                    <div className="drop-title ctitle">Simulanis Assistance Suite</div>
                                                    <h6 className="">Assist</h6>
                                                </div>
                                            </a>
                                            <a href="/creator" className="dropdown-link">
                                                <span className="demo-list"> <i className="fa fa-image fa-2x"></i> </span>
                                                <div className="dropdown-info">
                                                    <div className="drop-title ctitle">Simulanis Creator Suite</div>
                                                    <h6 className="">Create</h6>
                                                </div>
                                            </a>
                                            <a href="/engage" className="dropdown-link">
                                                <span className="demo-list"> <i className="fa fa-vr-cardboard fa-2x"></i> </span>
                                                <div className="dropdown-info">
                                                    <div className="drop-title ctitle">Simulanis Metaverse Suite</div>
                                                    <h6 className="">Engage</h6>
                                                </div>
                                            </a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Services</a>
                            <div className="dropdown-menu border-0 rounded-custom shadow py-0 bg-white">
                                <div className="dropdown-grid rounded-custom width-full-3">
                                    <div className="dropdown-grid-item bg-white radius-left-side">
                                        <a href="/coe-setup" className="dropdown-link">
                                            <div className="drop-title">COE set up</div>
                                        </a>
                                        <a href="/custom-solutions" className="dropdown-link">
                                            <div className="drop-title">Custom solutions</div>
                                        </a>
                                        <a href="/videos-and-animations" className="dropdown-link">
                                            <div className="drop-title">Videos & animations</div>
                                        </a>
                                        <a href="http://academy.simulanis.io/" target='_blank' className="dropdown-link">
                                            <div className="drop-title">Become an expert</div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Customers</a>
                            <div className="dropdown-menu border-0 rounded-custom shadow py-0 bg-white ">
                                <div className="dropdown-grid rounded-custom width-full homepage-dropdown">
                                    <div className="dropdown-grid-item bg-white">
                                        <a href="#" className="dropdown-link">
                                            <div className="drop-title">Clients</div>
                                        </a>
                                        <a href="#" className="dropdown-link">
                                            <div className="drop-title">Success stories</div>
                                        </a>
                                        <a href="/case-study" className="dropdown-link">
                                            <div className="drop-title">Case studies</div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Support</a>
                            <div className="dropdown-menu border-0 rounded-custom shadow py-0 bg-white">
                                <div className="dropdown-grid rounded-custom width-full homepage-dropdown">
                                    <div className="dropdown-grid-item bg-white">
                                        <a href="/sales-support" className="dropdown-link">
                                            <div className="drop-title">Sales support</div>
                                        </a>
                                        <a href="/technical-support" className="dropdown-link">
                                            <div className="drop-title">Technical support</div>
                                        </a>
                                        <a href="#" className="dropdown-link">
                                            <div className="drop-title">Customer success</div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Company</a>
                            <div className="dropdown-menu border-0 rounded-custom shadow py-0 bg-white">
                                <div className="dropdown-grid rounded-custom width-full homepage-dropdown">
                                    <div className="dropdown-grid-item bg-white">
                                        <a href="/about" className="dropdown-link px-0">
                                            <div className="drop-title">Our journey so far</div>
                                        </a>
                                        <a href="/our-values" className="dropdown-link px-0">
                                            <div className="drop-title">Our values</div>
                                        </a>
                                        <a href="/awards" className="dropdown-link">
                                            <div className="drop-title">Credibility</div>
                                        </a>
                                        <a href="/career" className="dropdown-link">
                                            <div className="drop-title">Join us</div>
                                        </a>   
                                        <a href="/partnerships" className="dropdown-link">
                                            <div className="drop-title">Partnerships</div>
                                        </a>                                        
                                        <a href="/become-partner" className="dropdown-link">
                                            <div className="drop-title">Become a partner</div>
                                        </a>                                                                                                                                         
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="action-btns mt-4 ps-3">
                        <a href="#" className="btn btn-outline-primary me-2">Get in touch</a>
                        <a href="#" className="btn btn-primary headerbtn">Store</a>
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header