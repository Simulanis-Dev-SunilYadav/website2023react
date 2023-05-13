import React from 'react'

function Banner() {
  return (
    <>
          <section className="hero-it-solution hero-nine-bg ptb-120 pb-0 homebanner">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-10">
                        <div className="hero-content-wrap mt-5 mt-lg-0 mt-xl-0">
                            <h1 className="fw-bold display-3">Transforming <span className='text-danger'>learning and productivity </span> with Simulanis</h1>
                            <p className="lead">
                               Pioneering a revolution in immersive learning and redefining the future of work across industries
                            </p>
                            <div className="action-btn mt-5 align-items-center d-block d-sm-flex d-lg-flex d-md-flex">
                                <a href="/get-in-touch" className="btn btn-primary me-3">Get in touch</a>
                                <a href="https://www.youtube.com/watch?v=2vdfZgHayyw" className="text-decoration-none popup-youtube d-inline-flex align-items-center watch-now-btn mt-3 mt-lg-0 mt-md-0 text-primary">
                                    <i className="fas fa-play text-primary border-2 border-primary"></i>
                                    Watch us in action
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="hero-img position-relative mt-5 mt-lg-0">
                            <img src="assets/img/homeimg.png" alt="hero hero-it-solution " className="img-fluid" />
                            <div className="dots">
                                <img src="assets/img/banner_dot.png" alt="dot" className="dot-1" />
                                <img src="assets/img/banner_dot.png" alt="dot" className="dot-2" />
                            </div>
                            <div className="bubble">
                                <span className="bubble-2"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Banner