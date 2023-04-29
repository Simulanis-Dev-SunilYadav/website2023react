import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'

function ApplyNow() {
  return (
    <>
        <Header/>

          <section className="page-header position-relative overflow-hidden ptb-120 careerbg">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-7 col-md-12">
                          <h1 className="display-3 fw-bold">Sr. Backend Developer</h1>
                          <p className="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                      </div>
                  </div>
              </div>
          </section>

          <section className="contact-us-form bg-light-subtle ptb-40">
            <div className="container">
                <div className="row justify-content-lg-between align-items-center">
                    <div className="col-lg-10 offset-lg-1 col-md-8">
                        <div className="card p-3">
                            <div className="card-body">
                                <form action="#" className="register-form">
                                    <div className="row">
                                    <div className="col-sm-6">
                                            <label for="firstName" className="mb-1">Position applied for <span className="text-danger">*</span></label>
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" required="" value="Sr. Backend Developer" placeholder="Name" aria-label="First name" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <label for="phone" className="mb-1">Upload Resume <span className="text-danger">*</span></label>
                                            <div className="input-group mb-3">
                                                <input type="file" className="form-control" required="" placeholder="Upload Resume" aria-label="Upload Resume" />
                                            </div>
                                        </div>
                                        <div className="col-md-12 py-4">
                                            <hr />
                                        </div>
                                    </div>
                                    <div className="row mt-1">
                                        <div className="col-sm-6">
                                            <label for="firstName" className="mb-1">First Name <span className="text-danger">*</span></label>
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" required="" placeholder="First Name" aria-label="First name" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <label for="firstName" className="mb-1">Last Name <span className="text-danger">*</span></label>
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" required="" placeholder="Last Name" aria-label="First name" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <label for="email" className="mb-1">Email<span className="text-danger">*</span></label>
                                            <div className="input-group mb-3">
                                                <input type="email" className="form-control" required="" placeholder="Email" aria-label="Email" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <label for="phone" className="mb-1">Phone <span className="text-danger">*</span></label>
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" required="" placeholder="Phone" aria-label="Phone" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <label for="yourMessage" className="mb-1">Message <span className="text-danger">*</span></label>
                                            <div className="input-group mb-3">
                                                <textarea className="form-control" id="yourMessage" required="" placeholder="How can we help you?" style={{height: '120px'}}></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary mt-2 mx-auto d-block">Get in Touch</button>
                                </form>
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

export default ApplyNow