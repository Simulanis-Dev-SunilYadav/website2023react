import React from 'react'

function Footer() {
  return (
    <>
        <footer className="footer-section">
            <div className="footer-top footer-light ptb-40">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-md-8 col-lg-4 mb-md-4 mb-lg-0">
                            <div className="footer-single-col">
                                {/* <div className="footer-single-col mb-4">
                                    <img src="assets/img/logo_white.png" alt="logo" className="img-fluid logo-white" />
                                    <img src="assets/img/logo_color.png" alt="logo" className="img-fluid logo-color" />
                                </div> */}
                                <h3>Newsletter</h3>
                                <p>Our latest news, articles, and resources, we will sent to
                                    your inbox weekly.</p>

                                <form className="newsletter-form position-relative d-block d-lg-flex d-md-flex">
                                    <input type="text" className="input-newsletter form-control me-2" placeholder="Enter your email" name="email" required="" autocomplete="off" />
                                    <input type="submit" value="Subscribe" data-wait="Please wait..." className="btn btn-primary mt-3 mt-lg-0 mt-md-0" />
                                </form>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-7 mt-4 mt-md-0 mt-lg-0">
                            <div className="row">
                                <div className="col-md-4 col-lg-4 mt-4 mt-md-0 mt-lg-0">
                                    <div className="footer-single-col">
                                        <h3>Products</h3>
                                        <ul className="list-unstyled footer-nav-list mb-lg-0">
                                            <li><a href="/" className="text-decoration-none">Learn</a></li>
                                            <li><a href="assist" className="text-decoration-none">Assist</a></li>
                                            <li><a href="/creator" className="text-decoration-none">Create</a></li>
                                            <li><a href="/engage" className="text-decoration-none">Engage</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4 col-lg-4 mt-4 mt-md-0 mt-lg-0">
                                    <div className="footer-single-col">
                                        <h3>Industry</h3>
                                        <ul className="list-unstyled footer-nav-list mb-lg-0">
                                            <li><a href="#" className="text-decoration-none">Pharmaceutical</a></li>
                                            <li><a href="#" className="text-decoration-none">Automotive</a></li>
                                            <li><a href="#" className="text-decoration-none">Oil & Gas</a></li>
                                            <li><a href="#" className="text-decoration-none">Safety training</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4 col-lg-4 mt-4 mt-md-0 mt-lg-0">
                                    <div className="footer-single-col">
                                        <h3>Resources</h3>
                                        <ul className="list-unstyled footer-nav-list mb-lg-0">
                                            {/* <li><a href="/case-study" className="text-decoration-none">Case studies</a></li> */}
                                            <li><a href="/use-cases" className="text-decoration-none">Use cases</a></li>
                                            <li><a href="https://www.youtube.com/c/SimulanisSolutions/videos" target='_blank' className="text-decoration-none">Videos</a></li>
                                            <li><a href="/blogs" className="text-decoration-none">Blogs</a></li>
                                            <li><a href="/faq" className="text-decoration-none">FAQ</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="footer-bottom footer-light py-4">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-md-7 col-lg-7">
                            <div className="copyright-text">
                                <p className="mb-lg-0 mb-md-0">&copy; 2023 Simulanis Solutions Pvt. Ltd. Rights Reserved.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4">
                            <div className="footer-single-col text-start text-lg-end text-md-end">
                                <ul className="list-unstyled list-inline footer-social-list mb-0">
                                    <li className="list-inline-item"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fab fa-linkedin"></i></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fab fa-instagram"></i></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fab fa-youtube"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer> 

        <button type="button" className="scroll-top">
            <span><i className="fa fa-angle-up"></i></span>
        </button>
    </>
  )
}

export default Footer