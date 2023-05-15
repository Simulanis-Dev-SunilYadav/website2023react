import React from 'react'
import Footer from '../common/Footer'
import Headerbd from '../common/Headerbd'

function GetInTouch() {
  return (
    <>
        <Headerbd/>

            <section className="page-header position-relative overflow-hidden ptb-120 pb-60 bg-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <h1 className="display-5 fw-bold">Get in touch with us</h1>
                            <p className="lead">Seamlessly actualize client-based users after out-of-the-box value data through
                                frictionless expertise.</p>
                        </div>
                    </div>
                    <div className="bg-circle rounded-circle circle-shape-3 position-absolute bg-dark-light right-5"></div>
                </div>
            </section>

            <section className="contact-us-form ptb-60">
                <div className="container">
                    <div className="row justify-content-lg-between align-items-center">
                        <div className="col-lg-6 col-md-8">
                            <form action="#" className="register-form">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <label for="firstName" className="mb-1">Name <span
                                                className="text-danger">*</span></label>
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" required placeholder="Name" aria-label="Name" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <label for="phone" className="mb-1">Phone <span className="text-danger">*</span></label>
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" required placeholder="Phone" aria-label="Phone" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <label for="email" className="mb-1">Email<span className="text-danger">*</span></label>
                                        <div className="input-group mb-3">
                                            <input type="email" className="form-control" required placeholder="Email" aria-label="Email" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6 ">
                                        <label for="lastName" className="mb-1">Company</label>
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="Company" aria-label="Company" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <label for="yourMessage" className="mb-1">Message <span className="text-danger">*</span></label>
                                        <div className="input-group mb-3">
                                            <textarea className="form-control" required placeholder="How can we help you?" style={{height: '100px'}}></textarea>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary mt-2">Get in Touch</button>
                            </form>
                        </div>
                        <div className="col-lg-5 col-md-10">
                            <div className="contact-us-img">
                                <img src="assets/img/contact-us-img-2.svg" alt="contact us" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

             <section className="contact-promo bg-light-subtle ptb-60">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
                            <div className="contact-us-promo p-3 pb-3 bg-white rounded-custom custom-shadow d-flex flex-column h-100">
                                <span className="fas fa-map-marked-alt fa-3x text-primary"></span>
                                <div className="contact-promo-info">
                                    <h5>Global HQ, UK Office</h5>
                                    <p className='mb-0'>St. George House 215-219, Chester Road, Manchester M15 4JE </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
                            <div className="contact-us-promo p-3 pb-3 bg-white rounded-custom custom-shadow d-flex flex-column h-100">
                                <span className="fas fa-map-marked-alt fa-3x text-primary"></span>
                                <div className="contact-promo-info">
                                    <h5>India Office</h5>
                                    <p className='mb-0'>AMCO TOWER, Ground Floor, A-5, 6, 7, Sector 9, Noida, UP, 201301 </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
                            <div className="contact-us-promo p-3 pb-0 bg-white rounded-custom custom-shadow d-flex flex-column h-100">
                                <span className="fas fa-envelope fa-3x text-primary"></span>
                                <div className="contact-promo-info mb-4">
                                    <h5>Email Us</h5>
                                    <a href="mailto:customer.support@simulanis.com">customer.support@simulanis.com</a><br />
                                    <a href="mailto:connect@simulanis.com">connect@simulanis.com</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
                            <div className="contact-us-promo p-3 pb-0 bg-white rounded-custom custom-shadow d-flex flex-column h-100">
                                <span className="fas fa-phone fa-3x text-primary"></span>
                                <div className="contact-promo-info mb-4">
                                    <h5>Give us a call</h5>
                                    <a href="tel:+91-9990912140">+91 99909 12140</a>
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

export default GetInTouch