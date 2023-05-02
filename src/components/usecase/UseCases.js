import React from 'react'
import Headerbd from '../common/Headerbd'
import Footer from '../common/Footer'
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import FactoryOutlinedIcon from '@mui/icons-material/FactoryOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

function UseCases() {
  return (
    <>
        <Headerbd/>
       <section className="hero-section ptb-120 pb-60  bg-gradient text-white usebgcasef">
            <div className="container">
                <div className="row justify-content-xl-between align-items-center">
                    <div className="col-lg-6 col-xl-6 col-md-10">
                        <div className="hero-content-wrap mt-5 mt-lg-0 mt-xl-0">
                            <h1 className="fw-bold display-5">Problems we solve</h1>
                            <p className="lead">
                                There are plenty of use cases for AR, VR, MR and now XR technologies. Explore the areas where our offerings can meet your requirements.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-8">
                        {/* <div className="hero-app-img position-relative text-center">
                            <img src="assets/img/app-two-phone.png" alt="app screen" className="img-fluid" />
                        </div> */}
                        <img src="assets/img/services/videosandanimations/usecases.jpg" className='img-fluid rounded-3' alt="" />

                    </div>
                </div>
            </div>
        </section>

        <section className="team-section usecaselsit bg-light-subtle pb-1 ptb-40">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-md-5">
                         <div className="filterpartright">
                            <div className='fsetiond'>
                                <form action="" className="searchfilter">
                                    <SearchRoundedIcon/>
                                    <input type="text" className='form-control' placeholder='search your course' />
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">
                         <div className='filtertab'>
                            <ul class="nav justify-content-center feature-tab-list-2" id="nav-tab-2" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link" href="#gridview" data-bs-toggle="tab" data-bs-target="#gridview" role="tab" aria-selected="false">
                                        <GridViewOutlinedIcon/>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" href="#listview" data-bs-toggle="tab" data-bs-target="#listview" role="tab" aria-selected="false">
                                    <FormatListBulletedOutlinedIcon/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="tab-content" id="nav-tabContent-2">
                    <div className="tab-pane fade pt-40 " id="gridview" role="tabpanel">
                        <div className="row justify-content-center align-items-center justify-content-around">
                            <div className="col-lg-4 col-md-6">
                                <a href="/use-case-detail">
                                    <div className="team-single-wrap mb-4 bg-white">
                                        <div className="team-img rounded-3">
                                            <img src="assets/img/usecases/operationaleffi.jpg" alt="team" className="img-fluid position-relative" />
                                        </div>
                                        <div className="team-info mt-2 p-2 px-3">
                                            <h5 className="h5 mb-1">Operational Efficiency</h5>
                                            <h6 className='text-muted1 industryrtg py-1 mb-0'><span className='d-flex align-items-center me-4'><FactoryOutlinedIcon/> <span className='ms-1 mt-1'>Pharmaceutical</span></span>  <span className='d-flex align-items-center me-2'><AccessTimeOutlinedIcon/> <span className='ms-1'>5min read </span> </span> </h6>
                                            <p className="text-muted mb-0">Achieve operational efficiency with immersive technologies at your disposal.</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <a href="/use-case-detail">
                                    <div className="team-single-wrap mb-4 bg-white">
                                        <div className="team-img rounded-3">
                                            <img src="assets/img/usecases/remoteassist.jpg" alt="team" className="img-fluid position-relative" />
                                        </div>
                                        <div className="team-info mt-2 p-2 px-3">
                                            <h5 className="h5 mb-1">Remote Assistance</h5>
                                            <h6 className='text-muted1 industryrtg py-1 mb-0'><span className='d-flex align-items-center me-4'><FactoryOutlinedIcon/> <span className='ms-1 mt-1'>Pharmaceutical</span></span>  <span className='d-flex align-items-center me-2'><AccessTimeOutlinedIcon/> <span className='ms-1'>5min read </span> </span> </h6>
                                            <p className="text-muted mb-0">Now share progress and interact with team members, clients and customers directly.</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <a href="/use-case-detail">
                                    <div className="team-single-wrap mb-4 bg-white">
                                        <div className="team-img rounded-3">
                                            <img src="assets/img/usecases/hsafety.jpg" alt="team" className="img-fluid position-relative" />
                                        </div>
                                        <div className="team-info mt-2 p-2 px-3">
                                            <h5 className="h5 mb-1">Health & Safety</h5>
                                            <h6 className='text-muted1 industryrtg py-1 mb-0'><span className='d-flex align-items-center me-4'><FactoryOutlinedIcon/> <span className='ms-1 mt-1'>Pharmaceutical</span></span>  <span className='d-flex align-items-center me-2'><AccessTimeOutlinedIcon/> <span className='ms-1'>5min read </span> </span> </h6>
                                            <p className="text-muted mb-0">Achieve operational efficiency with immersive technologies at your disposal.</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <a href="/use-case-detail">
                                    <div className="team-single-wrap mb-4 bg-white">
                                        <div className="team-img rounded-3">
                                            <img src="assets/img/usecases/smart_manufacturing.jpg" alt="team" className="img-fluid position-relative" />
                                        </div>
                                        <div className="team-info mt-2 p-2 px-3">
                                            <h5 className="h5 mb-1">Smart Manufacturing</h5>
                                            <h6 className='text-muted1 industryrtg py-1 mb-0'><span className='d-flex align-items-center me-4'><FactoryOutlinedIcon/> <span className='ms-1 mt-1'>Pharmaceutical</span></span>  <span className='d-flex align-items-center me-2'><AccessTimeOutlinedIcon/> <span className='ms-1'>5min read </span> </span> </h6>
                                            <p className="text-muted mb-0">Achieve operational efficiency with immersive technologies at your disposal.</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <a href="/use-case-detail">
                                    <div className="team-single-wrap mb-4 bg-white">
                                        <div className="team-img rounded-3">
                                            <img src="assets/img/usecases/maintensupport.jpg" alt="team" className="img-fluid position-relative" />
                                        </div>
                                        <div className="team-info mt-2 p-2 px-3">
                                            <h5 className="h5 mb-1">Maintenance & Repair</h5>
                                            <h6 className='text-muted1 industryrtg py-1 mb-0'><span className='d-flex align-items-center me-4'><FactoryOutlinedIcon/> <span className='ms-1 mt-1'>Pharmaceutical</span></span>  <span className='d-flex align-items-center me-2'><AccessTimeOutlinedIcon/> <span className='ms-1'>5min read </span> </span> </h6>
                                            <p className="text-muted mb-0">Achieve operational efficiency with immersive technologies at your disposal.</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <a href="/use-case-detail">
                                    <div className="team-single-wrap mb-4 bg-white">
                                        <div className="team-img rounded-3">
                                            <img src="assets/img/usecases/smarttraining.jpg" alt="team" className="img-fluid position-relative" />
                                        </div>
                                        <div className="team-info mt-2 p-2 px-3">
                                            <h5 className="h5 mb-1">Smart Training</h5>
                                            <h6 className='text-muted1 industryrtg py-1 mb-0'><span className='d-flex align-items-center me-4'><FactoryOutlinedIcon/> <span className='ms-1 mt-1'>Pharmaceutical</span></span>  <span className='d-flex align-items-center me-2'><AccessTimeOutlinedIcon/> <span className='ms-1'>5min read </span> </span> </h6>
                                            <p className="text-muted mb-0">Achieve operational efficiency with immersive technologies at your disposal.</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade pt-40 active show" id="listview" role="tabpanel">
                        <div className="p-2">
                            <a href="/use-case-detail">
                                <div className="team-single-wrap uslistimg d-flex align-items-center mb-3 bg-white">
                                    <div className="team-img rounded-3">
                                        <img src="assets/img/usecases/operationaleffi.jpg" alt="team" className="img-fluid position-relative" />
                                    </div>
                                    <div className="team-info mt-2 p-2 px-4">
                                        <h5 className="h5 mb-1">Operational Efficiency</h5>
                                        <h6 className='text-muted1 industryrtg py-1 mb-0'><span className='d-flex align-items-center me-4'><FactoryOutlinedIcon/> <span className='ms-1 mt-1'>Pharmaceutical</span></span>  <span className='d-flex align-items-center me-2'><AccessTimeOutlinedIcon/> <span className='ms-1'>5min read </span> </span> </h6>
                                        <p className="text-muted text-justify mb-0">Businesses today are moving at a great pace. Even in times of distress, like the one created amidst the current Covid-19 scenario, there is a great need to propel businesses to produce and match the demands of the customers at all times. There is an increased pressure on businesses to sustain themselves both financially and operationally.</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="p-2">
                            <a href="/use-case-detail">
                                <div className="team-single-wrap uslistimg d-flex align-items-center mb-3 bg-white">
                                    <div className="team-img rounded-3">
                                        <img src="assets/img/usecases/remoteassist.jpg" alt="team" className="img-fluid position-relative" />
                                    </div>
                                    <div className="team-info mt-2 p-2 px-4">
                                        <h5 className="h5 mb-1">Remote Assistance</h5>
                                        <h6 className='text-muted1 industryrtg py-1 mb-0'><span className='d-flex align-items-center me-4'><FactoryOutlinedIcon/> <span className='ms-1 mt-1'>Pharmaceutical</span></span>  <span className='d-flex align-items-center me-2'><AccessTimeOutlinedIcon/> <span className='ms-1'>5min read </span> </span> </h6>
                                        <p className="text-muted text-justify mb-0">Businesses today are moving at a great pace. Even in times of distress, like the one created amidst the current Covid-19 scenario, there is a great need to propel businesses to produce and match the demands of the customers at all times. There is an increased pressure on businesses to sustain themselves both financially and operationally.</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="p-2">
                            <a href="/use-case-detail">
                                <div className="team-single-wrap uslistimg d-flex align-items-center mb-3 bg-white">
                                    <div className="team-img rounded-3">
                                        <img src="assets/img/usecases/hsafety.jpg" alt="team" className="img-fluid position-relative" />
                                    </div>
                                    <div className="team-info mt-2 p-2 px-4">
                                        <h5 className="h5 mb-1">Health & Safety</h5>
                                        <h6 className='text-muted1 industryrtg py-1 mb-0'><span className='d-flex align-items-center me-4'><FactoryOutlinedIcon/> <span className='ms-1 mt-1'>Pharmaceutical</span></span>  <span className='d-flex align-items-center me-2'><AccessTimeOutlinedIcon/> <span className='ms-1'>5min read </span> </span> </h6>
                                        <p className="text-muted text-justify mb-0">Businesses today are moving at a great pace. Even in times of distress, like the one created amidst the current Covid-19 scenario, there is a great need to propel businesses to produce and match the demands of the customers at all times. There is an increased pressure on businesses to sustain themselves both financially and operationally.</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="p-2">
                            <a href="/use-case-detail">
                                <div className="team-single-wrap uslistimg d-flex align-items-center mb-3 bg-white">
                                    <div className="team-img rounded-3">
                                        <img src="assets/img/usecases/smart_manufacturing.jpg" alt="team" className="img-fluid position-relative" />
                                    </div>
                                    <div className="team-info mt-2 p-2 px-4">
                                        <h5 className="h5 mb-1">Smart Manufacturing</h5>
                                        <h6 className='text-muted1 industryrtg py-1 mb-0'><span className='d-flex align-items-center me-4'><FactoryOutlinedIcon/> <span className='ms-1 mt-1'>Pharmaceutical</span></span>  <span className='d-flex align-items-center me-2'><AccessTimeOutlinedIcon/> <span className='ms-1'>5min read </span> </span> </h6>
                                        <p className="text-muted text-justify mb-0">Businesses today are moving at a great pace. Even in times of distress, like the one created amidst the current Covid-19 scenario, there is a great need to propel businesses to produce and match the demands of the customers at all times. There is an increased pressure on businesses to sustain themselves both financially and operationally.</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Footer/>
    </>
  )
}

export default UseCases