import React from 'react'
import Headerbd from '../common/Headerbd'
import Footer from '../common/Footer'

function BecomePartner() {
  return (
    <>
        <Headerbd/>
        <section className="page-header position-relative overflow-hidden ptb-80 pb-40 bg-dark">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7 col-md-12">
                        <h1 className="display-5 fw-bold mt-4">Become Partner</h1>
                        <p className="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                    <div className="col-lg-5">
                         <img src="assets/img/about/partner.png" className='img-fluid position-relative z-1' alt="" />
                    </div>
                </div>
                <div className="bg-circle rounded-circle circle-shape-3 position-absolute bg-dark-light right-5"></div>
            </div>
        </section>

        <section className='becomeapartner bg-light-subtle ptb-40'>
            <div className="container">
              <div className="row">
                <div className="col-md-10 offset-md-1">
                   <div className="card p-3">
                    <div className="card-body">
                      <form action="">
                          <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="">Company name<sup>*</sup> </label>
                                    <input type="text" className='form-control' />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="">Company website<sup>*</sup> </label>
                                    <input type="text" className='form-control' />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="">Number of employee<sup>*</sup> </label>
                                    <input type="text" className='form-control' />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="">Number of customers<sup>*</sup> </label>
                                    <input type="text" className='form-control' />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="">Company email<sup>*</sup> </label>
                                    <input type="text" className='form-control' />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="">Purpose of business<sup>*</sup> </label>
                                    <input type="text" className='form-control' />
                                </div>
                            </div>
                          </div>
                          <hr className='my-4' />
                          <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label htmlFor="">Additional information </label>
                                    <textarea name="" className='form-control' rows="3"> </textarea>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Upload logo </label>
                                    <input type="file" className='form-control' />
                                </div>
                            </div>
                          </div>
                          <hr className='my-4' />
                          <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="">Contact Name<sup>*</sup> </label>
                                    <input type="text" className='form-control' />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="">Phone Number<sup>*</sup> </label>
                                    <input type="text" className='form-control' />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label htmlFor="">Email<sup>*</sup> </label>
                                    <input type="text" className='form-control' />
                                </div>
                            </div>
                            <div className="col-md-12 text-center mt-4">
                                <button className='btn btn-danger'>Submit </button>
                            </div>
                          </div>
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

export default BecomePartner