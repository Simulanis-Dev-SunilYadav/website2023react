import React from 'react'
import Footer from '../../common/Footer'
import Headerbd from '../../common/Headerbd'
import { Link } from 'react-router-dom'

function News() {
  return (
    <>
        <Headerbd/>
        <section className="page-header position-relative overflow-hidden ptb-120 pb-60 bg-dark">
            <div className="container pt-20">
                <div className="row">
                    <div className="col-lg-8 col-md-12">
                        <div className="mb-0">
                            <h1 className="display-3 fw-bold mb-2">Simulanis news</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                        </div>
                    </div>
                </div>
                <div className="bg-circle rounded-circle circle-shape-3 position-absolute bg-dark-light right-5"></div>
            </div>
        </section>
        <section className="home-blog-section ptb-40 bg-light-subtle">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-6 col-md-10">
                        <div className="section-heading">
                            <h4 className="h5 text-primary">In the news</h4>
                            <h2>Lorem Ipsum is simply</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                        </div>
                    </div>
                    <div className="col-lg-6 text-end">
                        <a href="/news-list" className='btn btn-danger'>View All News</a>
                    </div>
                </div>
                <div className="row">
                    <div className="blog-grid">
                        <div className="featured-post-wrapper">
                            <div className="blog-item">
                                <div className="blog-content bg-white">
                                    <div className="blog-media">
                                        <img src="assets/img/about/news/armoving.jpg" alt="article" className="img-fluid" />
                                    </div>
                                    <div className="blog-text p-lg-4">
                                        <span className='datedf'><i className='fa fa-calendar'></i> 23-SEP-2019 </span>
                                        <a href="https://www.businesstoday.in/magazine/technology/story/ar-moving-the-real-world-249378-2020-02-04" target='_blank'>
                                            <h3 className="h5">AR: Moving the real world</h3>
                                        </a>
                                        <p>MG Motor India's studio in Bengaluru's Residency Road is unique. It is small, just 500 sq. ft., and possibly one of the very few car showrooms in India without a car.</p>
                                        <div className="read-more-link">
                                            <a href="https://www.businesstoday.in/magazine/technology/story/ar-moving-the-real-world-249378-2020-02-04" target='_blank' className="mt-2 d-inline-flex align-items-center btn btn-sm btn-pill font-weight-bold"><span>Read More</span>
                                                <i className="fas fa-arrow-right ms-2"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="posts-wrapper">
                            <div className="blog-item">
                                <div className="blog-content bg-white">
                                    <div className="blog-media">
                                        <img src="assets/img/blog/blog-4.jpg" alt="article" className="img-fluid" />
                                    </div>
                                    <div className="blog-text p-4 p-lg-4">
                                        <span className='datedf'><i className='fa fa-calendar'></i> 23-SEP-2019 </span>
                                        <a href="#">
                                            <h3 className="h5">AR: Moving the real world</h3>
                                        </a>
                                        <p>MG Motor India's studio in Bengaluru's Residency Road is unique. It is small, just 500 sq. ft., and possibly one of the very few car showrooms in India without a car.</p>
                                        <div className="read-more-link">
                                            <a href="#" className="mt-2 d-inline-flex align-items-center btn btn-sm btn-pill font-weight-bold"><span>Read More</span>
                                                <i className="fas fa-arrow-right ms-2"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-item">
                                <div className="blog-content bg-white">
                                    <div className="blog-media">
                                        <img src="assets/img/blog/blog-2.jpg" alt="article" className="img-fluid" />
                                    </div>
                                    <div className="blog-text p-4 p-lg-4">
                                        <span className='datedf'><i className='fa fa-calendar'></i> 23-SEP-2019 </span>
                                        <a href="#" target="_blank">
                                            <h3 className="h5">AR: Moving the real world</h3>
                                        </a>
                                        <p>MG Motor India's studio in Bengaluru's Residency Road is unique. It is small, just 500 sq. ft., and possibly one of the very few car showrooms in India without a car.</p>
                                        <div className="read-more-link">
                                            <a href="#" target="_blank" className="mt-2 d-inline-flex align-items-center btn btn-sm btn-pill font-weight-bold"><span>Read More</span>
                                                <i className="fas fa-arrow-right ms-2"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="masonary-blog-section ptb-40">
            <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-9 text-center">
                      <h2>Press Release</h2>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                  </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-article rounded-custom my-3">
                            <a href="#" className="article-img">
                                <img src="assets/img/blog/blog-1.jpg" alt="article" className="img-fluid" />
                            </a>
                            <div className="article-content p-4">
                                <a href="#">
                                    <h2 className="h5 article-title limit-2-line-text">Lorem Ipsum is simply dummy text of the printing</h2>
                                </a>
                                <p className="limit-2-line-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-article rounded-custom my-3">
                            <a href="#" className="article-img">
                                <img src="assets/img/blog/blog-2.jpg" alt="article" className="img-fluid" />
                            </a>
                            <div className="article-content p-4">
                                <a href="#">
                                    <h2 className="h5 article-title limit-2-line-text">Lorem Ipsum is simply dummy text of the printing</h2>
                                </a>
                                <p className="limit-2-line-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-article rounded-custom my-3">
                            <a href="#" className="article-img">
                                <img src="assets/img/blog/blog-3.jpg" alt="article" className="img-fluid" />
                            </a>
                            <div className="article-content p-4">
                                <a href="#">
                                    <h2 className="h5 article-title limit-2-line-text">Lorem Ipsum is simply dummy text of the printing</h2>
                                </a>
                                <p className="limit-2-line-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-article rounded-custom my-3">
                            <a href="#" className="article-img">
                                <img src="assets/img/blog/blog-4.jpg" alt="article" className="img-fluid" />
                            </a>
                            <div className="article-content p-4">
                                <a href="#">
                                    <h2 className="h5 article-title limit-2-line-text">Lorem Ipsum is simply dummy text of the printing</h2>
                                </a>
                                <p className="limit-2-line-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-article rounded-custom my-3">
                            <a href="#" className="article-img">
                                <img src="assets/img/blog/blog-5.jpg" alt="article" className="img-fluid" />
                            </a>
                            <div className="article-content p-4">
                                <a href="#">
                                    <h2 className="h5 article-title limit-2-line-text">Lorem Ipsum is simply dummy text of the printing</h2>
                                </a>
                                <p className="limit-2-line-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-article rounded-custom my-3">
                            <a href="#" className="article-img">
                                <img src="assets/img/blog/blog-6.jpg" alt="article" className="img-fluid" />
                            </a>
                            <div className="article-content p-4">
                                <a href="#">
                                    <h2 className="h5 article-title limit-2-line-text">Lorem Ipsum is simply dummy text of the printing</h2>
                                </a>
                                <p className="limit-2-line-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

         <section className="up-coming-event ptb-40">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="text-center mb-5">
                            <span className="text-pink fw-bold">Coming Soon </span>
                            <h2>Our Upcoming Events</h2>
                            <p>
                                Competently reintermediate future-proof e-markets via premium
                                leadership skills. Energistically develop enterprise-wide systems
                                with dynamic human capital.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-up-eve bg-white mb-4 mb-lg-0 rounded">
                            <div className="position-relative">
                                <img src="assets/img/event/ee-1.jpg" className="img-fluid" alt="Event" />
                                <div className="ev-days">
                                    <h5 className="fw-bold text-pink m-0">03</h5>
                                    <span className="fw-bold">Days</span>
                                </div>
                            </div>
                            <div className="px-4 pt-5 pb-4 event-meta">
                                <div className="d-lg-flex mb-2">
                                    <div className="date pe-3 small text-muted">
                                        <i className="fas fa-clock pe-2"></i><span>Aug 5, 2022</span>
                                    </div>
                                    <div className="location small text-muted">
                                        <i className="fas fa-location-pin pe-2"></i>
                                        <span>Time Square , New York</span>
                                    </div>
                                </div>
                                <h5 className="mb-3">DigiMarCon East 2022</h5>
                                <p>
                                    Effective
                                    alignments credibly empower backend total linkage via cost seize leveraged niche markets.
                                </p>
                                <a href="#" className="read-more-link text-decoration-none">Explore More <i
                      className="fas fa-arrow-right ms-2"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-up-eve bg-white mb-4 mb-lg-0 rounded">
                            <div className="position-relative">
                                <img src="assets/img/event/ee-2.jpg" className="img-fluid" alt="Event" />
                                <div className="ev-days">
                                    <h5 className="fw-bold text-pink m-0">05</h5>
                                    <span className="fw-bold">Days</span>
                                </div>
                            </div>
                            <div className="px-4 pt-5 pb-4 event-meta">
                                <div className="d-lg-flex mb-2">
                                    <div className="date pe-3 small text-muted">
                                        <i className="fas fa-clock pe-2"></i><span>Aug 5, 2022</span>
                                    </div>
                                    <div className="location small text-muted">
                                        <i className="fas fa-location-pin pe-2"></i>
                                        <span>Time Square , New York</span>
                                    </div>
                                </div>
                                <h5 className="mb-3">Tokyo Digital Shake-Up</h5>
                                <p>
                                    Dramatically seize leveraged niche markets total linkage via cost effective
                                    alignments empower backend.
                                </p>
                                <a href="#" className="read-more-link text-decoration-none">Explore More <i
                      className="fas fa-arrow-right ms-2"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-up-eve bg-white rounded">
                            <div className="position-relative">
                                <img src="assets/img/event/ee-3.jpg" className="img-fluid" alt="Event" />
                                <div className="ev-days">
                                    <h5 className="fw-bold text-pink m-0">07</h5>
                                    <span className="fw-bold">Days</span>
                                </div>
                            </div>
                            <div className="px-4 pt-5 pb-4 event-meta">
                                <div className="d-lg-flex mb-2">
                                    <div className="date pe-3 small text-muted">
                                        <i className="fas fa-clock pe-2"></i><span>Aug 5, 2022</span>
                                    </div>
                                    <div className="location small text-muted">
                                        <i className="fas fa-location-pin pe-2"></i>
                                        <span>Time Square , New York</span>
                                    </div>
                                </div>
                                <h5 className="mb-3">Paris Digital Summit</h5>
                                <p className="">
                                    Credibly empower backend total linkage via cost effective
                                    alignments. Dramatically seize niche markets.
                                </p>
                                <a href="#" className="read-more-link text-decoration-none">Explore More <i
                      className="fas fa-arrow-right ms-2"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-5">
                    <a href="/events-list" className="btn btn-primary bg-dark-blue">View More Events</a>
                </div>
            </div>
        </section>

        <Footer/>
    </>
  )
}

export default News