import React from 'react'
import Footer from '../common/Footer'
import Headerbd from '../common/Headerbd'

function OurValues() {
  return (
    <>
        <Headerbd/>
            <section class="page-header position-relative overflow-hidden ptb-120 bg-dark awardsbg">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7 col-md-12">
                            <h1 class="display-5 fw-bold mt-4">Simulanis values</h1>
                            <p class="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        </div>
                        <div className="col-lg-5 position-relative">
                            <img className='awardsimg' src="assets/img/about/awards/simulanis_awards.png" alt="" />
                        </div>
                    </div>
                    <div class="bg-circle rounded-circle circle-shape-3 position-absolute bg-dark-light right-5"></div>
                </div>
            </section>

            <section class="feature-section-two ptb-40 bg-light-subtle">
                <div class="container">
                    <div class="row align-items-center justify-content-center">
                        <div class="col-lg-6 col-md-12">
                            <div class="section-heading">
                                <h4 class="h5 text-primary mb-3">Lorem Ipsum</h4>
                                <h2>The Core Values that Drive Everything</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                <ul class="list-unstyled mt-5">
                                    <li class="d-flex align-items-start mb-4">
                                        <div class="icon-box bg-danger rounded me-4">
                                            {/* <i class="fas fa-fingerprint text-white"></i> */}
                                            <img src="assets/img/about/ourvalues/vision.png" width="60" alt="" />
                                        </div>
                                        <div class="icon-content">
                                            <h3 class="h5">Vision</h3>
                                            <p>“Our vision is to inspire and help the next generation of skill seekers to never face a problem in learning due to inaccessibility of learning environments.
Learning should never stop in our skilling metaverse across industrial sectors.”
                                            </p>
                                        </div>
                                    </li>
                                    <li class="d-flex align-items-start mb-4">
                                        <div class="icon-box bg-primary rounded me-4">
                                            {/* <i class="fas fa-bullseye text-white"></i> */}
                                            <img src="assets/img/about/ourvalues/mission.png" width="60" alt="" />
                                        </div>
                                        <div class="icon-content">
                                            <h3 class="h5">Mission</h3>
                                            <p>“Empowering individuals to safely enhance their skills and driving organizations to increase operational efficiency by leveraging cutting-edge XR technologies across hazardous manufacturing-based industries.”
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-5 offset-lg-1 col-md-7">
                            <div class="feature-img-wrap position-relative d-flex flex-column align-items-end">
                                <ul class="img-overlay-list list-unstyled position-absolute">
                                    <li class="d-flex align-items-center bg-white rounded shadow-sm p-3">
                                        <i class="fas fa-check bg-primary text-white rounded-circle"></i>
                                        <h6 class="mb-0">Customer First</h6>
                                    </li>
                                    <li class="d-flex align-items-center bg-white rounded shadow-sm p-3">
                                        <i class="fas fa-check bg-primary text-white rounded-circle"></i>
                                        <h6 class="mb-0">Continuous Improvement </h6>
                                    </li>
                                    <li class="d-flex align-items-center bg-white rounded shadow-sm p-3">
                                        <i class="fas fa-check bg-primary text-white rounded-circle"></i>
                                        <h6 class="mb-0">Consistent Delivery </h6>
                                    </li>
                                </ul>
                                <img src="assets/img/about/ourvalues/feature-img3.jpg" alt="feature image" class="img-fluid rounded-custom" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

          <section className="why-us ptb-40">
            <div className="container">
                <div className="row justify-content-center align-content-center">
                    <div className="col-md-10 col-lg-8">
                        <div className="section-heading text-center mb-4">
                            <h2>Fueled by Passion</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <ul className="nav justify-content-center feature-tab-list mt-0" id="nav-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <a className="nav-link active" href="#tab-1" data-bs-toggle="tab" data-bs-target="#tab-1" role="tab" aria-selected="false" tabindex="-1">Responsibility</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" href="#tab-2" data-bs-toggle="tab" data-bs-target="#tab-2" role="tab" aria-selected="true">Achievement</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" href="#tab-3" data-bs-toggle="tab" data-bs-target="#tab-3" role="tab" aria-selected="false" tabindex="-1">Teamwork</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" href="#tab-4" data-bs-toggle="tab" data-bs-target="#tab-4" role="tab" aria-selected="false" tabindex="-1">Intrapreneurship</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" href="#tab-5" data-bs-toggle="tab" data-bs-target="#tab-5" role="tab" aria-selected="false" tabindex="-1">Ownership</a>
                            </li>
                        </ul>
                        <div className="tab-content bg-dark text-white rounded-custom" id="nav-tabContent">
                            <div className="tab-pane fade active show" id="tab-1" role="tabpanel">
                                <div className="row justify-content-center text-center p-50 pb-0">
                                    <div className="col-lg-9">
                                        <div className="feature-tab-info">
                                            <p className="lead">We shoulder a sense of ‘responsibility’ towards our clients and customers, colleagues, vendors, partners, investors, and every other stakeholder of Simulanis.</p>
                                        </div>
                                        <img src="assets/img/about/ourvalues/responsibility.png" alt="feature tab" className="img-fluid mt-2" />
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="tab-2" role="tabpanel">
                                <div className="row justify-content-center text-center p-50 pb-0">
                                    <div className="col-lg-9">
                                        <div className="feature-tab-info">
                                            <p className="lead">We work tirelessly hard to bring about a sense of ‘achievement’ of our goals aligned with the goals of Simulanis as a Company, along with our clients and customers.</p>
                                        </div>
                                        <img src="assets/img/about/ourvalues/achievement.png" alt="feature tab" className="img-fluid my-2" />
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="tab-3" role="tabpanel">
                                <div className="row justify-content-center text-center p-50 pb-0">
                                    <div className="col-lg-9">
                                        <div className="feature-tab-info">
                                            <p className="lead">We believe in proper ‘teamwork’ which brings every team member together and values the efforts of all Employees.</p>
                                        </div>
                                        <img src="assets/img/about/ourvalues/teamwork.png" alt="feature tab" className="img-fluid py-2" />
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="tab-4" role="tabpanel">
                                <div className="row justify-content-center text-center p-50 pb-0">
                                    <div className="col-lg-9">
                                        <div className="feature-tab-info">
                                            <p className="lead">We encourage all Employees to demonstrate ‘intrapreneurship’ within Simulanis regardless of their role or seniority by harnessing their own entrepreneurship spirits of taking risks, leadership and ingenuity to challenge and disrupt the status quo through long-term vision, passion, creativity, innovation and disciplined hardwork.</p>
                                        </div>
                                        <img src="assets/img/about/ourvalues/entrapreneurship.png" alt="feature tab" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="tab-5" role="tabpanel">
                                <div className="row justify-content-center text-center p-50 pb-0">
                                    <div className="col-lg-8">
                                        <div className="feature-tab-info">
                                            <p className="lead">We take complete ‘ownership’ of all tasks and actions to make the difference and succeed.</p>
                                        </div>
                                        <img src="assets/img/about/ourvalues/ownership.png" alt="feature tab" className="img-fluid mt-2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className='ptb-40 bg-light-subtle'>
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-md-7">
                        <h2>We value Social Responsibility</h2>
                        <p>As winners of the coveted Sankalp Award, we take our impact on the society seriously and we want individuals with the same drive who want to leave their footprints in the world by making a significant difference for those around them.</p>
                    </div>
                    <div className="col-md-4">
                        <img src="assets/img/about/credibility/fifthpaniim.png" className='img-fluid ms-auto d-block rounded-3' alt="" />
                    </div>
                </div>
            </div>
        </section>

        <Footer/>
    </>
  )
}

export default OurValues