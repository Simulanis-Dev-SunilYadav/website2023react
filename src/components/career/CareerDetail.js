import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Cta1 from '../forms/Cta1'

function CareerDetail() {
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

        <section className="job-details ptb-40 bg-light-subtle">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-8 pe-lg-5">
                        <div className="job-details-wrap">
                            <h2>Job Details</h2>
                            <p>Objectively restore stand-alone markets rather than enterprise-wide products. Uniquely
                                underwhelm best-of-breed mindshare through adaptive niches. Seamlessly parallel task
                                open-source content without resource sucking technology.
                            </p>
                            <div className="job-details-info mt-5">
                                <h3 className="h5">Job Responsibilities</h3>
                                <ul className="content-list list-unstyled">
                                    <li>Be involved in every step of the product design cycle from discovery and user
                                        acceptance testing.
                                    </li>
                                    <li>Work with BAs, product managers and tech teams to lead the Product Design</li>
                                    <li>Maintain quality of the design process and ensure that when designs are translated
                                        into code they accurately.
                                    </li>
                                    <li>Accurately estimate design tickets during planning sessions.</li>
                                    <li>Contribute to sketching sessions involving non-designersCreate, and pattern
                                        libraries.
                                    </li>
                                    <li>Design pixel perfect responsive ui and understand that adopting common interface
                                    </li>
                                    <li>Interface patterns is better for UX than reinventing the wheel</li>
                                </ul>
                            </div>
                            <div className="job-details-info mt-5">
                                <h3 className="h5">Job Requirements</h3>
                                <ul className="content-list list-unstyled">
                                    <li>Interactively plagiarize covalent "outside the box" thinking vis-a-vis.</li>
                                    <li>Holisticly communicate integrated channels via backend interfaces. Authoritatively.
                                    </li>
                                    <li>Globally actualize effective processes through synergistic ROI. Interactively.</li>
                                </ul>
                            </div>

                            <div className="job-details-info mt-5">
                                <h3 className="h5">Skill & Experience</h3>
                                <ul className="content-list list-unstyled">
                                    <li>You have at least 3 years’ experience working as a Product Designer.</li>
                                    <li>You have experience using Sketch and InVision or Framer X</li>
                                    <li>You have some previous experience working in an agile environment – Think two-week
                                        sprints.
                                    </li>
                                    <li>You are familiar using Jira and Confluence in your workflow</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="job-overview-wrap bg-light-subtle p-5 sticky-sidebar rounded-custom mt-5 mt-lg-0">
                            <h5>Job Overviews</h5>
                            <ul className="job-overview-list list-unstyled mt-4">
                                <li>
                                    <i className="fas fa-location-arrow text-primary"></i>
                                    <div className="overview-item">
                                        <h6 className="mb-0">Location:</h6>
                                        <span>India, Noida</span>
                                    </div>
                                </li>
                                <li>
                                    <i className="far fa-user text-primary"></i>
                                    <div className="overview-item">
                                        <h6 className="mb-0">Job Title:</h6>
                                        <span>Sr. Backend Developer</span>
                                    </div>
                                </li>
                                <li>
                                    <i className="fas fa-wallet text-primary"></i>
                                    <div className="overview-item">
                                        <h6 className="mb-0">Salary:</h6>
                                        <span>As per industry</span>
                                    </div>
                                </li>
                            </ul>
                            <a href="/applynow" className="btn btn-primary d-block mt-4">Apply now</a>
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

export default CareerDetail