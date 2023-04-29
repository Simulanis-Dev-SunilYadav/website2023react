import React from 'react'
import Header from '../common/Header'
import '../../assets/css/career.css'
import Footer from '../common/Footer'

function Career() {
  return (
    <>
        <Header/>

        <section className="page-header position-relative overflow-hidden ptb-120 careerbg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-12">
                        <h1 className="display-5 fw-bold">Career</h1>
                        <p className="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                        <a href="#open-positions" className="btn btn-sm btn-danger">Open Positions</a>
                    </div>
                </div>
            </div>
        </section>

        <section className="mk-business bg-light-subtle ptb-60 pb-40">
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-xl-6">
                        <div className="mk-business-pr position-relative pe-3">
                            <img src="assets/img/shape/dot-big-square.svg" alt="not found" className="position-absolute mk-doted-lg " />
                            <img src="assets/img/career/career.JPG" alt="laptop" className="img-fluid rounded-4" />
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="mk-business-content ps-5">
                            <h3 className="mk-heading mb-3">India’s Most Awarded XR Company.</h3>
                            <p className="mb-30">Simulanis is a multi-award winning XR technology company dedicated to delivering excellence in creating some of the most engaging, interactive and immersive AR-VR applications.</p>
                            <ul className="mk-business-reports p-0">
                                <li className="d-flex align-items-start mk-bg-secondary">
                                    <span className="icon-wrapper d-inline-flex align-items-center justify-content-center rounded flex-shrink-0">
                                      <img src="assets/img/career/mission1.png" alt="" />

                                  </span>
                                    <div className="ms-4">
                                        <h6 className="mk-heading mb-2">Mission</h6>
                                        <p className="mb-0">“Empowering individuals to safely enhance their skills and driving organizations to increase operational efficiency by leveraging cutting-edge XR technologies across hazardous manufacturing-based industries.”</p>
                                    </div>
                                </li>
                                <li className="d-flex align-items-start mk-bg-primary">
                                    <span className="icon-wrapper d-inline-flex align-items-center justify-content-center rounded flex-shrink-0 bg-mk-primary">
                                       <img src="assets/img/career/vision.png" alt="" />

                                  </span>
                                    <div className="ms-4">
                                        <h6 className="mk-heading mb-2">Vision</h6>
                                        <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="services-section career ptb-40">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10">
                        <div className="section-heading text-center">
                            <h2>Boost your career</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="feature-grid">
                            <div className="feature-card border border-light border-2 bg-white rounded-custom p-4">
                                <div className="careericondf">
                                    <img src="assets/img/career/wellness.png" alt="" />
                                </div>
                                <div className="feature-content">
                                    <h3 className="h5">Health + Wellness</h3>
                                    <p>Maintain a great work-life balance benefits include health insurance, health checks ups and more</p>
                                </div>
                            </div>
                            <div className="feature-card border border-light border-2 bg-white rounded-custom p-4">
                                <div className="careericondf">
                                    <img src="assets/img/career/salary.png" alt="" />
                                </div>
                                <div className="feature-content">
                                    <h3 className="h5">Remuneration</h3>
                                    <p>We are leaders in the industry, you can count on us when you look forward to growing your career.</p>
                                </div>
                            </div>
                            <div className="feature-card border border-light border-2 bg-white rounded-custom p-4">
                                <div className="careericondf">
                                    <img src="assets/img/career/programmer.png" alt="" />
                                </div>
                                <div className="feature-content">
                                    <h3 className="h5">Awesome Customers</h3>
                                    <p>We cater to more than 150 medium and large-scale industries in multiple domains.</p>
                                </div>
                            </div>
                            <div className="feature-card border border-light border-2 bg-white rounded-custom p-4">
                                <div className="careericondf">
                                    <img src="assets/img/career/online-learning.png" alt="" />
                                </div>
                                <div className="feature-content">
                                    <h3 className="h5">Learning Culture</h3>
                                    <p>Learning never stops at Simulanis, inclusive teams and an environment to foster learning.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="open-positions" className="open-jobs bg-light-subtle ptb-40 pb-4">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-5 col-md-12">
                        <div className="section-heading">
                            <h4 className="h5 text-primary">Our Jobs</h4>
                            <h2>Current Available Positions at Simulanis</h2>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum has been the industry's standard dummy text ever  </p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-12">
                        <a href="/career-detail" className="text-decoration-none mt-4 mt-xl-0 mt-lg-0 single-open-job p-5 mb-4 bg-dark text-white d-block rounded-custom">
                            <div className="d-flex justify-content-between align-items-center">
                                <span className="job-time h-6 mb-2"><i className="fas fa-briefcase me-2"></i> <strong>WFO
                                        - Full Time</strong></span>
                                <span className="badge px-3 py-2 bg-custom-light rounded-pill small">Designer</span>
                            </div>
                            <h3 className="h5">Jr Frontend Developer</h3>
                            <p className="mb-0">HTML, CSS, Javascript, ReactJs</p>
                            <ul className="job-info-list list-inline list-unstyled text-muted">
                                <li className="list-inline-item text-light"><span className="fas fa-map-marker me-1"></span> India, Noida</li>
                            </ul>
                            <div className="btn btn-outline-light btn-sm d-inline-block mt-2">Apply Now</div>
                        </a>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <a href="/career-detail" className="text-decoration-none mt-4 mt-xl-0 mt-lg-0 single-open-job p-5 mb-4 bg-dark text-white d-block rounded-custom">
                            <div className="d-flex justify-content-between align-items-center">
                                <span className="job-time h-6 mb-2"><i className="fas fa-briefcase me-2"></i> <strong>WFO
                                        - Full Time</strong></span>
                                <span className="badge px-3 py-2 bg-custom-light rounded-pill small">Developer</span>
                            </div>
                            <h3 className="h5">Sr. Full Stack Developer</h3>
                            <p className="mb-0">Nodejs, MongoDB, MySQL, HTML, CSS, Javascript, ReactJs</p>
                            <ul className="job-info-list list-inline list-unstyled text-muted">
                                <li className="list-inline-item text-light"><span className="fas fa-map-marker me-1"></span> India, Noida</li>
                            </ul>
                            <div className="btn btn-outline-light btn-sm d-inline-block mt-2">Apply Now</div>
                        </a>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <a href="/career-detail" className="text-decoration-none mt-4 mt-xl-0 mt-lg-0 single-open-job p-5 mb-4 bg-dark text-white d-block rounded-custom">
                            <div className="d-flex justify-content-between align-items-center">
                                <span className="job-time h-6 mb-2"><i className="fas fa-briefcase me-2"></i> <strong>WFO
                                        - Full Time</strong></span>
                                <span className="badge px-3 py-2 bg-custom-light rounded-pill small">Developer</span>
                            </div>
                            <h3 className="h5">Jr. Backend Developer</h3>
                            <p className="mb-0">Nodejs, MongoDB, MySQL, Javascript, ReactJs</p>
                            <ul className="job-info-list list-inline list-unstyled text-muted">
                                <li className="list-inline-item text-light"><span className="fas fa-map-marker me-1"></span> India, Noida</li>
                            </ul>
                            <div className="btn btn-outline-light btn-sm d-inline-block mt-2">Apply Now</div>
                        </a>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <a href="/career-detail" className="text-decoration-none mt-4 mt-xl-0 mt-lg-0 single-open-job p-5 mb-4 bg-dark text-white d-block rounded-custom">
                            <div className="d-flex justify-content-between align-items-center">
                                <span className="job-time h-6 mb-2"><i className="fas fa-briefcase me-2"></i> <strong>WFO
                                        - Full Time</strong></span>
                                <span className="badge px-3 py-2 bg-custom-light rounded-pill small">Designer</span>
                            </div>
                            <h3 className="h5">UI, UX Designer</h3>
                            <p className="mb-0">Photoshop, Figma, Illustrator</p>
                            <ul className="job-info-list list-inline list-unstyled text-muted">
                                <li className="list-inline-item text-light"><span className="fas fa-map-marker me-1"></span> India, Noida</li>
                            </ul>
                            <div className="btn btn-outline-light btn-sm d-inline-block mt-2">Apply Now</div>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <Footer/>
    </>
  )
}

export default Career