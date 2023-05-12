import React from 'react'
import Headerbd from '../../common/Headerbd'
import Footer from '../../common/Footer'

function MR() {
  return (
    <>
        <Headerbd/>
          <section className="hero-payment-gateway bg-gradient ptb-100">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-6 col-md-10">
                        <div className="payment-gateway-text">
                            <h1 className="display-5 text-white fw-bold mb-3">
                                Mixed reality
                            </h1>
                            <p className="text-white m-0">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                            </p>
                            <div className="action-btn mt-4 align-items-center d-block d-sm-flex d-lg-flex d-md-flex">
                                <a href="#" className="btn-gradient-sqr me-3">Get in touch</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="payment-hero-img pt-40 text-center text-lg-end position-relative">
                            <img src="assets/img/services/customsolutions/mr/mr.jpg" className='img-fluid rounded-2' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="app-two-feature-three ptb-40">
            <div className="container">
                <div className="row align-items-center justify-content-lg-between">
                    <div className="col-lg-5 col-xl-5 col-sm-12">
                        <div className="app-two-feature-three-img position-relative text-center mt-5 mt-lg-0">
                            {/* <div className="feature-three-shape">
                                <img src="assets/img/app-two-feature-blob-shape.png" alt="app screen" className="feature-three-blob img-fluid" />
                            </div> */}
                            <img src="assets/img/services/customsolutions/mr.png" alt="app screen" className="img-fluid rounded-2 position-relative z-5" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-6 col-sm-12">
                        <div className="app-two-feature-three-left">
                            <div className="app-content-feature-wrap">
                                <h2>Lorem Ipsum is simply dummy text</h2>
                                <p>
                                    Since, Mixed Reality is the convergence of both AR and VR to offer a more mesmerizing experience by mimicking the real-world in a virtual environment while also retaining the real-world interactions. It is enabling businesses to deploy an integrated solution for various learning & development and operational requirements. Businesses can now leverage an optimal mix of all these technologies to become Industry 4.0 ready.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="products bg-light-subtle ptb-40">
            <div className="container">
               <div className="row">
                  <div className="col-md-10 offset-md-1">
                     <div className="title text-center mb-3 mt-2">
                        <h2 className="t-bolder">Our prowess</h2>
                        <p>The Simulanis XR Suite for industries consists of a suite of cutting-edge XR applications which support businesses and factories across the lifecycle of learning and productivity on the shop-floor and beyond.</p>
                     </div>
                  </div>
               </div>
               <div className="powersimg">
                   <div className="box1">
                        <div className="box">
                           <img src="assets/img/services/customsolutions/mr/2.jpg" style={{objectFit:'cover'}} className="image" alt="" />
                           <div className="box-content">
                               <h4>Engineering and Design Modeling</h4>
                           </div>
                        </div>
                   </div>
                   <div className="box2 pt-3">
                        <div className="box221 box222">
                        <div className="box22" style={{flex:'1'}}>
                              <div className="box">
                                 <img src="assets/img/services/customsolutions/mr/6.jpg" style={{height:'92vh'}} className="image" alt="" />
                                 <div className="box-content">
                                    <h4>Training, Maintenance and Productivity</h4>
                                 </div>
                              </div>
                           </div>
                        </div>
                   </div>
               </div>
            </div>
         </section>

        <section className="why-choose-us ptb-40">
            <div className="container">
                <div className="row justify-content-lg-between align-items-center">
                    <div className="col-lg-5 col-12">
                        <div className="feature-img-holder mt-4 mt-lg-0 mt-xl-0">
                            <img src="assets/img/services/benefits.jpg" className="img-fluid" alt="feature-image" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="why-choose-content">
                            <h2>Key benefits</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <ul className="list-unstyled d-flex flex-wrap list-two-col mt-4 mb-4">
                                <li className="py-1"><i className="fas fa-check-circle me-2 text-primary"></i>Reduced call out times</li>
                                <li className="py-1"><i className="fas fa-check-circle me-2 text-primary"></i>Speed up the quality control</li>
                                <li className="py-1"><i className="fas fa-check-circle me-2 text-primary"></i>Improve employee training</li>
                                <li className="py-1"><i className="fas fa-check-circle me-2 text-primary"></i>Highly repeatable and scalable</li>
                                <li className="py-1"><i className="fas fa-check-circle me-2 text-primary"></i>Increased productivity rates</li>
                                <li className="py-1"><i className="fas fa-check-circle me-2 text-primary"></i>Improved collaboration</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="ins-gallery bg-light-subtle ptb-40">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-xl-8 offset-xl-2 text-center">
                        <div className="ins-gallery-info mt-3 mt-xl-0">
                            <h2 className="ins-heading mb-2">Our sample work</h2>
                            <p className="ins-text">The Simulanis XR Suite for industries consists of a suite of cutting-edge XR applications which support businesses and factories across the lifecycle of learning and productivity</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ins-gallery-center-slider overflow-hidden mt-3">
                <div className="ins-gallery-slider swiper overflow-visible">
                    <div className="swiper-wrapper">
                        <div className="ins-gallery-slide-single swiper-slide position-relative">
                            <img src="assets/img/services/customsolutions/vr/VirtualSimulator.jpg" alt="not found" className="img-fluid" />
                            <a href="https://www.youtube.com/watch?v=dVrv5I4MuuY" className="ins-btn ins-primary-btn position-absolute video-icon popup-youtube text-decoration-none"><i className="fas fa-play"></i> <span className="ms-2 fs-md">Fire Safety Training</span></a>
                        </div>
                        <div className="ins-gallery-slide-single swiper-slide position-relative">
                            <img src="assets/img/services/customsolutions/vr/VirtualSimulator.jpg" alt="not found" className="img-fluid" />
                            <a href="https://www.youtube.com/watch?v=dVrv5I4MuuY" className="ins-btn ins-primary-btn position-absolute video-icon popup-youtube text-decoration-none"><i className="fas fa-play"></i> <span className="ms-2 fs-md">Fire Safety Training</span></a>
                        </div>
                        <div className="ins-gallery-slide-single swiper-slide position-relative">
                            <img src="assets/img/services/customsolutions/vr/VirtualSimulator.jpg" alt="not found" className="img-fluid" />
                            <a href="https://www.youtube.com/watch?v=dVrv5I4MuuY" className="ins-btn ins-primary-btn position-absolute video-icon popup-youtube text-decoration-none"><i className="fas fa-play"></i> <span className="ms-2 fs-md">Fire Safety Training</span></a>
                        </div>
                    </div>
                    <div className="swiper-btn-prev swiper-control"><i className="fa-solid fa-angle-left"></i></div>
                    <div className="swiper-btn-next swiper-control"><i className="fa-solid fa-angle-right"></i></div>
                </div>
            </div>
        </section>

        <Footer/>
    </>
  )
}

export default MR