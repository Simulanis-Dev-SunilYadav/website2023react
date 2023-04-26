import React from 'react'
import Header from '../common/Header'
import Headerbd from '../common/Headerbd'
import '../../assets/css/blogs.css'
import BlogsCard from './BlogsCard'
import Footer from '../common/Footer'

function Blogs() {
  return (
    <>  
        <Headerbd/>
        <section class="page-header position-relative overflow-hidden ptb-120 pb-100 bg-dark">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8 col-md-12">
                        <div class="text-center mb-0">
                            <h1 class="display-3 fw-bold mb-2">Simulanis Blogs</h1>
                            <form class="pt-4 pb-1 searchblgs position-relative d-block d-lg-flex d-md-flex">
                                <input type="text" class="input-newsletter form-control" placeholder="Search for best blogs, links etc..."  required="" autocomplete="on" />
                                <input type="submit" value="Subscribe" data-wait="Please wait..." class="btn btn-danger submitbtn mt-3 mt-lg-0 mt-md-0" />
                            </form><br />
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center text-center">
                    <div class="col-xl-9">
                        <div class="d-flex justify-content-center">
                            <h6 class="mt-1" style={{whiteSpace: 'nowrap'}}>Popular Tags :</h6>
                            <div class="keytags ms-2">
                                <a href="javascript:;">Training,</a>
                                <a href="javascript:;">Technology,</a>
                                <a href="javascript:;">Industry,</a>
                                <a href="javascript:;">Safety,</a>
                                <a href="javascript:;">Metaverse,</a>
                                <a href="javascript:;">Products</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-circle rounded-circle circle-shape-3 position-absolute bg-dark-light right-5"></div>
            </div>
        </section>
        <section class="masonary-blog-section ptb-40 bg-light-subtle">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="row">
                            <div class="col-lg-4 col-md-6">
                                <BlogsCard/>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <BlogsCard/>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <BlogsCard/>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <BlogsCard/>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <BlogsCard/>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <BlogsCard/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">

                    </div>
                </div>
            </div>
        </section>
        <Footer/>
    </>
  )
}

export default Blogs