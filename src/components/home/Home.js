import React from 'react'
import Banner from './Banner'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Cta1 from '../forms/Cta1'


function Home() {
  return (
    <>
        <Header/>
        <Banner/>
          <section className="why-us ptb-40 bg-light-subtle productfgt">
            <div className="container">
                <div className="row justify-content-center align-content-center">
                    <div className="col-md-10 col-lg-8">
                        <div className="section-heading text-center mb-4">
                            <h2>Simulanis XR Suite</h2>
                            <p>Out-of-the-box and differentiated offering, leveraging cutting-edge XR technologies, to jump-start your digital transformation initiatives across four fundamental categories</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <ul className="nav justify-content-center feature-tab-list mt-0" id="nav-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <a className="nav-link active" href="#tab-1" data-bs-toggle="tab" data-bs-target="#tab-1" role="tab" aria-selected="false" tabindex="-1">Learn</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" href="#tab-2" data-bs-toggle="tab" data-bs-target="#tab-2" role="tab" aria-selected="true">Assist</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" href="#tab-3" data-bs-toggle="tab" data-bs-target="#tab-3" role="tab" aria-selected="false" tabindex="-1">Create</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" href="#tab-4" data-bs-toggle="tab" data-bs-target="#tab-4" role="tab" aria-selected="false" tabindex="-1">Engage</a>
                            </li>
                        </ul>
                        <div className="tab-content bg-dark text-white rounded-custom" id="nav-tabContent">
                            <div className="tab-pane fade active show" id="tab-1" role="tabpanel">
                                <div className="row justify-content-center text-center p-50 pb-0">
                                    <div className="col-lg-9">
                                        <div className="feature-tab-info">
                                            <p className="lead">Built to scale immersive learning across multiple levels in any enterprise, the Simulanis Learning Suite offers a powerful alternative to conventional methods of learning and development.</p>
                                            <a href="#" className="btn btn-outline-danger text-decoration-none mt-3">Know more
                                                <i className="fas fa-arrow-right ms-2"></i></a>
                                        </div>
                                        <img src="assets/img/ra.png" alt="feature tab" className="img-fluid mt-2" />
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="tab-2" role="tabpanel">
                                <div className="row justify-content-center text-center p-50 pb-0">
                                    <div className="col-lg-9">
                                        <div className="feature-tab-info">
                                            <p className="lead">Connect remote workers with supervisors, get holographic assistance to operate, repair, or troubleshoot any equipment, and digitize work instructions using the Simulanis Assistance Suite.</p>
                                            <a href="/assist" className="btn btn-outline-danger text-decoration-none mt-3">Know more
                                                <i className="fas fa-arrow-right ms-2"></i></a>
                                        </div>
                                        <img src="assets/img/ra.png" alt="feature tab" className="img-fluid my-2" />
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="tab-3" role="tabpanel">
                                <div className="row justify-content-center text-center p-50 pb-0">
                                    <div className="col-lg-9">
                                        <div className="feature-tab-info">
                                            <p className="lead">Build immersive and engaging XR experiences using the Simulanis Creator Suite, a no-code, easy-to-use authoring platform.</p>
                                            <a href="/creator" className="btn btn-outline-danger text-decoration-none mt-3">Know more
                                                <i className="fas fa-arrow-right ms-2"></i></a>
                                        </div>
                                        <img src="assets/img/ipad-frame.png" alt="feature tab" className="img-fluid py-2" />
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="tab-4" role="tabpanel">
                                <div className="row justify-content-center text-center p-50 pb-0">
                                    <div className="col-lg-9">
                                        <div className="feature-tab-info">
                                            <p className="lead">Engage with your workforce in the Metaverse using the Simulanis Metaverse Suite and collaborate with multiple users in a single 'connected' virtual world.</p>
                                            <a href="/engage" className="btn btn-outline-danger text-decoration-none mt-3">Know more
                                                <i className="fas fa-arrow-right ms-2"></i></a>
                                        </div>
                                        <img src="assets/img/Metaverse/Avatars.png" alt="feature tab" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="tab-5" role="tabpanel">
                                <div className="row justify-content-center text-center p-50 pb-0">
                                    <div className="col-lg-8">
                                        <div className="feature-tab-info">
                                            <p className="lead">Phosfluorescently exploit backward-compatible deliverables and compelling interfaces. Quickly emerging manufactured products without high-quality interfaces.</p>
                                            <a href="#" className="btn btn-outline-danger text-decoration-none">Learn more</a>
                                        </div>
                                        <img src="assets/img/tab-feature-img-5.png" alt="feature tab" className="img-fluid mt-2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Use Cases */}
        <section className="services-section usecases ptb-40">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10">
                        <div className="section-heading text-center">
                            <h2>Use Cases</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="position-relative w-100">
                            <div className="feature-grid position-relative">
                                <div className="feature-card border-line-style px-5 my-4">
                                    <div className="feature-icon rounded bg-primary mb-32">
                                        <i className="fas fa-chart-simple  fa-2x text-white"></i>
                                    </div>
                                    <div className="feature-content">
                                        <h3 className="h5">Operational Efficiency</h3>
                                        <p>Achieve operational efficiency with immersive technologies at your disposal. Prepare your employees well for any exigencies at work.</p>
                                        <h6 className="mt-4">Included with...</h6>
                                        <ul className="list-unstyled mb-0">
                                            <li className="py-1"><i className="fas fa-check-circle me-2 text-primary"></i>Lorem Ipsum is </li>
                                            <li className="py-1"><i className="fas fa-check-circle me-2 text-primary"></i>Lorem Ipsum is simply</li>
                                            <li className="py-1"><i className="fas fa-check-circle me-2 text-primary"></i>Lorem Ipsum is simply</li>
                                        </ul>
                                    </div>
                                    <span className="border-line"></span>
                                </div>
                                <div className="feature-card border-line-style px-5 my-4">
                                    <div className="feature-icon rounded bg-danger mb-32">
                                        <i className="fas fa-video fa-2x text-white"></i>
                                    </div>
                                    <div className="feature-content">
                                        <h3 className="h5">Remote Assistance</h3>
                                        <p className="mb-0">Now share progress and interact with team members, clients and customers directly. Speed up the troubleshooting process.</p>
                                        <h6 className="mt-4">Included with...</h6>
                                        <ul className="list-unstyled mb-0">
                                            <li className="py-1"><i className="fas fa-check-circle me-2 text-primary"></i>Lorem Ipsum is </li>
                                            <li className="py-1"><i className="fas fa-check-circle me-2 text-primary"></i>Lorem Ipsum is simply</li>
                                            <li className="py-1"><i className="fas fa-check-circle me-2 text-primary"></i>Lorem Ipsum is simply</li>
                                        </ul>
                                    </div>
                                    <span className="border-line"></span>
                                </div>
                                <div className="feature-card border-line-style px-5 my-4">
                                    <div className="feature-icon rounded bg-dark mb-32">
                                        <i className="fas fa-helmet-safety fa-2x text-white"></i>
                                    </div>
                                    <div className="feature-content">
                                        <h3 className="h5">Health & Safety</h3>
                                        <p className="mb-0">Transform your health and safety at workplace by deploying top of the line technologies for various on-boarding processes and SOPs.</p>
                                        <h6 className="mt-4">Included with...</h6>
                                        <ul className="list-unstyled mb-0">
                                            <li className="py-1"><i className="fas fa-check-circle me-2 text-primary"></i>Lorem Ipsum is </li>
                                            <li className="py-1"><i className="fas fa-check-circle me-2 text-primary"></i>Lorem Ipsum is simply</li>
                                            <li className="py-1"><i className="fas fa-check-circle me-2 text-primary"></i>Lorem Ipsum is simply</li>
                                        </ul>
                                    </div>
                                    <span className="border-line"></span>
                                </div>
                                <div className="feature-card border-line-style px-5 my-4">
                                    <div className="feature-icon rounded bg-success mb-32">
                                        <i className="fas fa-industry fa-2x text-white"></i>
                                    </div>
                                    <div className="feature-content">
                                        <h3 className="h5">Smart Manufacturing</h3>
                                        <p className="mb-0">Transform your businesses digitally with meaningful KPIs & trackers in place. Reduce the time to go to market and scale effectively.</p>
                                        <h6 className="mt-4">Included with...</h6>
                                        <ul className="list-unstyled mb-0">
                                            <li className="py-1"><i className="fas fa-check-circle me-2 text-primary"></i>Lorem Ipsum is </li>
                                            <li className="py-1"><i className="fas fa-check-circle me-2 text-primary"></i>Lorem Ipsum is simply</li>
                                            <li className="py-1"><i className="fas fa-check-circle me-2 text-primary"></i>Lorem Ipsum is simply</li>
                                        </ul>
                                    </div>
                                    <span className="border-line"></span>
                                </div>
                                <div className="feature-card border-line-style px-5 my-4">
                                    <div className="feature-icon rounded bg-primary mb-32">
                                        <i className="fas fa-cog fa-2x text-white"></i>
                                    </div>
                                    <div className="feature-content">
                                        <h3 className="h5">Maintenance & Repair</h3>
                                        <p className="mb-0">Simplify your maintenance and repair jobs with digital assets. Reduce error rates and time to fix with the help of engaging visualization tools</p>
                                        <h6 className="mt-4">Included with...</h6>
                                        <ul className="list-unstyled mb-0">
                                            <li className="py-1"><i className="fas fa-check-circle me-2 text-primary"></i>Lorem Ipsum is </li>
                                            <li className="py-1"><i className="fas fa-check-circle me-2 text-primary"></i>Lorem Ipsum is simply</li>
                                            <li className="py-1"><i className="fas fa-check-circle me-2 text-primary"></i>Lorem Ipsum is simply</li>
                                        </ul>
                                    </div>
                                    <span className="border-line"></span>
                                </div>
                                <div className="feature-card border-line-style px-5 my-4">
                                    <div className="feature-icon rounded bg-warning mb-32">
                                        <i className="fas fa-regular fa-chalkboard-user text-white"></i>
                                    </div>
                                    <div className="feature-content">
                                        <h3 className="h5">Smart Training</h3>
                                        <p className="mb-0">Synergistically pursue accurate initiatives without economically sound
                                            imperatives. Professionally architect unique.</p>
                                        <h6 className="mt-4">Included with...</h6>
                                        <ul className="list-unstyled mb-0">
                                            <li className="py-1"><i className="fas fa-check-circle me-2 text-primary"></i>Lorem Ipsum is </li>
                                            <li className="py-1"><i className="fas fa-check-circle me-2 text-primary"></i>Lorem Ipsum is simply</li>
                                            <li className="py-1"><i className="fas fa-check-circle me-2 text-primary"></i>Lorem Ipsum is simply</li>
                                        </ul>
                                    </div>
                                    <span className="border-line"></span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div className="style-guide pb-40">
            <section className="feature-section">
                <div className="container-fluid">
                    <div className="feature-container mx-lg-5 position-relative bg-dark p-50 rounded-custom">
                        <img src="assets/img/feature-bg-1.jpg" alt="feature-bg" className="feature-bg-mockup position-absolute w-100 h-100 left-0 right-0 top-0 bottom-0 rounded-custom" />
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-lg-6">
                                    <div className="feature-bg-img-content position-relative z-5">
                                        <div className="section-heading">
                                            <h2>Celebrating a decade of creating impact</h2>
                                            <p>With an early headstart into the ecosystem, Simulanis has been at the forefront of creating an impact on workers and improving sustainablity outcomes.</p>
                                        </div>

                                        <ul className="list-unstyled d-flex flex-wrap list-two-col mt-4 mb-0">
                                            <li className="py-2">
                                                <h3 className="feature-number text-danger mb-2">20,000+</h3>
                                                <p>Workers impacted </p>
                                            </li>
                                            <li className="py-2">
                                                <h3 className="feature-number text-danger mb-2">15</h3>
                                                <p>Industrial sectors</p>
                                            </li>
                                            <li className="py-2">
                                                <h3 className="feature-number text-danger mb-2">500</h3>
                                                <p>Factories </p>
                                            </li>
                                            <li className="py-2">
                                                <h3 className="feature-number text-danger mb-2">1000+</h3>
                                                <p>Operations </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

         <section className="feature-section-two advantageben bg-light-subtle ptb-40">
            <div className="container">
                <div className="row align-items-center justify-content-lg-between justify-content-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="feature-content-wrap">
                            <div className="section-heading">
                                <h2>We are development experts on all technologies</h2>
                                <p>Quickly incubate functional channels with multidisciplinary architectures authoritatively
                                    fabricate formulate exceptional innovation.</p>
                            </div>
                            <ul className="list-unstyled mb-0">
                                <li className="d-flex align-items-start mb-4">
                                    <div className="icon-box bg-primary rounded me-4">
                                        <i className="fas fa-bezier-curve text-white"></i>
                                    </div>
                                    <div className="icon-content">
                                        <h3 className="h5">Pixel Perfect Design</h3>
                                        <p>Progressively foster enterprise-wide systems whereas equity invested
                                            web-readiness harness installed expedite virtual networks.
                                        </p>
                                    </div>
                                </li>
                                <li className="d-flex align-items-start mb-4">
                                    <div className="icon-box bg-danger rounded me-4">
                                        <i className="fas fa-fingerprint text-white"></i>
                                    </div>
                                    <div className="icon-content">
                                        <h3 className="h5">Unique &amp; Minimal Design</h3>
                                        <p>Dramatically administrate progressive metrics without error-free globally
                                            simplify standardized plagiarize technically sound.
                                        </p>
                                    </div>
                                </li>
                                <li className="d-flex align-items-start mb-4 mb-lg-0">
                                    <div className="icon-box bg-dark rounded me-4">
                                        <i className="fas fa-headset text-white"></i>
                                    </div>
                                    <div className="icon-content">
                                        <h3 className="h5">24/7 Free Online Support</h3>
                                        <p>Interactively whiteboard transparent testing procedures before
                                            bricks-and-clicks initiatives competencies.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-7">
                        <div className="feature-img-wrap">
                            <img src="assets/img/feature-hero-img.svg" alt="feature image" className="img-fluid rounded-custom" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="why-choose-us bg-light-subtle advantageben pt-0 pb-40">
            <div className="container">
                <div className="row justify-content-lg-between justify-content-center align-items-center">
                    <div className="col-lg-5 col-md-7 order-1 order-lg-0">
                        <div className="why-choose-img position-relative">
                            <img src="assets/img/feature-hero-img-2.svg" className="img-fluid" alt="duel-phone" />
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12 order-0 order-lg-1">
                        <div className="why-choose-content">
                            <div className="mb-32">
                                <h2>We run all kinds of services in form of software</h2>
                                <p>Conceptualize multimedia based ROI and wireless intellectual capital. Dramatically seize
                                    visionary technologies whereas interactive value. </p>
                            </div>
                            <ul className="list-unstyled d-flex flex-wrap list-two-col">
                                <li className="py-1"><i className="fas fa-check-circle me-2 text-primary"></i>Thought leadership</li>
                                <li className="py-1"><i className="fas fa-check-circle me-2 text-primary"></i>Personal branding</li>
                                <li className="py-1"><i className="fas fa-check-circle me-2 text-primary"></i>Modernized prospecting</li>
                                <li className="py-1"><i className="fas fa-check-circle me-2 text-primary"></i>Better win rates</li>
                                <li className="py-1"><i className="fas fa-check-circle me-2 text-primary"></i>Showcasing success</li>
                                <li className="py-1"><i className="fas fa-check-circle me-2 text-primary"></i>Sales compliance</li>
                                <li className="py-1"><i className="fas fa-check-circle me-2 text-primary"></i>Manage smartly</li>
                                <li className="py-1"><i className="fas fa-check-circle me-2 text-primary"></i>Communicate fast</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

         <section className="integration-section bg-light-subtle ptb-40">
            <div className="container">
                <div className="row align-items-center justify-content-lg-between">
                    <div className="col-lg-7 col-md-12">
                        <div className="section-heading">
                            <h2>Trusted Clients</h2>
                            <p>We have served more than 120+ enterprises across the globe using our solutions</p>
                        </div>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-12">
                        <div className="position-relative w-100" data-aos="fade-up" data-aos-delay="50">
                            <div className="integration-wrapper position-relative w-100 mb-4">
                                <ul className="integration-list list-unstyled mb-0">
                                    <li>
                                        <div className="single-integration bg-white">
                                            <img src="assets/img/clients/lupin.png" alt="integration" className="img-fluid" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="single-integration bg-white">
                                            <img src="assets/img/clients/zydus.png" alt="integration" className="img-fluid" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="single-integration bg-white">
                                            <img src="assets/img/clients/piramal.png" alt="integration" className="img-fluid" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="single-integration bg-white">
                                            <img src="assets/img/clients/granuals.png" alt="integration" className="img-fluid" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="single-integration bg-white">
                                            <img src="assets/img/clients/gsk.png" alt="integration" className="img-fluid" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="single-integration bg-white">
                                            <img src="assets/img/clients/jaj.png" alt="integration" className="img-fluid" />
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="integration-wrapper position-relative w-100 mb-4">
                                <ul className="integration-list list-unstyled mb-0">
                                    <li>
                                        <div className="single-integration bg-white">
                                            <img src="assets/img/clients/maruti.png" alt="integration" className="img-fluid" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="single-integration bg-white">
                                            <img src="assets/img/clients/hella.png" alt="integration" className="img-fluid" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="single-integration bg-white">
                                            <img src="assets/img/clients/nbc.png" alt="integration" className="img-fluid" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="single-integration bg-white">
                                            <img src="assets/img/clients/atlascopo.png" alt="integration" className="img-fluid" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="single-integration bg-white">
                                            <img src="assets/img/clients/mahindra.png" alt="integration" className="img-fluid" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="single-integration bg-white">
                                            <img src="assets/img/clients/hyundai.png" alt="integration" className="img-fluid" />
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="integration-wrapper position-relative w-100 mb-4">
                                <ul className="integration-list list-unstyled mb-0">
                                    <li>
                                        <div className="single-integration bg-white">
                                            <img src="assets/img/clients/hp.png" alt="integration" className="img-fluid" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="single-integration bg-white">
                                            <img src="assets/img/clients/iocl.png" alt="integration" className="img-fluid" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="single-integration bg-white">
                                            <img src="assets/img/clients/hmel.png" alt="integration" className="img-fluid" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="single-integration bg-white">
                                            <img src="assets/img/clients/cairn.png" alt="integration" className="img-fluid" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="single-integration bg-white">
                                            <img src="assets/img/clients/reliance.png" alt="integration" className="img-fluid" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="single-integration bg-white">
                                            <img src="assets/img/clients/ongc.png" alt="integration" className="img-fluid" />
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="integration-wrapper position-relative w-100 mb-4">
                                <ul className="integration-list list-unstyled mb-0">
                                    <li>
                                        <div className="single-integration bg-white">
                                            <img src="assets/img/clients/jgc.png" alt="integration" className="img-fluid" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="single-integration bg-white">
                                            <img src="assets/img/clients/honeywell.png" alt="integration" className="img-fluid" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="single-integration bg-white">
                                            <img src="assets/img/clients/dalmia.png" alt="integration" className="img-fluid" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="single-integration bg-white">
                                            <img src="assets/img/clients/godrej.png" alt="integration" className="img-fluid" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="single-integration bg-white">
                                            <img src="assets/img/clients/sterlite.png" alt="integration" className="img-fluid" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="single-integration bg-white">
                                            <img src="assets/img/clients/nsdc.png" alt="integration" className="img-fluid" />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="testimonial-section ptb-40">
            <div className="container">
                <div className="row justify-content-center align-content-center">
                    <div className="col-md-10 col-lg-8">
                        <div className="section-heading text-center" data-aos="fade-up">
                            <h2>What They Say About Us</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="position-relative w-100" data-aos="fade-up" data-aos-delay="50">
                            <div className="swiper testimonialSwiper">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="border border-2 p-5 rounded-custom position-relative">
                                            <img src="assets/img/testimonial/quotes-dot.svg" alt="quotes" width="100" className="img-fluid position-absolute left-0 top-0 z--1 p-3" />
                                            <div className="d-flex mb-32 align-items-center">
                                                <img src="assets/img/testimonial/1.jpg" className="img-fluid me-3 rounded" width="60" alt="user" />
                                                <div className="author-info">
                                                    <h6 className="mb-0">Mr.Rupan Oberoi</h6>
                                                    <small>Founder and CEO at Amaara Herbs</small>
                                                </div>
                                            </div>
                                            <blockquote>
                                                <h6>The Best Template You Got to Have it!</h6>
                                                Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce
                                                cross-media
                                            </blockquote>
                                            <ul className="review-rate mb-0 mt-2 list-unstyled list-inline">
                                                <li className="list-inline-item"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item"><i className="fas fa-star text-warning"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="border border-2 p-5 rounded-custom position-relative">
                                            <img src="assets/img/testimonial/quotes-dot.svg" alt="quotes" width="100" className="img-fluid position-absolute left-0 top-0 z--1 p-3" />
                                            <div className="d-flex mb-32 align-items-center">
                                                <img src="assets/img/testimonial/3.jpg" className="img-fluid me-3 rounded" width="60" alt="user" />
                                                <div className="author-info">
                                                    <h6 className="mb-0">Oberoi R.</h6>
                                                    <small>CEO at Herbs</small>
                                                </div>
                                            </div>
                                            <blockquote>
                                                <h6>Embarrassed by the First Version.</h6>
                                                Dynamically create innovative core competencies with effective best
                                                practices promote innovative infrastructures.
                                            </blockquote>
                                            <ul className="review-rate mb-0 mt-2 list-unstyled list-inline">
                                                <li className="list-inline-item"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item"><i className="fas fa-star text-warning"></i></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="swiper-slide">
                                        <div className="border border-2 p-5 rounded-custom position-relative">
                                            <img src="assets/img/testimonial/quotes-dot.svg" alt="quotes" width="100" className="img-fluid position-absolute left-0 top-0 z--1 p-3" />
                                            <div className="d-flex mb-32 align-items-center">
                                                <img src="assets/img/testimonial/2.jpg" className="img-fluid me-3 rounded" width="60" alt="user" />
                                                <div className="author-info">
                                                    <h6 className="mb-0">Mr.Rupan Oberoi</h6>
                                                    <small>Founder and CEO</small>
                                                </div>
                                            </div>
                                            <blockquote>
                                                <h6>Amazing Quiety template!</h6>
                                                Appropriately negotiate interactive niches rather than parallel strategic theme
                                                incubate
                                            </blockquote>
                                            <ul className="review-rate mb-0 mt-2 list-unstyled list-inline">
                                                <li className="list-inline-item"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item"><i className="fas fa-star text-warning"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="border border-2 p-5 rounded-custom position-relative">
                                            <img src="assets/img/testimonial/quotes-dot.svg" alt="quotes" width="100" className="img-fluid position-absolute left-0 top-0 z--1 p-3" />
                                            <div className="d-flex mb-32 align-items-center">
                                                <img src="assets/img/testimonial/4.jpg" className="img-fluid me-3 rounded" width="60" alt="user" />
                                                <div className="author-info">
                                                    <h6 className="mb-0">Joan Dho</h6>
                                                    <small>Founder and CTO</small>
                                                </div>
                                            </div>
                                            <blockquote>
                                                <h6>Best Template for SAAS Company!</h6>
                                                Dynamically create innovative core competencies with effective best
                                                practices promote innovative infrastructures.
                                            </blockquote>
                                            <ul className="review-rate mb-0 mt-2 list-unstyled list-inline">
                                                <li className="list-inline-item"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item"><i className="fas fa-star text-warning"></i></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="swiper-slide">
                                        <div className="border border-2 p-5 rounded-custom position-relative">
                                            <img src="assets/img/testimonial/quotes-dot.svg" alt="quotes" width="100" className="img-fluid position-absolute left-0 top-0 z--1 p-3" />
                                            <div className="d-flex mb-32 align-items-center">
                                                <img src="assets/img/testimonial/5.jpg" className="img-fluid me-3 rounded" width="60" alt="user" />
                                                <div className="author-info">
                                                    <h6 className="mb-0">Ranu Mondal</h6>
                                                    <small>Lead Developer</small>
                                                </div>
                                            </div>
                                            <blockquote>
                                                <h6>It is undeniably good!</h6>
                                                Rapidiously supply client-centric e-markets and maintainable processes
                                                progressively engineer
                                            </blockquote>
                                            <ul className="review-rate mb-0 mt-2 list-unstyled list-inline">
                                                <li className="list-inline-item"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item"><i className="fas fa-star text-warning"></i></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="swiper-nav-control">
                                <span className="swiper-button-next"></span>
                                <span className="swiper-button-prev"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="integration-section bg-light-subtle awardshome ptb-40">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-3">
                        <div className="integration-list-wrap">
                            <a href="#" className="integration-1" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Inaugrated by Hon’ble Vice President of India" data-bs-original-title="Inaugrated by Hon’ble Vice President of India">
                                <img src="assets/img/about/awards/Ministry_of_Defence_India.png" alt="integration" className="img-fluid rounded-circle" />
                            </a>
                            <a href="#" className="integration-2" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="National Entrepreneurship Award" data-bs-original-title="National Entrepreneurship Award">
                                <img src="assets/img/about/awards/neas.png" alt="integration" className="img-fluid rounded-circle" />
                            </a>
                            <a href="#" className="integration-3" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Fifth Pan IIM Award" data-bs-original-title="Fifth Pan IIM Award">
                                <img src="assets/img/about/awards/IIMC.png" alt="integration" className="img-fluid rounded-circle" />
                            </a>

                            <a href="#" className="integration-4" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Ministry of Petroleum & Natural Gas Award" data-bs-original-title="Ministry of Petroleum & Natural Gas Award">
                                <img src="assets/img/about/awards/Ministry_of_Petroleum_India.svg" alt="integration" className="img-fluid rounded-circle" />
                            </a>
                            <a href="#" className="integration-5" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Global Ed-Tech Startup Award" data-bs-original-title="Global Ed-Tech Startup Award">
                                <img src="assets/img/about/awards/gesa.png" alt="integration" className="img-fluid rounded-circle" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-5 col-12">
                        <div className="section-heading text-center my-5 my-lg-0 my-xl-0">
                            <h5 className="h6 text-primary">Credibility</h5>
                            <h2>We are proud to be India's most awarded XR-Metaverse company</h2>
                            <a href="/awards" className="mt-4 btn btn-primary">Take a look at our awards gallery</a>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="col-lg-4">
                            <div className="integration-list-wrap">
                                <a href="#" className="integration-7" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="KPMG" data-bs-original-title="KPMG Award">
                                    <img src="assets/img/about/awards/KPMG.png" alt="integration" className="img-fluid rounded-circle" />
                                </a>
                                <a href="#" className="integration-8" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="HDFC Award" data-bs-original-title="HDFC Award">
                                    <img src="assets/img/about/awards/HDFC.png" alt="integration" className="img-fluid rounded-circle" />
                                </a>
                                <a href="#" className="integration-9" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="NASSCOM CoE Award" data-bs-original-title="NASSCOM CoE Award">
                                    <img src="assets/img/about/awards/nasscom-augmented-reality.png" alt="integration" className="img-fluid rounded-circle" />
                                </a>

                                <a href="#" className="integration-10" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Startup Autobahn" data-bs-original-title="Startup Autobahn">
                                    <img src="assets/img/about/awards/autobahn.png" alt="integration" className="img-fluid rounded-circle" />
                                </a>
                                <a href="#" className="integration-11" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Sankalp Award" data-bs-original-title="Sankalp Award">
                                    <img src="assets/img/about/awards/sankalp-VR-augmented-reality-applications.png" alt="integration" className="img-fluid rounded-circle" />
                                </a>
                                <a href="#" className="integration-12" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Aegis Graham Bell Award" data-bs-original-title="Aegis Graham Bell Award">
                                    <img src="assets/img/about/awards/aegis-Augmented-reality.png" alt="integration" className="img-fluid rounded-circle" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Cta1/>

        <section class="feature-tab-section ptb-40 pb-0 bg-light-subtle">
            <div class="container">
                <div class="row justify-content-center align-content-center">
                    <div class="col-md-10 col-lg-8">
                        <div class="section-heading text-center mb-1">
                            <h2>Knowledge Base</h2>
                            <p>Explore the vast knowledge base we have collated over the years leveraging an early headstart within the domain.</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <ul class="nav justify-content-center feature-tab-list-2 mt-4" id="nav-tab-2" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" href="#blogs" data-bs-toggle="tab" data-bs-target="#blogs" role="tab" aria-selected="false">
                                    Blogs
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#casestudy" data-bs-toggle="tab" data-bs-target="#casestudy" role="tab" aria-selected="false">
                                    Case studies
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#usecase" data-bs-toggle="tab" data-bs-target="#usecase" role="tab" aria-selected="false">
                                    Use cases
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#inthenews" data-bs-toggle="tab" data-bs-target="#inthenews" role="tab" aria-selected="false">
                                    In the news
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="https://www.youtube.com/c/SimulanisSolutions/videos" target="_blank" >
                                    Videos
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="tab-content" id="nav-tabContent-2">
                <div class="tab-pane fade pt-4 active show" id="blogs" role="tabpanel">
                    <div class="moviebox">
                        <div class="moviecard">
                            <img class="thumb" src="assets/img/blogimg/remote-work.jpg" alt="" />
                            <img class="hero" src="assets/img/blogimg/remote-work.jpg" alt="" />
                            <div class="movietext"> 
                                <a href="/blogs">
                                <p><i class="fa fa-plus"></i></p>
                                Pharmaceutical</a>
                            </div>
                        </div>
                        <div class="moviecard">
                            <img class="thumb" src="assets/img/blogimg/automotive.jpg" alt="" />
                            <img class="hero" src="assets/img/blogimg/automotive.jpg" alt="" />
                            <div class="movietext">
                                <a href="/blogs">
                                <p><i class="fa fa-plus"></i></p>
                                Automotive</a>
                            </div>
                        </div>
                        <div class="moviecard">
                            <img class="thumb" src="assets/img/blogimg/manufacturing.jpg" alt="" />
                            <img class="hero" src="assets/img/blogimg/manufacturing.jpg" alt="" />
                            <div class="movietext">
                                <a href="/blogs">
                                <p><i class="fa fa-plus"></i></p>
                                    Oil & Gas
                                </a>
                            </div>
                        </div>
                        <div class="moviecard">
                            <img class="thumb" src="assets/img/blogimg/tablemachine.jpg" alt="" />
                            <img class="hero" src="assets/img/blogimg/tablemachine.jpg" alt="" />
                            <div class="movietext">
                                <a href="/blogs">
                                    <p><i class="fa fa-plus"></i></p>
                                    Automation
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade pt-4" id="casestudy" role="tabpanel">
                    <div class="moviebox">
                        <div class="moviecard">
                            <img class="thumb" src="assets/img/blogimg/plant.jpg" alt="" />
                            <img class="hero" src="assets/img/blogimg/plant.jpg" alt="" />
                            <div class="movietext"> 
                            <a href="#">
                                <p><i class="fa fa-plus"></i></p>
                                Compression Machine</a>
                            </div>
                        </div>
                        <div class="moviecard">
                            <img class="thumb" src="assets/img/blogimg/r_ban2.png" alt="" />
                            <img class="hero" src="assets/img/blogimg/r_ban2.png" alt="" />
                            <div class="movietext">
                            
                            <a href="#">
                            <p><i class="fa fa-plus"></i></p>
                            API Dispensing</a>
                            </div>
                        </div>
                        <div class="moviecard">
                            <img class="thumb" src="assets/img/blogimg/training.jpg" alt="" />
                            <img class="hero" src="assets/img/blogimg/training.jpg" alt="" />
                            <div class="movietext">
                            <a href="#">
                            <p><i class="fa fa-plus"></i></p>
                            Industrial Training</a>
                            </div>
                        </div>
                        <div class="moviecard">
                            <img class="thumb" src="assets/img/blogimg/plantd.jpg" alt="" />
                            <img class="hero" src="assets/img/blogimg/plantd.jpg" alt="" />
                            <div class="movietext">
                            <a target="_blank" href="#">
                            <p><i class="fa fa-plus"></i></p>Injection Moulding</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade pt-4" id="usecase" role="tabpanel">
                    <div class="moviebox">
                        <div class="moviecard">
                            <img class="thumb" src="assets/img/blogimg/factory_workshop.jpg" alt="" />
                            <img class="hero" src="assets/img/blogimg/factory_workshop.jpg" alt="" />
                            <div class="movietext"> 
                            <a href="#">
                                <p><i class="fa fa-plus"></i></p>
                                Operational Efficiency</a>
                            </div>
                        </div>
                        <div class="moviecard">
                            <img class="thumb" src="assets/img/blogimg/r_ban2.png" alt="" />
                            <img class="hero" src="assets/img/blogimg/r_ban2.png" alt="" />
                            <div class="movietext">
                            
                            <a href="#">
                            <p><i class="fa fa-plus"></i></p>
                            Remote Assistance</a>
                            </div>
                        </div>
                        <div class="moviecard">
                            <img class="thumb" src="assets/img/blogimg/tablemachine.jpg" alt="" />
                            <img class="hero" src="assets/img/blogimg/tablemachine.jpg" alt="" />
                            <div class="movietext">
                            <a href="#">
                            <p><i class="fa fa-plus"></i></p>
                            Health & Safety</a>
                            </div>
                        </div>
                        <div class="moviecard">
                            <img class="thumb" src="assets/img/blogimg/plantd.jpg" alt="" />
                            <img class="hero" src="assets/img/blogimg/plantd.jpg" alt="" />
                            <div class="movietext">
                            <a target="_blank" href="#">
                            <p><i class="fa fa-plus"></i></p>Smart Manufacturing</a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="tab-pane fade pt-60" id="inthenews" role="tabpanel">
                    <div class="moviebox">
                        <div class="moviecard">
                            <img class="thumb" src="assets/img/blogimg/factory_workshop.jpg" alt="" />
                            <img class="hero" src="assets/img/blogimg/factory_workshop.jpg" alt="" />
                            <div class="movietext"> 
                            <a href="#">
                                <p><i class="fa fa-plus"></i></p>
                                AR: Moving the Real World</a>
                            </div>
                        </div>
                        <div class="moviecard">
                            <img class="thumb" src="assets/img/blogimg/r_ban2.png" alt="" />
                            <img class="hero" src="assets/img/blogimg/r_ban2.png" alt="" />
                            <div class="movietext">
                            
                            <a href="./blog/augmented-reality-and-the-automotive-industry–a-value-creation-opportunity-not-to-be-missed.php">
                            <p><i class="fa fa-plus"></i></p>
                                AR-VR-MR applications for Industrial Training </a>
                            </div>
                        </div>
                        <div class="moviecard">
                            <img class="thumb" src="assets/img/blogimg/tablemachine.jpg" alt="" />
                            <img class="hero" src="assets/img/blogimg/tablemachine.jpg" alt="" />
                            <div class="movietext">
                            <a href="./blog/augmented-reality-and-virtual-reality-(AR-VR)-in-manufacturing-Industry.php">
                            <p><i class="fa fa-plus"></i></p>
                            Why an AR/VR company won a major impact award?</a>
                            </div>
                        </div>
                        <div class="moviecard">
                            <img class="thumb" src="assets/img/blogimg/plantd.jpg" alt="" />
                            <img class="hero" src="assets/img/blogimg/plantd.jpg" alt="" />
                            <div class="movietext">
                            <a target="_blank" href="#">
                            <p><i class="fa fa-plus"></i></p>VR startup Simulanis raises $500K in pre-Series A round</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

          <Footer/>

    </>
  )
}

export default Home