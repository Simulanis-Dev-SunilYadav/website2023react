import React from 'react'
import Footer from '../common/Footer'
import Headerbd from '../common/Headerbd'

function SalesSupport() {
  return (
    <>
        <Headerbd/>
        <section className="bg-dark ptb-120 salessupport">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-xl-5 col-lg-5 col-md-12 order-1 order-lg-0">
                        <div className="testimonial-tab-slider-wrap mt-5">
                            <h1 className="fw-bold text-white display-5">Sales Support</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <hr />
                            <div className="tab-content testimonial-tab-content text-white-80" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="testimonial-tab-1" role="tabpanel">
                                    <blockquote className="blockquote">
                                        <em>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever  "</em>
                                    </blockquote>
                                    <div className="author-info sauthor mt-3">
                                        <img src="assets/img/about/team/Arjun_Sharma.png" alt="" />
                                        <div>
                                            <span className="h6">Arjun Sharma</span>
                                            <span className="d-block small">Chief Business Officer</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-7 col-md-12 order-0 order-lg-1">
                        <div className="register-wrap p-5 bg-white shadow rounded-custom mt-5 mt-lg-0 mt-xl-0">
                            <form action="#" className="register-form">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="Name" aria-label="name" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6 ">
                                        <div className="input-group mb-3">
                                            <input type="phone" className="form-control" placeholder="Phone" aria-label="phone" />
                                        </div>
                                    </div>
                                    <div className="col-sm-12 ">
                                        <div className="input-group mb-3">
                                            <input type="email" className="form-control" placeholder="Work email" aria-label="email" />
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="Company website" aria-label="company-website" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group mb-3">
                                            <textarea className="form-control" placeholder="Tell us more about your organizations and needs" style={{height: '120px'}}></textarea>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="btn btn-primary mt-4 d-block w-100">Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
    </>
  )
}

export default SalesSupport