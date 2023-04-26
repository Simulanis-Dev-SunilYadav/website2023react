import React from 'react'
import PremoteHeader from '../../../common/PremoteHeader'
import Footer from '../../../common/Footer'

function DynamicAssist() {
  return (
    <>
        <PremoteHeader/>
        
                  <section className="hero-section pt-160 pb-40 position-relative overflow-hidden dynamicassist">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-xl-9 col-lg-10 mt-4 mb-4">
                        <div className="hero-content-wrap">
                            <h1 className="fw-bold display-3 aos-init aos-animate" data-aos="fade-up">Empower your workforce with <span className="text-danger">Dynamic Assist</span></h1>
                            <p className="lead aos-init aos-animate" data-aos="fade-up" data-aos-delay="50">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            <div className="action-btns text-center pt-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                                <a href="#" className="btn btn-danger me-lg-3 me-sm-3">Start Free Trial</a>
                                <a href="#" className="btn btn-outline-danger">Talk to Sales</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-9">
                        <div className="position-relative aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                            <ul className="position-absolute animate-element parallax-element widget-img-wrap z-2" style={{transform: 'translate3d(0px, 0px, 0px)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden'}}>
                                <li className="layer" data-depth="0.04" style={{position: 'relative', display: 'block', left: '0px', top: '0px', transform: 'translate3d(-31.2582px, -0.40118px, 0px)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden'}}>
                                    <img src="assets/img/screen/widget-3.png" alt="widget-img" className="img-fluid widget-img-1 position-absolute shadow-lg rounded-custom" />
                                </li>
                                <li className="layer" data-depth="0.02" style={{position: 'absolute', display: 'block', left: '0px', top: '0px', transform: 'translate3d(-15.6291px, -0.20059px, 0px)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden'}}>
                                    <img src="assets/img/screen/widget-4.png" alt="widget-img" className="img-fluid widget-img-3 position-absolute shadow-lg rounded-custom" />
                                </li>
                            </ul>
                            <img src="assets/img/dashboard-img.png" alt="dashboard image" className="img-fluid position-relative rounded-custom mt-lg-4" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-dark position-absolute bottom-0 h-25 bottom-0 left-0 right-0 z--1 py-5"></div>
        </section>

        <section className="feature-section-two ptb-40 bg-light-subtle">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="section-heading">
                            <h2>Lorem Ipsum is simply dummy text</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            <ul className="list-unstyled mt-5">
                                <li className="d-flex align-items-start mb-4">
                                    <div className="icon-box bg-primary rounded me-4">
                                        <i className="fas fa-bezier-curve text-white"></i>
                                    </div>
                                    <div className="icon-content">
                                        <h3 className="h5">Dashboards</h3>
                                        <p>Comes with data backed dashboards across different layers.
                                        </p>
                                    </div>
                                </li>
                                <li className="d-flex align-items-start mb-4">
                                    <div className="icon-box bg-danger rounded me-4">
                                        <i className="fas fa-fingerprint text-white"></i>
                                    </div>
                                    <div className="icon-content">
                                        <h3 className="h5">Workflows Associated</h3>
                                        <p>Organization can create various sites and sites can create various users and workflows associated with them.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-7">
                        <div className="feature-img-wrap position-relative d-flex flex-column align-items-end">
                            <ul className="img-overlay-list list-unstyled position-absolute">
                                <li className="d-flex align-items-center bg-white rounded shadow-sm p-3">
                                    <i className="fas fa-check bg-primary text-white rounded-circle"></i>
                                    <h6 className="mb-0">Data oriented dashboard.</h6>
                                </li>
                                <li className="d-flex align-items-center bg-white rounded shadow-sm p-3">
                                    <i className="fas fa-check bg-primary text-white rounded-circle"></i>
                                    <h6 className="mb-0">Organization can see sites</h6>
                                </li>
                                <li className="d-flex align-items-center bg-white rounded shadow-sm p-3">
                                    <i className="fas fa-check bg-primary text-white rounded-circle"></i>
                                    <h6 className="mb-0">AR integrated application</h6>
                                </li>
                            </ul>
                            <img src="assets/img/feature-img3.jpg" alt="feature image" className="img-fluid rounded-custom" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="work-process ptb-40">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10">
                        <div className="section-heading text-center">
                            <h2>How it works?</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center justify-content-between mt-2">
                    <div className="col-lg-6 col-md-12 order-1 order-lg-0">
                        <div className="img-wrap">
                            <img src="assets/img/productivityicon/dynamicassist/howitworks.jpg" style={{width:'100%'}} alt="work process" className="img-fluid rounded-custom" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 order-0 order-lg-1">
                        <div className="accordion faq-accordion" id="accordionExample">
                            <div className="accordion-item border border-2 active">
                                <h5 className="accordion-header" id="faq-1">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1" aria-expanded="true">
                                       <i className="fas fa-folder-tree me-2"></i> Super Admin
                                    </button>
                                </h5>
                                <div id="collapse-1" className="accordion-collapse collapse show" aria-labelledby="faq-1" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <div className="icon-content">
                                            <ul className="list-unstyled mb-0">
                                                <li><i className="fas fa-check-circle me-2 text-primary"></i>Create Organizations
                                                </li>
                                                <li><i className="fas fa-check-circle me-2 text-primary"></i>Share Initial Credentials
                                                </li>
                                                <li><i className="fas fa-check-circle me-2 text-primary"></i>Provide Dashboard Access
                                                </li>
                                                <li><i className="fas fa-check-circle me-2 text-primary"></i>Share Application to the Organization.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item border border-2">
                                <h5 className="accordion-header" id="faq-2">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-2" aria-expanded="false">
                                        <i className="fas fa-suitcase me-2"></i> Organizations
                                    </button>
                                </h5>
                                <div id="collapse-2" className="accordion-collapse collapse" aria-labelledby="faq-2" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <ul className="list-unstyled mb-0">
                                            <li><i className="fas fa-check-circle me-2 text-primary"></i>Create Sites
                                            </li>
                                            <li><i className="fas fa-check-circle me-2 text-primary"></i>Provide Dashboard Access
                                            </li>
                                            <li><i className="fas fa-check-circle me-2 text-primary"></i>Share Application to the Sites.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item border border-2">
                                <h5 className="accordion-header" id="faq-3">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-3" aria-expanded="false">
                                       <i className="fas fa-industry me-2"></i> Sites
                                    </button>
                                </h5>
                                <div id="collapse-3" className="accordion-collapse collapse" aria-labelledby="faq-3" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <ul className="list-unstyled mb-0">
                                            <li><i className="fas fa-check-circle me-2 text-primary"></i>Create Users
                                            </li>
                                            <li><i className="fas fa-check-circle me-2 text-primary"></i>Access Dashboard
                                            </li>
                                            <li><i className="fas fa-check-circle me-2 text-primary"></i>Upload application to the MR device
                                            </li>
                                            <li><i className="fas fa-check-circle me-2 text-primary"></i>Create Workflows
                                            </li>
                                            <li><i className="fas fa-check-circle me-2 text-primary"></i>Set anchors on the device.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item border border-2">
                                <h5 className="accordion-header" id="faq-4">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-4" aria-expanded="false">
                                        <i className="fas fa-user-alt me-2"></i> Users
                                    </button>
                                </h5>
                                <div id="collapse-4" className="accordion-collapse collapse" aria-labelledby="faq-4" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <ul className="list-unstyled mb-0">
                                            <li><i className="fas fa-check-circle me-2 text-primary"></i>Access the application on the MR device
                                            </li>
                                            <li><i className="fas fa-check-circle me-2 text-primary"></i>See Workflow
                                            </li>
                                            <li><i className="fas fa-check-circle me-2 text-primary"></i>Perform Workflow
                                            </li>
                                            <li><i className="fas fa-check-circle me-2 text-primary"></i>See reference images and videos for each step.
                                            </li>
                                            <li><i className="fas fa-check-circle me-2 text-primary"></i>User AR elements to get better guidance.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="work-process workflow bg-light-subtle ptb-40">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-8">
                            <div className="section-heading text-center">
                                <h2>Workflow</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="workflowicon">
                            <img src="assets/img/productivityicon/dynamicassist/workflow.png" alt="" />
                        </div>
                    </div>
                    <div className="row d-flex">
                        <div className="col-md-6 col-lg-4">
                            <div className="process-card text-left workflowcard px-4 py-lg-4 py-4 rounded-custom shadow-hover mb-3 mb-lg-0">
                                <div className="process-icon border border-light bg-custom-light rounded-custom p-3">
                                    <span className="h2 mb-0 text-primary fw-bold">1</span>
                                </div>
                                <h3 className="h5">Site Admin</h3>
                                <ul className="list-unstyled worflorwdf">
                                    <li><i className="fas fa-circle fa-2xs text-primary me-2"></i> <span>Site admin opens the dashboard using credentials.</span></li>
                                    <li><i className="fas fa-circle fa-2xs text-primary me-2"></i> <span>Site admin creates workflow.</span></li>
                                    <li><i className="fas fa-circle fa-2xs text-primary me-2"></i> <span>Site admin uploads necessary images and video references to the workflow steps.</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 h-100">
                            <div className="process-card text-left workflowcard h-100 px-4 py-lg-4 py-4 rounded-custom shadow-hover mb-3 mb-lg-0">
                                <div className="process-icon border border-light bg-custom-light rounded-custom p-3">
                                    <span className="h2 mb-0 text-primary fw-bold">2</span>
                                </div>
                                <h3 className="h5">Supervisor</h3>
                                <ul className="list-unstyled worflorwdf">
                                    <li><i className="fas fa-circle fa-2xs text-primary me-2"></i> <span>Supervisor access the workflow on MR Hololens device.</span></li>
                                    <li><i className="fas fa-circle fa-2xs text-primary me-2"></i> <span>Supervisor opens the assigned workflow.</span></li>
                                    <li><i className="fas fa-circle fa-2xs text-primary me-2"></i> <span>Supervisor goes to the equipment at site and sets AR annotations.</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 h-100">
                            <div className="process-card text-left workflowcard h-100 px-4 py-lg-4 py-4 rounded-custom shadow-hover mb-3 mb-lg-0 mb-md-0">
                                <div className="process-icon border border-light bg-custom-light rounded-custom p-3">
                                    <span className="h2 mb-0 text-primary fw-bold">3</span>
                                </div>
                                <h3 className="h5">Operator</h3>
                                <ul className="list-unstyled worflorwdf">
                                    <li><i className="fas fa-circle fa-2xs text-primary me-2"></i> <span>Operator goes to the equipment at the site.</span></li>
                                    <li><i className="fas fa-circle fa-2xs text-primary me-2"></i> <span>Operator opens up the workflow.</span></li>
                                    <li><i className="fas fa-circle fa-2xs text-primary me-2"></i> <span>Operator see the steps with video and image references.</span></li>
                                    <li><i className="fas fa-circle fa-2xs text-primary me-2"></i> <span>Operator performs the workflow.</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        <section className="feature-section ptb-40 pb-50 dynamicassist">
            <div className="container">
                <div className="feature-color bg-primary-soft px-5 py-3 rounded-custom position-relative rawywg">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-5 col-md-12">
                            <div className="feature-content-wrap pe-lg-4 ptb-60 p-lg-0 mb-5 mb-lg-0">
                                <h2>What You Will Get?</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                <a href="#" className="btn btn-primary mt-4">Get Started</a>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12">
                            <div className="row align-items-center justify-content-center position-relative z-2">
                                <div className="col-md-6 mt-5">
                                    <div className="cta-card rounded-custom text-left shadow p-4 bg-white my-4 mt-5">
                                        <div className="feature-icon d-inline-block bg-dark rounded mb-3">
                                            <i className="fas fa-dashboard text-white fa-2x"></i>
                                        </div>
                                        <h3 className="h5 fw-bold">Web Dashboard</h3>
                                        <ul className="list-unstyled mb-0">
                                            <li className="py-1"><i className="fas fa-check-circle me-2 text-primary"></i>Create Users
                                            </li>
                                            <li className="py-1"><i className="fas fa-check-circle me-2 text-primary"></i>Create Workflow
                                            </li>
                                            <li className="py-1"><i className="fas fa-check-circle me-2 text-primary"></i>Upload necessary video, images.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="cta-card rounded-custom text-left shadow p-4 bg-white">
                                        <div className="feature-icon d-inline-block bg-danger rounded mb-3">
                                            <i className="fas fa-mobile-alt text-white fa-2x"></i>
                                        </div>
                                        <h3 className="h5 fw-bold">Hololens Application</h3>
                                        <ul className="list-unstyled mb-0">
                                            <li className="py-1"><i className="fas fa-check-circle me-2 text-primary"></i>Perform Workflow
                                            </li>
                                            <li className="py-1"><i className="fas fa-check-circle me-2 text-primary"></i> <span>See reference images, videos</span>
                                            </li>
                                            <li className="py-1"><i className="fas fa-check-circle me-2 text-primary"></i>Follow AR elements for guidance.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <ul className="position-absolute animate-element parallax-element z--1" style={{transform: 'translate3d(0px, 0px, 0px)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden'}}>
                                    <li className="layer" data-depth="0.06" style={{position: 'relative', display: 'block', left: '0px', top: '0px', transform: 'translate3d(21.3997px, -1.8768px, 0px)', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden'}}>
                                        <img src="assets/img/shape/shape-bg-3.svg" alt="shape" className="img-fluid" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="pricing-section ptb-10 pb-60  position-relative z-2">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10">
                        <div className="section-heading text-center">
                            <h2>Check Our Valuable Price</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </p>
                        </div>
                    </div>
                </div>
                
                <div className="row mt-3">
                    <div className="col-lg-4 col-md-6">
                        <div className="position-relative single-pricing-wrap rounded-custom bg-white custom-shadow p-5 mb-4 mb-lg-0">
                            <div className="pricing-header mb-20">
                                <h3 className="package-name text-primary d-block mb-0">Free</h3>
                            </div>
                            <div className="pricing-info mb-4">
                                <ul className="pricing-feature-list list-unstyled">
                                    <li><i className="fas fa-circle fa-2xs text-primary me-2"></i> Workflow</li>
                                    <li><i className="fas fa-circle fa-2xs text-primary me-2"></i> Upload steps images and videos</li>
                                    <li><i className="fas fa-circle fa-2xs text-primary me-2"></i> Storage: 2GB per user</li>
                                    <li><i className="fas fa-circle fa-2xs text-primary me-2"></i> Number of users: Unlimited</li>
                                    <li><i className="fas fa-circle fa-2xs text-primary me-2"></i> Trial Time: 7 days</li>
                                </ul>
                            </div>
                            <a href="#" className="btn btn-outline-danger read-more-link mt-2">Buy Now</a>

                            <div className="dot-shape-bg position-absolute z--1 left--40 bottom--40">
                                <img src="assets/img/shape/dot-big-square.svg" alt="shape" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="position-relative single-pricing-wrap rounded-custom bg-gradient text-white p-5 mb-4 mb-lg-0">
                            <div className="pricing-header mb-20">
                                <h3 className="package-name text-danger d-block mb-0">Professional</h3>
                            </div>
                            <div className="pricing-info mb-4">
                                <ul className="pricing-feature-list list-unstyled">
                                    <li><i className="fas fa-circle fa-2xs text-danger me-2"></i>Workflow</li>
                                    <li><i className="fas fa-circle fa-2xs text-danger me-2"></i> Upload steps images and videos</li>
                                    <li><i className="fas fa-circle fa-2xs text-danger me-2"></i> Storage: As per the requirement</li>
                                    <li><i className="fas fa-circle fa-2xs text-danger me-2"></i> Number of users: Choose</li>
                                    <li><i className="fas fa-circle fa-2xs text-danger me-2"></i> License time validity: Choose</li>
                                </ul>
                            </div>
                            <a href="#" className="btn btn-danger mt-2">Buy Now</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="position-relative single-pricing-wrap rounded-custom bg-white custom-shadow p-5 mb-4 mb-lg-0 h-100">
                            <div className="pricing-header mb-20">
                                <h3 className="package-name text-primary d-block mb-0">Enterprise</h3>
                            </div>
                            <div className="pricing-info mb-4">
                                <ul className="pricing-feature-list list-unstyled">
                                    <li><i className="fas fa-circle fa-2xs text-primary me-2"></i> The plan is intended for enterprises seeking on-premises implementation. Share your questions, and a member of our staff will contact you.</li>
                                    
                                </ul>
                            </div>
                            <a href="#" className="btn btn-outline-danger read-more-link mt-2">Buy Now</a>

                            <div className="dot-shape-bg position-absolute z--1 right--40 top--40">
                                <img src="assets/img/shape/dot-big-square.svg" alt="shape" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="process-section bg-light-subtle ptb-40">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-12">
                        <div className="section-heading text-center aos-init aos-animate" data-aos="fade-up">
                            <h2>Use Cases</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="setup-process-wrap">
                            <ul className="setup-process-list list-unstyled text-center mb-0">
                                <li className="setup-process-item py-4 px-2 aos-init aos-animate" data-aos="fade-up">
                                    <div className="setup-process-icon mb-1">
                                        <img src="assets/img/productivityicon/inspection.png" alt="" />
                                    </div>
                                    <h6 className="mt-2 mb-0">Inspection</h6>
                                </li>
                                <li className="setup-process-item py-4 px-2 aos-init aos-animate" data-aos="fade-up" data-aos-delay="50">
                                    <div className="setup-process-icon mb-1">
                                        <img src="assets/img/productivityicon/maintenance.png" alt="" />
                                    </div>
                                    <h6 className="mt-2 mb-0">Maintenance</h6>
                                </li>
                                <li className="setup-process-item py-4 px-2 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                                    <div className="setup-process-icon mb-1">
                                        <img src="assets/img/productivityicon/operations.png" alt="" />
                                    </div>
                                    <h6 className="mt-2 mb-0">Operations</h6>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Footer/>
    </>
  )
}

export default DynamicAssist