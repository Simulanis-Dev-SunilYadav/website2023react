import React from 'react'
import ProductivityHeader from '../../../common/ProductivityHeader'
import Header from '../../../common/Header'
import Footer from '../../../common/Footer'
import { Link } from 'react-router-dom'

function Productivity() {
  return (
    <>
        <ProductivityHeader/>
         <section class="hero-section pt-200 pb-60 text-white bg-gradient position-relative produtivitybannerbg">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-7 col-md-10">
                        <div class="hero-content-wrap">
                            <h1 class="fw-bold display-5">Looking For Industry 4.0 Productivity Tool?</h1>
                            <p class="lead">Simulanis Productivity Suite is a cross-platform industry 4.0 productivity toolbox that provides quick and effective assistance</p>
                            <div class="action-btn mt-5 align-items-center d-block d-sm-flex d-lg-flex d-md-flex">
                                <a href="#" class="btn btn-danger me-3">Request For Demo</a>
                                <a href="https://www.youtube.com/watch?v=wA8G1K9mRdk" class="text-decoration-none popup-youtube d-inline-flex align-items-center watch-now-btn mt-3 mt-lg-0 mt-md-0"> <i
                                        class="fas fa-play"></i> Watch Demo </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5 col-md-8 mt-5">
                        <div class="hero-img position-relative circle-shape-images">
                            <img src="assets/img/ra.png" alt="hero img" class=" img-fluid z-5" />
                        </div>
                    </div>
                </div>
            </div>
        </section> 

       <section class="digi-why ptb-40">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-12">
                        <div class="digi-why-left">
                            <img src="assets/img/realwe-v2.png" class="img-fluid" alt="Girl" />
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="digi-why-right">
                            <div>
                                <span class="span-arrow">Productivity</span>
                                <img src="assets/img/arro-right.png"  class="img-fluid arrow" alt="arrow" />
                            </div>
                            <h2>AR-MR Proficiency</h2>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
                            </p>
                            <div>
                                <ul class="list-unstyled mb-0 mt-3">
                                    <li class="d-flex p-3 align-items-center bg-white">
                                        <div>
                                            <h4 class="mb-0 number">36%</h4>
                                            <span>Decrease in manufacturing time</span>
                                        </div>
                                    </li>
                                    <li class="pe-4 d-flex p-3 align-items-center bg-white">
                                        <div>
                                            <h4 class="mb-0 number">42%</h4>
                                            <span>Increase in profitability</span>
                                        </div>
                                    </li>
                                    <li class="pe-4 d-flex p-3 align-items-center bg-white">
                                        <div>
                                            <h4 class="mb-0 number">20%</h4>
                                            <span> Decrease in time to decision</span>
                                        </div>
                                    </li>
                                    <li class="pe-4 d-flex p-3 align-items-center bg-white">
                                        <div>
                                            <h4 class="mb-0 number">99%</h4>
                                            <span>Customer Satisfaction</span>
                                        </div>
                                    </li>
                                    <li class="pe-4 d-flex p-3 align-items-center bg-white">
                                        <div>
                                            <h4 class="mb-0 number">34%</h4>
                                            <span>Decrease in production time</span>
                                        </div>
                                    </li>
                                    <li class="pe-4 d-flex p-3 align-items-center bg-white">
                                        <div>
                                            <h4 class="mb-0 number">36%</h4>
                                            <span>Decrease in maintenance costs</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="feature-tab-section ptb-40 bg-light-subtle">
            <div class="container">
                <div class="row justify-content-center align-content-center">
                    <div class="col-md-10 col-lg-7">
                        <div class="section-heading text-center">
                            <h2>Simulanis Productivity Suite</h2>
                            <p>There are 2 industry 4.0 AR and MR based solutions which you should check out.</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <ul class="nav justify-content-center feature-tab-list-2 mb-0" id="nav-tab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <a class="nav-link active" href="#tab-1" data-bs-toggle="tab" data-bs-target="#tab-1" role="tab" aria-selected="true">
                                   Simulanis Remote Assist
                                </a>
                            </li>

                            <li class="nav-item" role="presentation">
                                <a class="nav-link" href="#tab-2" data-bs-toggle="tab" data-bs-target="#tab-2" role="tab" aria-selected="false" tabindex="-1">
                                   Simulanis Dynamic Assist
                                </a>
                            </li>
                        </ul>
                        <div class="tab-content" id="nav-tabContent">
                            <div class="tab-pane fade pt-60 active show" id="tab-1" role="tabpanel">
                                <div class="row align-items-center">
                                    <div class="col-lg-6">
                                        <div class="feature-tab-info">
                                            <h3>Simulanis Remote Assist</h3>
                                            <p>Simulanis Remote Assist is a cross-platform industry 4.0 productivity application, equipped with a plethora of digital features that provide quick and effective assistance for on-site workers to efficiently perform their tasks.</p>
                                            <div class="d-flex py-2">
                                                <a href="#" class="apdownlod read-more-link">
                                                    <img cl src="assets/img/android.png" alt="" />
                                                    <span>Download for Android</span>
                                                </a>
                                                <a href="#" class="apdownlod read-more-link">
                                                    <img src="assets/img/window.png" alt="" />
                                                    <span>Download for Windows</span>
                                                </a>
                                            </div>
                                            <Link to="/remote-assist" class="btn btn-outline-danger read-more-link text-decoration-none mt-4">Know More
                                                <i class="fas fa-arrow-right ms-2"></i></Link>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <img src="assets/img/banner2.jpg" alt="feature tab" class="img-fluid productivityimg mt-4 mt-lg-0 mt-xl-0" />
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade pt-60" id="tab-2" role="tabpanel">
                                <div class="row justify-content-center align-items-center justify-content-around">
                                    <div class="col-lg-6">
                                        <img src="assets/img/dynamicassist.jpg" alt="feature tab" class="img-fluid productivityimg mb-4 mb-lg-0 mb-xl-0" />
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="feature-tab-info">
                                            <h3>Simulanis Dynamic Assist</h3>
                                            <p>Simulanis Dynamic Assist is an AR based industry 4.0 productivity application with MR based digital workflow that helps reducing the carbon footprint with stepwise while perfoming industrial activities.</p>
                                            <a href="/dynamic-assist" class="btn btn-outline-danger read-more-link text-decoration-none mt-3">Know More
                                                <i class="fas fa-arrow-right ms-2"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade pt-60" id="tab-3" role="tabpanel">
                                <div class="row justify-content-center align-items-center justify-content-around">
                                    <div class="col-lg-5">
                                        <div class="feature-tab-info">
                                            <h3>Advanced Technology</h3>
                                            <p>Intrinsicly incentivize corporate synergy with accurate meta-services.
                                                Rapidiously parallel task bricks-and-clicks. Leadership skills with
                                                revolutionary convergence conveniently develop.</p>
                                            <p>Continually expedite business systems without premier testing procedures
                                                architect principle-centered e-tailers for progressive maintain open-source solutions. </p>
                                            <a href="#" class="read-more-link text-decoration-none mt-4 d-block">Know More About Us
                                                <i class="fas fa-arrow-right ms-2"></i></a>
                                        </div>
                                    </div>
                                    <div class="col-lg-5">
                                        <img src="assets/img/screen/widget-11.png" alt="feature tab" class="img-fluid mt-4 mt-lg-0 mt-xl-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="process-section bg-white-subtle ptb-40">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8 col-md-12">
                        <div class="section-heading text-center aos-init aos-animate" data-aos="fade-up">
                            <h2>Use Cases</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="setup-process-wrap">
                            <ul class="setup-process-list list-unstyled text-center mb-0">
                                <li class="setup-process-item py-4 px-2 aos-init aos-animate" data-aos="fade-up">
                                    <div class="setup-process-icon mb-1">
                                        <img src="assets/img/productivityicon/inspection.png" alt="" />
                                    </div>
                                    <h6 class="mt-2 mb-0">Inspection</h6>
                                </li>
                                <li class="setup-process-item py-4 px-2 aos-init aos-animate" data-aos="fade-up" data-aos-delay="50">
                                    <div class="setup-process-icon mb-1">
                                        <img src="assets/img/productivityicon/maintenance.png" alt="" />
                                    </div>
                                    <h6 class="mt-2 mb-0">Maintenance</h6>
                                </li>
                                <li class="setup-process-item py-4 px-2 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                                    <div class="setup-process-icon mb-1">
                                        <img src="assets/img/productivityicon/operations.png" alt="" />
                                    </div>
                                    <h6 class="mt-2 mb-0">Operations</h6>
                                </li>
                                <li class="setup-process-item py-4 px-2 aos-init aos-animate" data-aos="fade-up" data-aos-delay="150">
                                    <div class="setup-process-icon mb-1">
                                         <img src="assets/img/productivityicon/training.png" alt="" />
                                    </div>
                                    <h6 class="mt-2 mb-0">Trainings</h6>
                                </li>
                                <li class="setup-process-item py-4 px-2 aos-init aos-animate" data-aos="fade-up" data-aos-delay="150">
                                    <div class="setup-process-icon mb-1">
                                        <img src="assets/img/productivityicon/audit.png" alt="" />
                                    </div>
                                    <h6 class="mt-2 mb-0">Audit</h6>
                                </li>
                                <li class="setup-process-item py-4 px-2 aos-init aos-animate" data-aos="fade-up" data-aos-delay="150">
                                    <div class="setup-process-icon mb-1">
                                        <img src="assets/img/productivityicon/database.png" alt="" />
                                    </div>
                                    <h6 class="mt-2 mb-0">Database</h6>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="testimonial-section ptb-40 bg-light-subtle">
            <div class="container">
                <div class="row justify-content-center align-content-center">
                    <div class="col-md-10 col-lg-8">
                        <div class="section-heading text-center" data-aos="fade-up">
                            <h2>What They Say About Us</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="position-relative w-100" data-aos="fade-up" data-aos-delay="50">
                            <div class="swiper testimonialSwiper">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        <div class="border border-2 p-5 rounded-custom position-relative">
                                            <img src="assets/img/testimonial/quotes-dot.svg" alt="quotes" width="100" class="img-fluid position-absolute left-0 top-0 z--1 p-3" />
                                            <div class="d-flex mb-32 align-items-center">
                                                <img src="assets/img/testimonial/1.jpg" class="img-fluid me-3 rounded" width="60" alt="user" />
                                                <div class="author-info">
                                                    <h6 class="mb-0">Mr.Rupan Oberoi</h6>
                                                    <small>Founder and CEO at Amaara Herbs</small>
                                                </div>
                                            </div>
                                            <blockquote>
                                                <h6>The Best Template You Got to Have it!</h6>
                                                Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce
                                                cross-media infrastructures rather than ethical
                                            </blockquote>
                                            <ul class="review-rate mb-0 mt-2 list-unstyled list-inline">
                                                <li class="list-inline-item"><i class="fas fa-star text-warning"></i></li>
                                                <li class="list-inline-item"><i class="fas fa-star text-warning"></i></li>
                                                <li class="list-inline-item"><i class="fas fa-star text-warning"></i></li>
                                                <li class="list-inline-item"><i class="fas fa-star text-warning"></i></li>
                                                <li class="list-inline-item"><i class="fas fa-star text-warning"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="border border-2 p-5 rounded-custom position-relative">
                                            <img src="assets/img/testimonial/quotes-dot.svg" alt="quotes" width="100" class="img-fluid position-absolute left-0 top-0 z--1 p-3" />
                                            <div class="d-flex mb-32 align-items-center">
                                                <img src="assets/img/testimonial/3.jpg" class="img-fluid me-3 rounded" width="60" alt="user" />
                                                <div class="author-info">
                                                    <h6 class="mb-0">Oberoi R.</h6>
                                                    <small>CEO at Herbs</small>
                                                </div>
                                            </div>
                                            <blockquote>
                                                <h6>Embarrassed by the First Version.</h6>
                                                Dynamically create innovative core competencies with effective best
                                                practices promote innovative infrastructures.
                                            </blockquote>
                                            <ul class="review-rate mb-0 mt-2 list-unstyled list-inline">
                                                <li class="list-inline-item"><i class="fas fa-star text-warning"></i></li>
                                                <li class="list-inline-item"><i class="fas fa-star text-warning"></i></li>
                                                <li class="list-inline-item"><i class="fas fa-star text-warning"></i></li>
                                                <li class="list-inline-item"><i class="fas fa-star text-warning"></i></li>
                                                <li class="list-inline-item"><i class="fas fa-star text-warning"></i></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div class="swiper-slide">
                                        <div class="border border-2 p-5 rounded-custom position-relative">
                                            <img src="assets/img/testimonial/quotes-dot.svg" alt="quotes" width="100" class="img-fluid position-absolute left-0 top-0 z--1 p-3" />
                                            <div class="d-flex mb-32 align-items-center">
                                                <img src="assets/img/testimonial/2.jpg" class="img-fluid me-3 rounded" width="60" alt="user" />
                                                <div class="author-info">
                                                    <h6 class="mb-0">Mr.Rupan Oberoi</h6>
                                                    <small>Founder and CEO</small>
                                                </div>
                                            </div>
                                            <blockquote>
                                                <h6>Amazing Quiety template!</h6>
                                                Appropriately negotiate interactive niches rather than parallel strategic theme
                                                incubate premium total linkage areas.
                                            </blockquote>
                                            <ul class="review-rate mb-0 mt-2 list-unstyled list-inline">
                                                <li class="list-inline-item"><i class="fas fa-star text-warning"></i></li>
                                                <li class="list-inline-item"><i class="fas fa-star text-warning"></i></li>
                                                <li class="list-inline-item"><i class="fas fa-star text-warning"></i></li>
                                                <li class="list-inline-item"><i class="fas fa-star text-warning"></i></li>
                                                <li class="list-inline-item"><i class="fas fa-star text-warning"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="border border-2 p-5 rounded-custom position-relative">
                                            <img src="assets/img/testimonial/quotes-dot.svg" alt="quotes" width="100" class="img-fluid position-absolute left-0 top-0 z--1 p-3" />
                                            <div class="d-flex mb-32 align-items-center">
                                                <img src="assets/img/testimonial/4.jpg" class="img-fluid me-3 rounded" width="60" alt="user" />
                                                <div class="author-info">
                                                    <h6 class="mb-0">Joan Dho</h6>
                                                    <small>Founder and CTO</small>
                                                </div>
                                            </div>
                                            <blockquote>
                                                <h6>Best Template for SAAS Company!</h6>
                                                Dynamically create innovative core competencies with effective best
                                                practices promote innovative infrastructures.
                                            </blockquote>
                                            <ul class="review-rate mb-0 mt-2 list-unstyled list-inline">
                                                <li class="list-inline-item"><i class="fas fa-star text-warning"></i></li>
                                                <li class="list-inline-item"><i class="fas fa-star text-warning"></i></li>
                                                <li class="list-inline-item"><i class="fas fa-star text-warning"></i></li>
                                                <li class="list-inline-item"><i class="fas fa-star text-warning"></i></li>
                                                <li class="list-inline-item"><i class="fas fa-star text-warning"></i></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div class="swiper-slide">
                                        <div class="border border-2 p-5 rounded-custom position-relative">
                                            <img src="assets/img/testimonial/quotes-dot.svg" alt="quotes" width="100" class="img-fluid position-absolute left-0 top-0 z--1 p-3" />
                                            <div class="d-flex mb-32 align-items-center">
                                                <img src="assets/img/testimonial/5.jpg" class="img-fluid me-3 rounded" width="60" alt="user" />
                                                <div class="author-info">
                                                    <h6 class="mb-0">Ranu Mondal</h6>
                                                    <small>Lead Developer</small>
                                                </div>
                                            </div>
                                            <blockquote>
                                                <h6>It is undeniably good!</h6>
                                                Rapidiously supply client-centric e-markets and maintainable processes
                                                progressively engineer
                                            </blockquote>
                                            <ul class="review-rate mb-0 mt-2 list-unstyled list-inline">
                                                <li class="list-inline-item"><i class="fas fa-star text-warning"></i></li>
                                                <li class="list-inline-item"><i class="fas fa-star text-warning"></i></li>
                                                <li class="list-inline-item"><i class="fas fa-star text-warning"></i></li>
                                                <li class="list-inline-item"><i class="fas fa-star text-warning"></i></li>
                                                <li class="list-inline-item"><i class="fas fa-star text-warning"></i></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="swiper-nav-control">
                                <span class="swiper-button-next"></span>
                                <span class="swiper-button-prev"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="cta-subscribe bg-dark text-white ptb-40 position-relative overflow-hidden">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8 col-md-10">
                        <div class="subscribe-info-wrap text-center position-relative z-2">
                            <div class="section-heading" data-aos="fade-up">
                                <h4 class="h5 text-danger">Let's Try! Get Free Support</h4>
                                <h2>Start Your 14-Day Free Trial</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            </div>
                            <div class="form-block-banner mw-60 m-auto mt-5" data-aos="fade-up" data-aos-delay="50">
                                <a href="#" class="btn btn-primary">Contact with Us</a>
                                <a href="https://www.youtube.com/watch?v=wA8G1K9mRdk" class="text-decoration-none popup-youtube d-inline-flex align-items-center watch-now-btn ms-lg-3 ms-md-3 mt-3 mt-lg-0"> <i
                                        class="fas fa-play"></i> Watch Demo </a>
                            </div>
                            <ul class="nav justify-content-center subscribe-feature-list mt-4" data-aos="fade-up" data-aos-delay="100">
                                <li class="nav-item">
                                    <span><i class="far fa-check-circle text-primary me-2"></i>Free 14-day trial</span>
                                </li>
                                <li class="nav-item">
                                    <span><i class="far fa-check-circle text-primary me-2"></i>No credit card required</span>
                                </li>
                                <li class="nav-item">
                                    <span><i class="far fa-check-circle text-primary me-2"></i>Support 24/7</span>
                                </li>
                                <li class="nav-item">
                                    <span><i class="far fa-check-circle text-primary me-2"></i>Cancel anytime</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="bg-circle rounded-circle circle-shape-3 position-absolute bg-dark-light left-5"></div>
                <div class="bg-circle rounded-circle circle-shape-1 position-absolute bg-danger right-5"></div>
            </div>
        </section>

        <Footer/>

    </>
  )
}

export default Productivity