import React from 'react'
import Footer from '../common/Footer'
import Header from '../common/Header'
import Headerbd from '../common/Headerbd'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import Testimonials from '../testimonials/Testimonials';
import TestimonialsCaseStudy from '../testimonials/TestimonialsCaseStudy';

function CaseStudyDetail() {
  return (
    <>
        <Headerbd/>
            <section className="page-header bg-gradient position-relative casestudybg overflow-hidden pt-160 pb-80">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7 col-md-12">
                            <h1 className="display-3 fw-bold">A tablet compression machine </h1>
                            <a href="#" className='text-white btn btn-outline-light mt-3'><FileDownloadOutlinedIcon/> Download case study</a>
                            {/* <p className="lead">“Our multi-award winning software applications are aimed at revolutionizing the training discipline within the manufacturing domain of various industries by  leveraging Augmented, Mixed and Virtual Reality technologies</p> */}
                        </div>
                        <div className="col-md-5">
                          <div className='shotstdescase'>
                            <p><strong>Year:</strong> 2019 </p>
                            <p><strong>Timeline:</strong>  August 2019- December 2019</p>
                            <p><strong>Hardware:</strong>  Mobile VR (Meta Quest 1 & 2 and Pico Neo 2 & 3)</p>
                            <p><strong>Industry:</strong>  Pharmaceutical</p>
                            <p><strong>Services:</strong>  Bespoke development</p>
                          </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="casestudys ptb-40">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-5">
                            <img src="assets/img/casestudy/comp.jpg" className='img-fluid' alt="" />
                        </div>
                        <div className="col-md-7">
                            <h2>Introduction </h2>
                            <p>A tablet compression machine plays an integral role in  today’s world where the majority of the drugs are administered in tablet form. This makes it a widely used  and essential appliance for any pharmaceutical manufacturing plant. </p>
                            <p>The tablet compressional machine is an electro mechanical device that used compression force to  transform powder in tablets of uniform sizes and  thickness. The tablet making process involves using ‘die’  and ‘punches’ to fuse different powder particles to form a solid substance. The force of compression is delivered by high pressure compression rolls which fuse the granulated material together into a hard tablet.</p>
                            
                        </div>
                    </div>
                </div>
            </section>
            <section className="casestudys ptb-40 bg-light-subtle">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-7">
                            <h2>Problem statement </h2>
                            <p>The common problem faced by the compression  machine operators lies in the understanding of the several complex tasks performed within the  compression room. </p>
                            <p>The current training methods used in the industries lack engagement and thereby effectiveness. Conventionally, employees are given a Standard Operating Procedure  (SOP) document to read through —in order to ‘learn’ the 
                                steps of operating a complex machinery. Employees are 
                                also shown PowerPoint slides or safety posters, from 
                                which they’re are expected to retain the knowledge 
                                using insufficient visual aids over time.</p>
                            <p>The compression machine operation requires special 
                                care and caution in assembling and dismantling of 
                                machine parts. One mistake can degrade the product 
                                quality and can impact the operator safety by causing life 
                                threatening accidents.</p>
                        </div>
                        <div className="col-md-5">
                            <img src="assets/img/casestudy/problem.png" className='img-fluid' alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="casestudys ptb-40">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-5">
                            <img src="assets/img/casestudy/complexity.png" className='img-fluid' alt="" />
                        </div>
                        <div className="col-md-7">
                            <h2>Complexities involved </h2>
                            <p>A tablet compression machine is an assembly of 
                                many different parts that coordinate to perform 
                                a desired function.. So, assembling all the 
                                removable parts before the start of operation 
                                can be difficult task to perform </p>
                                <p>Tableting process involves precise filling and 
                                compression of powder in the cavity. The exact 
                                depth of the lower punch can be precisely 
                                controlled to meter the amount of powder that 
                                fills the cavity. This makes the setting up of the 
                                punch and die a very critical step.</p>
                                <p>Furthermore, cleaning of the compression 
                                machine is also a very critical task to perform. 
                                Material gets built up around the parts which 
                                becomes a harduous task to perform.
                                </p>
                                <p>Hence, handling of a tablet compression machine requires a skilled and trained operator</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="casestudys bg-light-subtle ptb-40">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-7">
                            <h2>Solution </h2>
                            <p>Having expertise over years in terms of 
                                creating exceptional VR solutions in the 
                                manufacturing sector, specifically, 
                                pharmaceuticals sector. Our technical team 
                                work closely with our in-house pharma experts 
                                to understand the different nuances of the 
                                process to deliver a Virtual Reality hardware 
                                based training module on the tablet 
                                compression machine to simulate each 
                                operating step in-line with the standard SOP.</p>
                        </div>
                        <div className="col-md-5">
                            <img src="assets/img/casestudy/solution.png" className='img-fluid' alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="feature-section-two ptb-40">
                <div className="container">
                    <div className="row align-items-center justify-content-lg-between justify-content-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="feature-content-wrap">
                                <div className="section-heading">
                                    <h2>Advantages pharma VR</h2>
                                    <p>Quickly incubate functional channels with multidisciplinary architectures authoritatively
                                        fabricate formulate exceptional innovation.</p>
                                </div>
                                <ul className="list-unstyled mb-0">
                                    <li className="d-flex align-items-start mb-2">
                                        <div className="icon-box bg-primary rounded me-4">
                                            <i className="fas fa-check text-white"></i>
                                        </div>
                                        <div className="icon-content">
                                            <h3 className="h5">Faster learning</h3>
                                            <p>The experiential training of AR/MR 
                                                solutions gives real time-feedback, 
                                                improve efficiency of skills transfer, 
                                                increases knowledge retention and better 
                                                captures enterprise within an organization. 
                                            </p>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-start mb-2">
                                        <div className="icon-box bg-danger rounded me-4">
                                            <i className="fas fa-check text-white"></i>
                                        </div>
                                        <div className="icon-content">
                                            <h3 className="h5">Reduce cost</h3>
                                            <p>As employees are able to learn faster, 
                                                the time taken to train an individual is 
                                                significantly reduced, thus reducing 
                                                cost. The simulation of training also 
                                                allows for resource efficiency
                                            </p>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-start mb-2 mb-lg-0">
                                        <div className="icon-box bg-dark rounded me-4">
                                            <i className="fas fa-check text-white"></i>
                                        </div>
                                        <div className="icon-content">
                                            <h3 className="h5">Enhance safety</h3>
                                            <p>Practice in a ‘risk free’ environment which 
                                                can reduce the accidental cases and 
                                                number of safety violations. 
                                            </p>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-start mb-2 mb-lg-0">
                                        <div className="icon-box bg-info rounded me-4">
                                            <i className="fas fa-check text-white"></i>
                                        </div>
                                        <div className="icon-content">
                                            <h3 className="h5">Increase motivation</h3>
                                            <p>This novel and fun method of training motivates employees to practice and learn. 
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-7">
                            <div className="feature-img-wrap">
                                <img src="assets/img/feature-hero-img.svg" alt="feature image" className="img-fluid rounded-custom" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className='bg-light-subtle'>
                <TestimonialsCaseStudy/>
            </div>

        <Footer/>
    </>
  )
}

export default CaseStudyDetail