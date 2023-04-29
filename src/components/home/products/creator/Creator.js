import React from 'react'
import CreatorHeader from '../../../common/CreatorHeader'
import Cta1 from '../../../forms/Cta1'
import Footer from '../../../common/Footer'

function Creator() {
  return (
    <>
        <CreatorHeader/>

      <section className="hero-section ptb-120 pb-0 position-relative overflow-hidden dynamicassist creatorbg">
            <div className="container">
                <div className="row justify-content-center mt-4 text-center">
                    <div className="col-xl-9 col-lg-10 mt-5 mb-3">
                        <div className="hero-content-wrap">
                            <h1 className="fw-bold display-3 aos-init aos-animate" data-aos="fade-up">Create your own<span className="text-danger"> Metaverse</span> in a few clicks</h1>
                            <p className="lead aos-init aos-animate " data-aos="fade-up" data-aos-delay="50">Simulanis Creator comprises of authoring tools which allow you to create and build an XR environment with ease and simplicity. You can create complex, engaging simulation.</p>
                            <div className="action-btns text-center pt-3 mk-hero-content aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                                <a href="#" className="btn btn-primary me-lg-3 me-sm-3">Start Free Trial</a>
                                <a href="https://www.youtube.com/watch?v=Xcn5hL8DjRk" className="mk-hero-play fw-bold popup-youtube"><span className="d-inline-flex align-items-center justify-content-center rounded-circle text-primary"><i className="fas fa-play"></i></span> Watch Demo</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-11">
                        <div className="position-relative aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                            <img src="assets/img/creator/Creator.png" alt="dashboard image" className="img-fluid position-relative rounded-custom mt-lg-2" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-dark ptb-60 mt--100">
                <div className="container ptb-60">
                    <div className="row pt-4">
                        <div className="col-lg-3 col-md-3">
                            <div className="review-info-wrap text-center rounded-custom d-flex flex-column  aos-init aos-animate" data-aos="fade-up" data-aos-delay="50">
                                <div className="review-info-content mt-2">
                                    <h5>Platform Agnostic</h5>
                                    <p className="mb-0">Create XR content that can be deployed across platforms and scaled with ease.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <div className="review-info-wrap text-center rounded-custom d-flex flex-column  aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                                <div className="review-info-content mt-2">
                                    <h5>Quick and Easy</h5>
                                    <p className="mb-0">Build a highly interactive XR environment in just a couple of minutes.  </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <div className="review-info-wrap text-center rounded-custom d-flex flex-column aos-init aos-animate" data-aos="fade-up" data-aos-delay="150">
                                <div className="review-info-content mt-2">
                                    <h5>Highly Collaborative</h5>
                                    <p className="mb-0">Collaborate with other users in real-time to build your environment, your team's way. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <div className="review-info-wrap text-center rounded-custom d-flex flex-column aos-init aos-animate" data-aos="fade-up" data-aos-delay="150">
                                <div className="review-info-content mt-2">
                                    <h5>Secure Portal</h5>
                                    <p className="mb-0">We do not collect or store any data from our users, thus ensuring complete privacy.</p>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </section>

          <section class="feature-section bg-light-subtle ptb-60 pb-50">
            <div class="container">
                <div class="feature-color bg-primary-soft px-4 rounded-custom position-relative">
                    <div class="row align-items-center justify-content-between">
                        <div class="col-lg-5 col-md-12">
                            <div class="feature-content-wrap pe-lg-4 ptb-60 p-lg-0 mb-5 mb-lg-0">
                                <h2><span class="text-danger">Immersive content</span> with no-code</h2>
                                <p>Creating fully immersive content is no longer limited to people with strong coding skills. The Creator platform allows you to create highly interactive XR environments in just a couple of clicks.</p>
                                <a href="#" class="btn btn-danger mt-3">Get Started</a>
                            </div>
                        </div>
                        <div class="col-lg-7 col-md-12">
                            <div class="row align-items-center justify-content-center position-relative mt--100 z-2">
                                <div class="col-md-6">
                                    <div class="cta-card rounded-custom text-left shadow p-4 bg-white my-4">
                                        <div class="feature-icon d-inline-block bg-dark rounded mb-3">
                                            <i class="fas fa-file-alt text-white fa-2x"></i>
                                        </div>
                                        <h3 class="h5 fw-bold">Upload multiple files</h3>
                                        <p>You can upload 360<sup>0</sup> videos, 360<sup>0</sup> photos and even PDF files! So you can use any or all formats to enhance your XR environment.</p>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="cta-card rounded-custom text-left shadow p-4 bg-white my-4">
                                        <div class="feature-icon d-inline-block bg-danger rounded mb-3">
                                            <i class="fas fa-video text-white fa-2x"></i>
                                        </div>
                                        <h3 class="h5 fw-bold">Integrated Video Editor</h3>
                                        <p>A multi-purpose tool that allows you to edit your uploaded files and create a smooth digital walkthrough.</p>
                                    </div>
                                    <div class="cta-card rounded-custom text-left shadow p-4 bg-white my-4">
                                        <div class="feature-icon d-inline-block bg-success rounded mb-3">
                                            <i class="fas fa-link text-white fa-2x"></i>
                                        </div>
                                        <h3 class="h5 fw-bold">Hotspots and Links</h3>
                                        <p>Attach interactive hotspots and web links anywhere to increase user engagement. This allows you to create multiple user journeys as well.</p>
                                        
                                    </div>
                                </div>
                                <ul class="position-absolute animate-element parallax-element z--1" style={{transform: 'translate3d(0px, 0px, 0px)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden'}}>
                                    <li class="layer" data-depth="0.06" style={{position: 'relative', display: 'block', 'left': '0px', top: '0px', transform: 'translate3d(21.3997px, -1.8768px, 0px)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden'}}>
                                        <img src="assets/img/shape/shape-bg-3.svg" alt="shape" class="img-fluid" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section class="services-icon ndweserve bg-white-subtle ptb-40">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-9 col-md-10">
                        <div class="section-heading text-center">
                            <h2><span>Industries</span> we serve</h2>
                            <p>
                                Our expertise stems from our vast experience of catering to the requirements of our country's industry leaders. Their support has enabled us to create a top-of-the-class content creation tool.
                            </p>
                        </div>
                       
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-6 col-lg-3 col-md-6 p-0">
                        <div class="single-service p-lg-5 p-4 text-center mt-3 border-bottom border-end">
                            <div class="service-icon icon-center">
                                <img src="assets/img/creator/drugs.png" alt="service icon" width="65" height="65" />
                            </div>
                            <div class="service-info-wrap">
                                <h3 class="h6">Pharmaceutical</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-lg-3 col-md-6 p-0">
                        <div class="single-service p-lg-5 p-4 text-center mt-3 border-bottom border-end">
                            <div class="service-icon icon-center">
                                <img src="assets/img/creator/automotive.png" alt="service icon" width="65" height="65" />
                            </div>
                            <div class="service-info-wrap">
                                <h3 class="h6">Automotive</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-lg-3 col-md-6 p-0">
                        <div class="single-service p-lg-5 p-4 text-center mt-3 border-end border-bottom">
                            <div class="service-icon icon-center">
                                <img src="assets/img/creator/automation1.png" alt="service icon" width="65" height="65" />
                            </div>
                            <div class="service-info-wrap">
                                <h3 class="h6">Automation</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-lg-3 col-md-6 p-0">
                        <div class="single-service p-lg-5 p-4 mt-3 text-center border-bottom">
                            <div class="service-icon icon-center">
                                <img src="assets/img/creator/oligass.png" alt="service icon" width="65" height="65" />
                            </div>
                            <div class="feature-info-wrap">
                                <h3 class="h6">Oil & Gas</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-lg-3 col-md-6 p-0">
                        <div class="single-service p-lg-5 p-4 text-center border-end">
                            <div class="service-icon icon-center">
                                <img src="assets/img/creator/paintchemicalss.png" alt="service icon" width="65" height="65" />
                            </div>
                            <div class="feature-info-wrap">
                                <h3 class="h6">Paint & Chemicals</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-lg-3 col-md-6 p-0">
                        <div class="single-service p-lg-5 p-4 text-center border-end">
                            <div class="service-icon icon-center">
                                <img src="assets/img/creator/realestates.png" alt="service icon" width="65" height="65" />
                            </div>
                            <div class="feature-info-wrap">
                                <h3 class="h6">Real Estate</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-lg-3 col-md-6 p-0">
                        <div class="single-service p-lg-5 p-4 text-center border-end">
                            <div class="service-icon icon-center">
                                <img src="assets/img/creator/educations.png" alt="service icon" width="65" height="65" />
                            </div>
                            <div class="feature-info-wrap">
                                <h3 class="h6">Education</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-lg-3 col-md-6 p-0">
                        <div class="single-service p-lg-5 p-4 text-center">
                            <div class="service-icon icon-center">
                                <img src="assets/img/creator/destination.png" alt="service icon" width="65" height="65" />
                            </div>
                            <div class="feature-info-wrap">
                                <h3 class="h6">Tourism</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

         <section class="integration-section bg-light-subtle ptb-40">
            <div class="container">
                <div class="row align-items-center justify-content-center text-center">
                    <div class="col-lg-8 col-md-12">
                        <div class="section-heading">
                            <h2>We Collaborate with Top Companies</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                        </div>
                    </div>

                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="integration-wrapper position-relative w-100">
                            <ul class="position-absolute animate-element parallax-element shape-service z--1" style={{transform: 'translate3d(0px, 0px, 0px)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden'}}>
                                <li class="layer" data-depth="0.03" style={{position: 'relative', display: 'block', left: '0px', top: '0px', transform: 'translate3d(14.6077px, -11.5622px, 0px)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden'}}>
                                    <img src="assets/img/shape/dot-dot-wave-shape.svg" alt="shape" class="img-fluid position-absolute color-shape-3" />
                                </li>
                            </ul>
                            <ul class="integration-list list-unstyled mb-0">
                                <li>
                                    <div class="single-integration bg-white">
                                        <img src="assets/img/creator/clients/cairn.png" alt="integration" class="img-fluid" />
                                    </div>
                                </li>
                                <li>
                                    <div class="single-integration bg-white">
                                        <img src="assets/img/creator/clients/biocon.png" alt="integration" class="img-fluid" />
                                    </div>
                                </li>
                                <li>
                                    <div class="single-integration bg-white">
                                        <img src="assets/img/creator/clients/sunpharma.png" alt="integration" class="img-fluid" />
                                    </div>
                                </li>
                                <li>
                                    <div class="single-integration bg-white">
                                        <img src="assets/img/creator/clients/3.png" alt="integration" class="img-fluid" />
                                    </div>
                                </li>
                                <li>
                                    <div class="single-integration bg-white">
                                        <img src="assets/img/creator/clients/hmel.png" alt="integration" class="img-fluid" />
                                    </div>
                                </li>
                                <li>
                                    <div class="single-integration bg-white">
                                        <img src="assets/img/creator/clients/NEIT.png" alt="integration" class="img-fluid" />
                                    </div>
                                </li>
                                <li>
                                    <div class="single-integration bg-white">
                                        <img src="assets/img/creator/clients/nittrichi.png" alt="integration" class="img-fluid" />
                                    </div>
                                </li>
                                <li>
                                    <div class="single-integration bg-white">
                                        <img src="assets/img/creator/clients/8.png" alt="integration" class="img-fluid" />
                                    </div>
                                </li>
                                <li>
                                    <div class="single-integration bg-white">
                                        <img src="assets/img/creator/clients/9.png" alt="integration" class="img-fluid" />
                                    </div>
                                </li>
                                <li>
                                    <div class="single-integration bg-white">
                                        <img src="assets/img/creator/clients/hul-hindustan-u-limited.png" alt="integration" class="img-fluid" />
                                    </div>
                                </li>
                                <li>
                                    <div class="single-integration bg-white">
                                        <img src="assets/img/creator/clients/Indian_Oil.png" alt="integration" class="img-fluid" />
                                    </div>
                                </li>
                                <li>
                                    <div class="single-integration bg-white">
                                        <img src="assets/img/creator/clients/itc.png" alt="integration" class="img-fluid" />
                                    </div>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <Cta1/>
        <Footer/>


    </>
  )
}

export default Creator