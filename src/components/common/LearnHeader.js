import React from 'react'

function LearnHeader() {
  return (
    <>
      <header class="main-header position-absolute w-100">
            <nav class="navbar navbar-expand-xl navbar-dark py-0 z-10">
                <div class="container d-flex align-items-center justify-content-lg-between position-relative">
                    <a href="./" class="navbar-brand d-flex align-items-center mb-md-0 text-decoration-none">
                        <img src="assets/img/logo_white.png" alt="logo" class="img-fluid logo-white" />
                        <img src="assets/img/logo_color.png" alt="logo" class="img-fluid logo-color" />
                    </a>
                    <a class="navbar-toggler position-absolute right-0 border-0" href="#offcanvasWithBackdrop">
                        <i class="flaticon-menu" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop"
                     data-bs-toggle="offcanvas" role="button"></i>
                    </a>
                    <div class="clearfix"></div>
                    <div class="collapse navbar-collapse justify-content-center">
                        <ul class="nav col-12 col-md-auto justify-content-center main-menu">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Products</a>
                                <div class="dropdown-menu border-0 rounded-custom shadow py-0 bg-white">
                                    <div class="dropdown-grid rounded-custom width-full homepage-dropdown">
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
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Services</a>
                                <div class="dropdown-menu border-0 rounded-custom shadow py-0 bg-white">
                                    <div class="dropdown-grid rounded-custom width-full homepage-dropdown">
                                        <div class="dropdown-grid-item bg-white">
                                            <a href="/coe-setup" className="dropdown-link">
                                                <div className="drop-title">COE set up</div>
                                            </a>
                                            <a href="#" className="dropdown-link">
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
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Customers</a>
                                <div class="dropdown-menu border-0 rounded-custom shadow py-0 bg-white">
                                    <div class="dropdown-grid rounded-custom width-full homepage-dropdown">
                                        <div class="dropdown-grid-item bg-white">
                                            <a href="#" class="dropdown-link">
                                                <div class="drop-title">Clients</div>
                                            </a>
                                            <a href="#" class="dropdown-link">
                                                <div class="drop-title">Success stories</div>
                                            </a>
                                            <a href="/case-study" class="dropdown-link">
                                                <div class="drop-title">Case studies</div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Support</a>
                                <div class="dropdown-menu border-0 rounded-custom shadow py-0 bg-white">
                                    <div class="dropdown-grid rounded-custom width-full homepage-dropdown">
                                        <div class="dropdown-grid-item bg-white">
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
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Company</a>
                                <div class="dropdown-menu border-0 rounded-custom shadow py-0 bg-white">
                                    <div class="dropdown-grid rounded-custom width-full homepage-dropdown">
                                        <div class="dropdown-grid-item bg-white">
                                            <a href="/about" className="dropdown-link px-0">
                                                <div className="drop-title">Our journey so far</div>
                                            </a>
                                            <a href="#" className="dropdown-link px-0">
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
                    </div>
                    <div class="action-btns text-end me-5 me-lg-0 d-flex align-items-center">
                        <a href="javascript:void(0)" class="btn btn-link p-1 tt-theme-toggle">
                            <div class="tt-theme-light" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Light"><i class="flaticon-sun-1 fs-lg"></i></div>
                            <div class="tt-theme-dark" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Dark"><i class="flaticon-moon-1 fs-lg"></i></div>
                        </a> 
                        <a href="#" class="btn btn-link text-decoration-none me-2 px-3 d-none d-md-block d-lg-block">Get in touch</a>
                        <a href="#" class="btn btn-outline-danger btn-sm text-decoration-none me-2 d-none d-md-block d-lg-block">Sign In</a>
                        <a href="#" class="btn btn-primary btn-sm btn-link text-decoration-none  d-none d-md-block d-lg-block">Store</a>
                    </div>
                </div>
            </nav>

            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasWithBackdrop">
                <div class="offcanvas-header d-flex align-items-center mt-4">
                    <a href="#" class="d-flex align-items-center mb-md-0 text-decoration-none">
                        <img src="assets/img/logo_color.png" alt="logo" class="img-fluid ps-2" />
                    </a>
                    <button type="button" class="close-btn text-danger" data-bs-dismiss="offcanvas" aria-label="Close">
                        <i class="flaticon-cancel"></i>
                    </button>
                </div>
                <div class="offcanvas-body z-10">
                    <ul class="nav col-12 col-md-auto justify-content-center main-menu">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Products
                            </a>
                            <div class="dropdown-menu border-0 rounded-custom mt-0 shadow py-0 bg-white homepage-list-wrapper">
                                <div class="dropdown-grid rounded-custom width-full homepage-dropdown">
                                    <div class="dropdown-grid-item bg-white radius-left-side">
                                        <a href="#" class="dropdown-link">
                                            <div class="dropdown-info">
                                                <p>Learn </p>
                                            </div>
                                        </a>
                                        <a href="productity.html" class="dropdown-link">
                                            <div class="dropdown-info">
                                                <p>Assist </p>
                                            </div>
                                        </a>
                                        <a href="creator.html" class="dropdown-link">
                                            <div class="dropdown-info">
                                                <p>Create</p>
                                            </div>
                                        </a>
                                        <a href="metaverse.html" class="dropdown-link">
                                            <div class="dropdown-info">
                                                <p>Engage </p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Services & Support</a>
                            <div class="dropdown-menu border-0 rounded-custom shadow py-0 bg-white">
                                <div class="dropdown-grid rounded-custom width-full-3">
                                    <div class="dropdown-grid-item bg-white radius-left-side">
                                        <h6 class="drop-heading">Success Stories</h6>
                                        <a href="#" class="dropdown-link">
                                            <div class="dropdown-info"><p>Client Feedback</p></div>
                                        </a>
                                        <a href="/case-study" class="dropdown-link">
                                            <div class="dropdown-info"><p>Case Study</p></div>
                                        </a>
                                    </div>
                                    <div class="dropdown-grid-item bg-white radius-left-side">
                                        <h6 class="drop-heading">Setup</h6>
                                        <a href="#" class="dropdown-link">
                                            <div class="dropdown-info"><p>XR Lab Setup</p></div>
                                        </a>
                                    </div>
                                    <div class="dropdown-grid-item bg-white radius-left-side">
                                        <h6 class="drop-heading">Contact Info</h6>
                                        <a href="mailto:customer.support@simulanis.com" class="dropdown-link">
                                            <div class="dropdown-info"><p>customer.support@simulanis.com</p></div>
                                        </a>
                                        <a href="mailto:connect@simulanis.com" class="dropdown-link">
                                            <div class="dropdown-info"><p>connect@simulanis.com</p></div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">About Us</a>
                            <div class="dropdown-menu border-0 rounded-custom shadow py-0 bg-white">
                                <div class="dropdown-grid rounded-custom width-full">
                                    <div class="dropdown-grid-item bg-white radius-left-side">
                                        <h6 class="drop-heading">Overview</h6>
                                        <a href="#" class="dropdown-link px-0">
                                            <div class="drop-title">Our Story</div>
                                        </a>
                                        <a href="#" class="dropdown-link px-0">
                                            <div class="drop-title">Our Values</div>
                                        </a>
                                        <a href="#" class="dropdown-link">
                                            <div class="drop-title">Why Us ?</div>
                                        </a>
                                    </div>
                                    <div class="dropdown-grid-item radius-right-side">
                                        <h6 class="drop-heading">Awards & Achievements</h6>
                                        <a href="#" class="dropdown-link">
                                            <div class="drop-title">Our Wall</div>
                                        </a>
                                        <a href="#" class="dropdown-link">
                                            <div class="drop-title">Career</div>
                                        </a>
                                    </div>
                                    <div class="dropdown-grid-item radius-right-side">
                                        <h6 class="drop-heading">What's New</h6>
                                        <a href="#" class="dropdown-link">
                                            <div class="drop-title">News Room</div>
                                        </a>
                                        <a href="#" class="dropdown-link">
                                            <div class="drop-title">Blogs</div>
                                        </a>
                                        <a href="#" class="dropdown-link">
                                            <div class="drop-title">Podcasts</div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div class="action-btns mt-4 ps-3">
                        <a href="#" class="btn btn-outline-primary me-2">Sign In</a>
                        <a href="#" class="btn btn-primary">Get Started</a>
                    </div>
                </div>
            </div>

            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasWithBackdrop1">
                <div class="offcanvas-header d-flex align-items-center mt-1">
                    <a href="#" class="d-flex align-items-center mb-md-0 text-decoration-none">
                        <h3>Productivity</h3>
                    </a>
                    <button type="button" class="close-btn text-danger" data-bs-dismiss="offcanvas" aria-label="Close">
                        <i class="flaticon-cancel"></i>
                    </button>
                </div>
                <div class="offcanvas-body pt-0 z-10">
                    <ul class="nav col-12 col-md-auto justify-content-center main-menu">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Use Cases
                            </a>
                            <div class="dropdown-menu border-0 rounded-custom mt-0 shadow py-0 bg-white homepage-list-wrapper">
                                <div class="dropdown-grid rounded-custom width-full homepage-dropdown">
                                    <div class="dropdown-grid-item bg-white radius-left-side">
                                        <a href="#" class="dropdown-link">
                                            <div class="dropdown-info">
                                                <p>Inspection  </p>
                                            </div>
                                        </a>
                                        <a href="#" class="dropdown-link">
                                            <div class="dropdown-info">
                                                <p>Maintenance  </p>
                                            </div>
                                        </a>
                                        <a href="#" class="dropdown-link">
                                            <div class="dropdown-info">
                                                <p>Operations </p>
                                            </div>
                                        </a>
                                        <a href="#" class="dropdown-link">
                                            <div class="dropdown-info">
                                                <p>Trainings   </p>
                                            </div>
                                        </a>
                                        <a href="#" class="dropdown-link">
                                            <div class="dropdown-info">
                                                <p>Audit  </p>
                                            </div>
                                        </a>
                                        <a href="#" class="dropdown-link">
                                            <div class="dropdown-info">
                                                <p>Database  </p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Features</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Pricing</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Gallery</a>
                        </li>
                    </ul>
                    <div class="action-btns mt-2 ps-3">
                        <a href="#" class="btn btn-danger btn-sm">Free Demo</a>
                    </div>
                </div>
            </div>

            <nav class="navbar navbar-expand-xl navbar-dark p-0 sticky-header z-10 bottomheader">
                <div class="container d-flex align-items-center justify-content-lg-between position-relative">
                    <a href="./"><img src="assets/img/logosmall.png" class="logoscroolshow" alt="" /></a>
                    <a href="productity.html" class="navbar-brand d-flex align-items-center mb-md-0 text-decoration-none">
                        <h4 class="text-white1 mb-0 d-flex align-items-center"> Learn</h4>
                    </a>
                    <a class="navbar-toggler position-absolute right-0 border-0" href="#offcanvasWithBackdrop1">
                        <i class="fa fa-square-caret-down" data-bs-target="#offcanvasWithBackdrop1" aria-controls="offcanvasWithBackdrop1"
                     data-bs-toggle="offcanvas" role="button"></i>
                    </a>
                    <div class="clearfix"></div>
                    <div class="collapse navbar-collapse justify-content-end">
                        <ul class="nav col-12 col-md-auto justify-content-end main-menu">
                            <li class="nav-item dropdown">
                                <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Courses</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">Buy bundle</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Resources</a>
                                <div class="dropdown-menu border-0 rounded-custom shadow py-0 bg-white homepage-list-wrapper productdropdoen">
                                    <div class="dropdown-grid rounded-custom width-full homepage-dropdown">
                                        <div class="dropdown-grid-item bg-white">
                                            <a href="/case-study" class="dropdown-link">
                                                <div class="dropdown-info">
                                                    <p>Case studies </p>
                                                </div>
                                            </a>
                                            <a href="#" class="dropdown-link">
                                                <div class="dropdown-info">
                                                    <p>Use cases </p>
                                                </div>
                                            </a>
                                            <a href="#" class="dropdown-link">
                                                <div class="dropdown-info">
                                                    <p>Videos </p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Help</a>
                                <div class="dropdown-menu border-0 rounded-custom shadow py-0 bg-white homepage-list-wrapper productdropdoen">
                                    <div class="dropdown-grid rounded-custom width-full homepage-dropdown">
                                        <div class="dropdown-grid-item bg-white">
                                            <a href="#" class="dropdown-link">
                                                <div class="dropdown-info">
                                                    <p>FAQ </p>
                                                </div>
                                            </a>
                                            <a href="#" class="dropdown-link">
                                                <div class="dropdown-info">
                                                    <p>User manual </p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="action-btns text-end ms-4 me-lg-0 d-flex align-items-center">
                        <a href="#" class="btn btn-outline-warning btn-sm d-none d-md-block d-lg-block freedemo">Join for free</a>
                        <a href="#" class="btn btn-link d-none d-md-block d-lg-block afotherbtnbottom px-3">Get in touch</a>
                        <a href="#" class="btn btn-outline-danger mx-2 btn-sm d-none d-md-block d-lg-block afotherbtnbottom">Join for free</a>
                        <a href="#" class="btn btn-primary btn-sm d-none d-md-block d-lg-block afotherbtnbottom">Store</a>
                    </div>
                </div>
            </nav>
        </header>
    </>
  )
}

export default LearnHeader