import React from 'react'

function Cta1() {
  return (
    <>   
        <section className="cta-subscribe bg-dark text-white ptb-40 position-relative overflow-hidden">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10">
                        <div className="subscribe-info-wrap text-center position-relative z-2">
                            <div className="section-heading" data-aos="fade-up">
                                <h4 className="h5 text-danger">Let's try! get free support</h4>
                                <h2>Start your 14-day free trial</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            </div>
                            <div className="form-block-banner mw-60 m-auto mt-5" data-aos="fade-up" data-aos-delay="50">
                                <a href="/get-in-touch" className="btn btn-primary">Contact with Us</a>
                                <a href="https://www.youtube.com/watch?v=wA8G1K9mRdk" className="text-decoration-none popup-youtube d-inline-flex align-items-center watch-now-btn ms-lg-3 ms-md-3 mt-3 mt-lg-0"> <i
                                        className="fas fa-play"></i> Watch demo </a>
                            </div>
                            <ul className="nav justify-content-center subscribe-feature-list mt-4" data-aos="fade-up" data-aos-delay="100">
                                <li className="nav-item">
                                    <span><i className="far fa-check-circle text-primary me-2"></i>Free 14-day trial</span>
                                </li>
                                <li className="nav-item">
                                    <span><i className="far fa-check-circle text-primary me-2"></i>No credit card required</span>
                                </li>
                                <li className="nav-item">
                                    <span><i className="far fa-check-circle text-primary me-2"></i>Support 24/7</span>
                                </li>
                                <li className="nav-item">
                                    <span><i className="far fa-check-circle text-primary me-2"></i>Cancel anytime</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bg-circle rounded-circle circle-shape-3 position-absolute bg-dark-light left-5"></div>
                <div className="bg-circle rounded-circle circle-shape-1 position-absolute bg-danger right-5"></div>
            </div>
        </section>
    </>
  )
}

export default Cta1