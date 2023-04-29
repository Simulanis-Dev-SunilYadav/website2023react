import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Headerbd from '../common/Headerbd'

function CaseStudy() {
  return (
    <>
        <Headerbd/>
        <section className="page-header bg-dark position-relative casestudybg overflow-hidden ptb-120 pb-40">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7 col-md-12">
                        <h1 className="display-3 fw-bold">Case Studies</h1>
                        <p className="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                    </div>
                    <div className="col-md-5">
                        <img className='img-fluid' src="assets/img/casestudy/casetudybg.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
        <section className="casestudy bg-light-subtle ptb-40 pb-40">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-article rounded-custom my-3">
                            <a href="/case-study-detail" className="article-img">
                                <img src="assets/img/casestudy/comp.jpg" alt="article" className="img-fluid" />
                            </a>
                            <div className="article-content p-4 pt-3">
                                <span className="d-inline-block text-danger badge bg-danger-soft mb-1">
                                    Pharmaceutical</span>
                                <a href="/case-study-detail">
                                    <h2 className="h5 article-title limit-2-line-text">Compression Machine</h2>
                                    <p className="limit-2-line-text mb-0">A tablet compression machine plays an integral role in today’s world where the majority of the drugs are administered in tablet form. This makes it a widely used and essential appliance for any pharmaceutical manufacturing plant.</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-article rounded-custom my-3">
                            <a href="/case-study-detail" className="article-img">
                                <img src="assets/img/casestudy/comp.jpg" alt="article" className="img-fluid" />
                            </a>
                            <div className="article-content p-4 pt-3">
                                <span href="javascript:;" className="mb-1 d-inline-block text-danger badge bg-danger-soft">
                                        Pharmaceutical</span>
                                <a href="/case-study-detail">
                                    <h2 className="h5 article-title limit-2-line-text">Compression Machine</h2>
                                    <p className="limit-2-line-text mb-0">A tablet compression machine plays an integral role in today’s world where the majority of the drugs are administered in tablet form. This makes it a widely used and essential appliance for any pharmaceutical manufacturing plant.</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-article rounded-custom my-3">
                            <a href="/case-study-detail" className="article-img">
                                <img src="assets/img/casestudy/comp.jpg" alt="article" className="img-fluid" />
                            </a>
                            <div className="article-content p-4 pt-3">
                                <span href="javascript:;" className="mb-1 d-inline-block text-danger badge bg-danger-soft">
                                        Pharmaceutical</span>
                                <a href="/case-study-detail">
                                    <h2 className="h5 article-title limit-2-line-text">Compression Machine</h2>
                                    <p className="limit-2-line-text mb-0">A tablet compression machine plays an integral role in today’s world where the majority of the drugs are administered in tablet form. This makes it a widely used and essential appliance for any pharmaceutical manufacturing plant.</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-article rounded-custom my-3">
                            <a href="/case-study-detail" className="article-img">
                                <img src="assets/img/casestudy/comp.jpg" alt="article" className="img-fluid" />
                            </a>
                            <div className="article-content p-4 pt-3">
                                <span href="javascript:;" className="mb-1 d-inline-block text-danger badge bg-danger-soft">
                                        Pharmaceutical</span>
                                <a href="/case-study-detail">
                                    <h2 className="h5 article-title limit-2-line-text">Compression Machine</h2>
                                    <p className="limit-2-line-text mb-0">A tablet compression machine plays an integral role in today’s world where the majority of the drugs are administered in tablet form. This makes it a widely used and essential appliance for any pharmaceutical manufacturing plant.</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-article rounded-custom my-3">
                            <a href="/case-study-detail" className="article-img">
                                <img src="assets/img/casestudy/comp.jpg" alt="article" className="img-fluid" />
                            </a>
                            <div className="article-content p-4 pt-3">
                                <span href="javascript:;" className="mb-1 d-inline-block text-danger badge bg-danger-soft">
                                        Pharmaceutical</span>
                                <a href="/case-study-detail">
                                    <h2 className="h5 article-title limit-2-line-text">Compression Machine</h2>
                                    <p className="limit-2-line-text mb-0">A tablet compression machine plays an integral role in today’s world where the majority of the drugs are administered in tablet form. This makes it a widely used and essential appliance for any pharmaceutical manufacturing plant.</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-article rounded-custom my-3">
                            <a href="/case-study-detail" className="article-img">
                                <img src="assets/img/casestudy/comp.jpg" alt="article" className="img-fluid" />
                            </a>
                            <div className="article-content p-4 pt-3">
                                <span href="javascript:;" className="mb-1 d-inline-block text-danger badge bg-danger-soft">
                                        Pharmaceutical</span>
                                <a href="/case-study-detail">
                                    <h2 className="h5 article-title limit-2-line-text">Compression Machine</h2>
                                    <p className="limit-2-line-text mb-0">A tablet compression machine plays an integral role in today’s world where the majority of the drugs are administered in tablet form. This makes it a widely used and essential appliance for any pharmaceutical manufacturing plant.</p>
                                </a>
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

export default CaseStudy