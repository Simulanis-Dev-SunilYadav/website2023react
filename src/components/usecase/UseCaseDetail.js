import React from 'react'
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import FactoryOutlinedIcon from '@mui/icons-material/FactoryOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import Footer from '../common/Footer'
import Headerbd from '../common/Headerbd'
import Cta1 from '../forms/Cta1'

function UseCaseDetail() {
  return (
    <>
        <Headerbd/>
            <section className="hero-section ptb-120 pb-60  bg-gradient text-white usebgcasef">
                <div className="container">
                    <div className="row justify-content-xl-between align-items-center">
                        <div className="col-lg-7 col-xl-6 col-md-10">
                            <div className="hero-content-wrap mt-5 mt-lg-0 mt-xl-0">
                                <h1 className="fw-bold display-5">Operational Efficiency</h1>
                                <h6 className='text-muted1 industryrtg py-2 opacity-75 mb-0'><span className='d-flex align-items-center me-4'><FactoryOutlinedIcon/> <span className='ms-1 mt-1'>Pharmaceutical</span></span>  <span className='d-flex align-items-center me-2'><AccessTimeOutlinedIcon/> <span className='ms-1'>5min read </span> </span> </h6>
                                <p>It has become very important for businesses to scale effectively while ensuring that their employees are always equipped to handle the tasks at work with ease.</p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-8">
                            {/* <div className="hero-app-img position-relative text-center">
                                <img src="assets/img/app-two-phone.png" alt="app screen" className="img-fluid" />
                            </div> */}
                            <img src="assets/img/usecases/operationaleffi.jpg" className='img-fluid rounded-3' alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section class="our-integration usecasesdetailde ptb-40 bg-light-subtle">
                <div class="container">
                    <div class="position-relative w-100">
                        <div className="row text-center mb-2">
                            <div className="col-lg-8 offset-lg-2">
                                <h2>Typical Use Cases</h2>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-3 col-md-6">
                                <div class="position-relative text-decoration-none connected-app-single border border-2 promo-border-hover mt-4 transition-base bg-white rounded-custom d-block overflow-hidden p-4">
                                    <div class="position-relative connected-app-content">
                                        <div class="integration-logo bg-white rounded-circle shadow-lg p-2 d-inline-block">
                                            <img src="assets/img/usecases/icons/optimizeprocess.png" width="40" alt="integration" class="img-fluid" />
                                        </div>
                                        <p class="mb-0 text-muted">Opportunity to optimizeprocesses</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="position-relative text-decoration-none connected-app-single border border-2 promo-border-hover mt-4 transition-base bg-white rounded-custom d-block overflow-hidden p-4">
                                    <div class="position-relative connected-app-content">
                                        <div class="integration-logo bg-white rounded-circle shadow-lg p-2 d-inline-block">
                                            <img src="assets/img/usecases/icons/fasterdecisionmaking.png" width="40" alt="integration" class="img-fluid" />
                                        </div>
                                        <p class="mb-0 text-muted">Enable faster decision making process.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="position-relative text-decoration-none connected-app-single border border-2 promo-border-hover mt-4 transition-base bg-white rounded-custom d-block overflow-hidden p-4">
                                    <div class="position-relative connected-app-content">
                                        <div class="integration-logo bg-white rounded-circle shadow-lg p-2 d-inline-block">
                                            <img src="assets/img/usecases/icons/lab.png" width="40" alt="integration" class="img-fluid" />
                                        </div>
                                        <p class="mb-0 text-muted">Ensure speed of scaling up from lab to mass production.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="position-relative text-decoration-none connected-app-single border border-2 promo-border-hover mt-4 transition-base bg-white rounded-custom d-block overflow-hidden p-4">
                                    <div class="position-relative connected-app-content">
                                        <div class="integration-logo bg-white rounded-circle shadow-lg p-2 d-inline-block">
                                            <img src="assets/img/usecases/icons/increase.png" width="40" alt="integration" class="img-fluid" />
                                        </div>
                                        <p class="mb-0 text-muted">Increase accuracy while conducting operations.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="position-relative text-decoration-none connected-app-single border border-2 promo-border-hover mt-4 transition-base bg-white rounded-custom d-block overflow-hidden p-4">
                                    <div class="position-relative connected-app-content">
                                        <div class="integration-logo bg-white rounded-circle shadow-lg p-2 d-inline-block">
                                            <img src="assets/img/usecases/icons/save-money.png" width="40" alt="integration" class="img-fluid" />
                                        </div>
                                        <p class="mb-0 text-muted">Help maintain cost-effectiveness.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="position-relative text-decoration-none connected-app-single border border-2 promo-border-hover mt-4 transition-base bg-white rounded-custom d-block overflow-hidden p-4">
                                    <div class="position-relative connected-app-content">
                                        <div class="integration-logo bg-white rounded-circle shadow-lg p-2 d-inline-block">
                                            <img src="assets/img/usecases/icons/engineering.png" width="40" alt="integration" class="img-fluid" />
                                        </div>
                                        <p class="mb-0 text-muted">Experience reduced assembly time.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="position-relative text-decoration-none connected-app-single border border-2 promo-border-hover mt-4 transition-base bg-white rounded-custom d-block overflow-hidden p-4">
                                    <div class="position-relative connected-app-content">
                                        <div class="integration-logo bg-white rounded-circle shadow-lg p-2 d-inline-block">
                                            <img src="assets/img/usecases/icons/decreasedowntime.png" width="40" alt="integration" class="img-fluid" />
                                        </div>
                                        <p class="mb-0 text-muted">Reduced downtime of equipment.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="position-relative text-decoration-none connected-app-single border border-2 promo-border-hover mt-4 transition-base bg-white rounded-custom d-block overflow-hidden p-4">
                                    <div class="position-relative connected-app-content">
                                        <div class="integration-logo bg-white rounded-circle shadow-lg p-2 d-inline-block">
                                            <img src="assets/img/usecases/icons/decreasedowntime.png" width="40" alt="integration" class="img-fluid" />
                                        </div>
                                        <p class="mb-0 text-muted">Reduced downtime of equipment.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="feature-section ptb-40">
                <div class="container">
                    <div class="row align-items-lg-center justify-content-between">
                        <div class="col-lg-6 order-lg-2 mb-7 mb-lg-0">
                            <div class="mb-4" data-aos="fade-up">
                                <p>Businesses today are moving at a great pace. Even in times of distress, like the one created amidst the current Covid-19 scenario, there is a great need to propel businesses to produce and match the demands of the customers at all times. There is an increased pressure on businesses to sustain themselves both financially and operationally.</p>
                                <p>It has become very important for businesses to scale effectively while ensuring that their employees are always equipped to handle the tasks at work with ease. The element of Learning, Improvement and Adaptation is very critical for businesses to transform their processes and flows to eventually achieve success.</p>
                            </div>
                        </div>

                        <div class="col-lg-6 order-lg-1">
                            <div class="pr-lg-4">
                                <div class="bg-light-subtle text-center rounded-custom overflow-hidden p-lg-5 p-3 mx-lg-auto" data-aos="fade-up" data-aos-delay="50">
                                    <img src="assets/img/usecases/operationaleffi.jpg" alt="" class="img-fluid rounded-3" />
                                    <div class="position-absolute bg-primary-dark z--1 dot-mask dm-size-16 dm-wh-350 top--40 left--40 top-left"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="usecasesdd bg-light-subtle ptb-40">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 text-center">
                            <h2>The 5 M model XR ready modules </h2>
                        </div>
                    </div>
                    <div className="fivemmodal">
                        <div className="row text-center mt-4">
                            <div className="col">
                                <img src="assets/img/usecases/manpower.png" className='img-fluid' alt="" />
                                <h3>Manpower</h3>
                                <p>You can now enhance the learning of your "Manpower"</p>
                            </div>
                            <div className="col">
                                <img src="assets/img/usecases/icons/machines.png" className='img-fluid' alt="" />
                                <h3>Machines</h3>
                                <p>Transform the way your employees interact with the "Machines"</p>
                            </div>
                            <div className="col">
                                <img src="assets/img/usecases/icons/materials.png" className='img-fluid' alt="" />
                                <h3>Materials</h3>
                                <p>Now track the "Materials"and aid your design stage processes</p>
                            </div>
                            <div className="col">
                                <img src="assets/img/usecases/icons/metrices.png" className='img-fluid' alt="" />
                                <h3>Metrics</h3>
                                <p>Get in-depth analysis and track all the "Metrics"at ease to increase</p>
                            </div>
                            <div className="col">
                                <img src="assets/img/usecases/icons/mission.jpg" className='img-fluid' alt="" />
                                <h3>Missions</h3>
                                <p>Now it becomes relatively easier for the businesses to align their "Missions"</p>
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

export default UseCaseDetail