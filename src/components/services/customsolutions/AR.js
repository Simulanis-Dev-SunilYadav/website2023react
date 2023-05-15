import React from 'react'
import Headerbd from '../../common/Headerbd'
import Footer from '../../common/Footer'

function AR() {
  return (
    <>
        <Headerbd/>
        <section className="hero-payment-gateway bg-gradient ptb-100">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-6 col-md-10">
                        <div className="payment-gateway-text">
                            <h1 className="display-5 text-white fw-bold mb-3">
                                Augmented reality
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
                            <img src="assets/img/services/customsolutions/ar/SterliteAR.jpg" className='img-fluid rounded-2' alt="" />
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
                            <div className="feature-three-shape">
                                <img src="assets/img/app-two-feature-blob-shape.png" alt="app screen" className="feature-three-blob img-fluid" />
                            </div>
                            <img src="assets/img/services/customsolutions/ar/about.png" alt="app screen" className="img-fluid rounded-2 position-relative z-5" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-6 col-sm-12">
                        <div className="app-two-feature-three-left">
                            <div className="app-content-feature-wrap">
                                <h2>Lorem Ipsum is simply dummy text</h2>
                                <p>
                                    Who would want to risk not deploying a novel technology such as AR which has the potential to bring tremendous benefits to all the stakeholders involved, providing a win-win situation? We wouldn’t want to, and we suppose you wouldn’t want to either. In the industrial arena, the transition towards AR is just beginning to gain momentum, and with the technological advances AR is poised to be the showrunners when it comes to effective operational efficiency of the workforce with the influx of so many AR applications.
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
                        <p>The Simulanis XR Suite for industries consists of a suite of cutting-edge XR applications which support businesses and factories across the lifecycle of learning and productivity on the shop-floor and beyond. </p>
                     </div>
                  </div>
               </div>
               <div className="powersimg">
                   <div className="box1">
                        <div className="box">
                           <img src="assets/img/services/customsolutions/ar/webAR.png" style={{background:'linear-gradient(45deg, #d5d5d5, #0000002e)'}} className="image" alt="" />
                           <div className="box-content">
                               <h4>WebAR</h4>
                               <p>It is a web based technology which doesn’t require any application to be installed on your device. </p>
                           </div>
                        </div>
                   </div>
                   <div className="box2">
                        <div className="box221">
                           <div className="box21 imghover">
                              <div className="box">
                                 <img src="assets/img/services/customsolutions/ar/ar.jpg" className="image" alt="" />
                                 <div className="box-content">
                                    <h4>Marker-based AR</h4>
                                    <p>Equipment will be made scannable and related holographic step-by-step instructions on how to perform certain task and fix maintenance related the issue. </p>
                                 </div>
                              </div>
                           </div>
                           <div className="box22">
                              <div className="box">
                                 <img src="assets/img/services/customsolutions/ar/SterliteAR(markerless).jpg" className="image" alt="" />
                                 <div className="box-content">
                                    <h4>Markerless AR</h4>
                                    <p>No image target is required. Place your equipment or machine 3D models anywhere.</p>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className="box221 box222">
                        <div className="box22">
                              <div className="box">
                                 <img src="assets/img/services/customsolutions/ar/objecttracking.jpg" className="image" alt="" />
                                 <div className="box-content">
                                    <h4>Object Tracking</h4>
                                    <p>Holographic step-by-step instructions with object tracking on how to perform certain task and fix maintenance related issues.</p>
                                 </div>
                              </div>
                           </div>
                           <div className="box21">
                              <div className="box">
                                 <img src="assets/img/services/customsolutions/ar/ARCore.jpg" className="image" alt="" />
                                 <div className="box-content">
                                    <h4>ARCore</h4>
                                    <p>With ARCore, get augmented reality experiences that seamlessly blend the digital and physical worlds.</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                   </div>
               </div>
            </div>
         </section>


        {/* <section class="services-icon keybenefits bg-light-subtle ptb-40">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-9 col-md-10">
                        <div class="section-heading text-center">
                            <h2>Key Benefits</h2>
                        </div>
                       
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-6 col-lg-4 col-md-6 p-0">
                        <div class="single-service p-lg-5 p-4 text-center mt-3 border-bottom border-end">
                            <div class="service-icon icon-center">
                                <img src="assets/img/services/customsolutions/ar/icons/ar.png" alt="service icon" width="65" height="65" />
                            </div>
                            <div class="service-info-wrap">
                                <h3 class="h6">AR increases engagement and interaction</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-lg-4 col-md-6 p-0">
                        <div class="single-service p-lg-5 p-4 text-center mt-3 border-bottom border-end">
                            <div class="service-icon icon-center">
                                <img src="assets/img/services/customsolutions/ar/icons/experience.png" alt="service icon" width="65" height="65" />
                            </div>
                            <div class="service-info-wrap">
                                <h3 class="h6">provides a richer user experience</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-lg-4 col-md-6 p-0">
                        <div class="single-service p-lg-5 p-4 text-center mt-3 border-end border-bottom">
                            <div class="service-icon icon-center">
                                <img src="assets/img/services/customsolutions/ar/icons/learn.png" alt="service icon" width="65" height="65" />
                            </div>
                            <div class="service-info-wrap">
                                <h3 class="h6">Enables learn-by-doing approach</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-lg-4 col-md-6 p-0">
                        <div class="single-service p-lg-5 p-4 text-center border-end">
                            <div class="service-icon icon-center">
                                <img src="assets/img/services/customsolutions/ar/icons/technology.png" alt="service icon" width="65" height="65" />
                            </div>
                            <div class="feature-info-wrap">
                                <h3 class="h6">Highly engaging and scalable technology</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-lg-4 col-md-6 p-0">
                        <div class="single-service p-lg-5 p-4 text-center border-end">
                            <div class="service-icon icon-center">
                                <img src="assets/img/services/customsolutions/ar/icons/training.png" alt="service icon" width="65" height="65" />
                            </div>
                            <div class="feature-info-wrap">
                                <h3 class="h6">AR provides a safe training environment for you and your workforce</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-lg-4 col-md-6 p-0">
                        <div class="single-service p-lg-5 p-4 text-center border-end">
                            <div class="service-icon icon-center">
                                <img src="assets/img/services/customsolutions/ar/icons/team.png" alt="service icon" width="65" height="65" />
                            </div>
                            <div class="feature-info-wrap">
                                <h3 class="h6">Improved collaboration across teams</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}


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
                                <li className="py-1"><i className="fas fa-check-circle me-2 text-primary"></i>AR increases engagement</li>
                                <li className="py-1"><i className="fas fa-check-circle me-2 text-primary"></i>provides a richer user experience</li>
                                <li className="py-1"><i className="fas fa-check-circle me-2 text-primary"></i>Enables learn-by-doing approach</li>
                                <li className="py-1"><i className="fas fa-check-circle me-2 text-primary"></i>Highly engaging technology</li>
                                <li className="py-1"><i className="fas fa-check-circle me-2 text-primary"></i>AR provides a safe training</li>
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
                                <img src="assets/img/services/coe/markerless.jpg" alt="not found" className="img-fluid" />
                                <a href="https://www.youtube.com/watch?v=hnncwNfiM80" className="ins-btn ins-primary-btn position-absolute video-icon popup-youtube text-decoration-none"><i className="fas fa-play"></i> <span className="ms-2 fs-md">Marker less AR</span></a>
                            </div>
                            <div className="ins-gallery-slide-single swiper-slide position-relative">
                                <img src="assets/img/services/coe/arobjecttracking.jpg" alt="not found" className="img-fluid" />
                                <a href="https://www.youtube.com/watch?v=smeM2UjSa1o" className="ins-btn ins-primary-btn position-absolute video-icon popup-youtube text-decoration-none"><i className="fas fa-play"></i> <span className="ms-2 fs-md">AR object tracking</span></a>
                            </div>
                            <div className="ins-gallery-slide-single swiper-slide position-relative">
                                <img src="assets/img/services/coe/markerbasedar.jpg" alt="not found" className="img-fluid" />
                                <a href="https://www.youtube.com/watch?v=tiobh5eH8Dw" className="ins-btn ins-primary-btn position-absolute video-icon popup-youtube text-decoration-none"><i className="fas fa-play"></i> <span className="ms-2 fs-md">Marker based AR</span></a>
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

export default AR