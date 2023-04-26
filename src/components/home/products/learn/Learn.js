import React from 'react'
import '../../../../../src/assets/css/learn.css'
import Footer from '../../../common/Footer'
import Cta1 from '../../../forms/Cta1'
import LearnHeader from '../../../common/LearnHeader'
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import Select from 'react-select'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import FactoryOutlinedIcon from '@mui/icons-material/FactoryOutlined';


const options = [
  { value: 'newlypublished', label: 'Newly Published' },
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

function Learn() {
  return (
    <>
        <LearnHeader/>
        <section className="hero-section pt-160 pb-80 text-white bg-gradient position-relative learnbg">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7 col-md-10">
                        <div className="hero-content-wrap">
                            <span className="grtskilled"> Simulanis Learn Library</span>
                            <h1 className="fw-bold display-5 py-3 mb-0">Get skilled anywhere</h1>
                            <p className="lead">Start you skilling journey with more than 200+ XR ready courses validated by industry specialists and subject matter experts</p>
                            <div className="action-btn mt-5 align-items-center d-block d-sm-flex d-lg-flex d-md-flex">
                                <a href="#" className="btn btn-danger me-3"><i className="fa fa-download"></i> Launcher</a>
                                <a href="https://www.youtube.com/watch?v=wA8G1K9mRdk" className="text-decoration-none popup-youtube d-inline-flex align-items-center watch-now-btn mt-3 mt-lg-0 mt-md-0"> <i className="fas fa-play"></i> Watch Demo </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 offset-md-1  col-md-8 mt-5">
                        <div className="hero-img position-relative circle-shape-images">
                            <div className="position-relative w-100" data-aos="fade-up" data-aos-delay="50">
                                <div className="swiper bannerslider">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="learncard">
                                                <div className="images">
                                                <img src="assets/img/learn/sliderbanner.jpg" alt="" />
                                                </div>

                                                <p><span>Pharmaceutical</span> <span className="userviews"> <i className="fa fa-user"></i> 108 </span></p>
                                                <div className="tirtrrf">
                                                    <h3>Crystallizer</h3>
                                                    <div className="platformicon">
                                                        <ul>
                                                            <li><img src="assets/img/learn/icon/hololens.svg" alt="" /></li>
                                                            <li><img src="assets/img/learn/icon/oculus1.svg" alt="" /></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <p className="descripttfe">This training Module is designed to let the user experience an interactive, engaging, and immersive way of learning the operations of crystallizer machine for crystallization operations in the industry.</p>
                                                <div className="cartbtnrrt mt-3">
                                                    <button className="btn btn-outline-danger btn-sm "><i className="fa fa-cart-shopping"></i> Buy Now</button>
                                                    <button className="btn btn-danger btn-sm "><i className="fa fa-database"></i> Buy bundle</button>
                                                </div>
                                            </div>
                                        </div>
                                          <div className="swiper-slide">
                                            <div className="learncard">
                                                <div className="images">
                                                <img src="assets/img/learn/dispensingisolator.jpg" alt="" />
                                                </div>

                                                <p><span>Pharmaceutical</span> <span className="userviews"> <i className="fa fa-user"></i> 108 </span></p>
                                                <div className="tirtrrf">
                                                    <h3>Dispensing Isolator</h3>
                                                    <div className="platformicon">
                                                        <ul>
                                                            <li><img src="assets/img/learn/icon/hololens.svg" alt="" /></li>
                                                            <li><img src="assets/img/learn/icon/oculus1.svg" alt="" /></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <p className="descripttfe">This training Module is designed to let the user experience an interactive, engaging, and immersive way of learning the operations of dispensing isolator for the product isolation in the industry.</p>
                                                <div className="cartbtnrrt mt-3">
                                                    <button className="btn btn-outline-danger btn-sm "><i className="fa fa-cart-shopping"></i> Buy Now</button>
                                                    <button className="btn btn-danger btn-sm "><i className="fa fa-database"></i> Buy bundle</button>
                                                </div>
                                            </div>
                                          </div>
                                          <div className="swiper-slide">
                                            <div className="learncard">
                                                <div className="images">
                                                <img src="assets/img/learn/trainingmodule.jpg" alt="" />
                                                </div>

                                                <p><span>Automotive</span> <span className="userviews"> <i className="fa fa-user"></i> 108 </span></p>
                                                <div className="tirtrrf">
                                                    <h3>Tuning of Ignition system</h3>
                                                    <div className="platformicon">
                                                        <ul>
                                                            <li><img src="assets/img/learn/icon/hololens.svg" alt="" /></li>
                                                            <li><img src="assets/img/learn/icon/oculus1.svg" alt="" /></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <p className="descripttfe">This training module aims to provide an understanding of the tuning of Ignition system and to equip participants with the necessary knowledge and skills to perform this procedure effectively.</p>
                                                <div className="cartbtnrrt mt-3">
                                                    <button className="btn btn-outline-danger btn-sm "><i className="fa fa-cart-shopping"></i> Buy Now</button>
                                                    <button className="btn btn-danger btn-sm "><i className="fa fa-database"></i> Buy bundle</button>
                                                </div>
                                            </div>
                                          </div>
                                    </div>
                                </div>
                                <div className="swiper-pagination"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

         <section className="counter-with-video ptb-40 bg-light-subtle" id="cyber-about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="cyber-about-img text-center mb-30 mb-lg-0">
                            <img src="assets/img/about_cyber.jpg" alt="VR" className="img-fluid" />
                            <div className="row g-0">
                                <div className="col-lg-5">
                                    <div className="sheild-img">
                                        <img src="assets/img/about2.png" alt="Sheild" className="img-fluid d-none d-lg-block" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="pt-5">
                            <div className="section-heading mb-1">
                                <h5 className="h6 text-primary mb-2">About learn</h5>
                                <h2>Upskill your industrial knowledge with us</h2>
                                <p>
                                    Simulanis is India’s market leader of XR technology. We have been engaged in building applications leveraging AR-VR-MR-XR technologies for learning and development across industries since our inception in 2013
                                </p>
                            </div>
                            <div className="row">
                                <div className="digi-why-right">
                                    <ul className="list-unstyled mb-0 mt-3">
                                        <li className="d-flex p-3 align-items-center bg-white">
                                            <div>
                                                <h4 className="mb-0 number">100+</h4>
                                                <span>Partners</span>
                                            </div>
                                        </li>
                                        <li className="pe-4 d-flex p-3 align-items-center bg-white">
                                            <div>
                                                <h4 className="mb-0 number">20+</h4>
                                                <span>XR-Modules</span>
                                            </div>
                                        </li>
                                        <li className="pe-4 d-flex p-3 align-items-center bg-white">
                                            <div>
                                                <h4 className="mb-0 number">10+</h4>
                                                <span>Countries</span>
                                            </div>
                                        </li>
                                        <li className="pe-4 d-flex p-3 align-items-center bg-white">
                                            <div>
                                                <h4 className="mb-0 number">10,000+</h4>
                                                <span>Trained</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="services-section learnvourses ptb-40">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10">
                        <div className="section-heading text-center">
                            <h2>XR training  module</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        </div>
                    </div>
                </div>
                <div className="row my-4">
                    <div className="col-3">
                         <span className='filtertext'> <div>Filter <FilterAltOutlinedIcon/></div> <span style={{cursor:'pointer'}}>Clear all</span></span>
                    </div>
                    <div className="col-md-4 col-6">
                         <div className="filterpartright">
                            <div className='fsetiond'>
                                <form action="" className="searchfilter">
                                    <SearchRoundedIcon/>
                                    <input type="text" className='form-control' placeholder='search your course' />
                                </form>
                            </div>
                         </div>
                    </div>
                     <div className="col-md-5 col-3">
                        <div className='filtertab'>
                            <ul class="nav justify-content-center feature-tab-list-2" id="nav-tab-2" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" href="#gridview" data-bs-toggle="tab" data-bs-target="#gridview" role="tab" aria-selected="false">
                                        <GridViewOutlinedIcon/>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#listview" data-bs-toggle="tab" data-bs-target="#listview" role="tab" aria-selected="false">
                                       <FormatListBulletedOutlinedIcon/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="filterleft">
                            <div className="platformcheckd">
                                <h5>Platform</h5>
                                <div className="form-check d-flex align-items-center">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="pcvr" />
                                    <label className="form-check-label" for="pcvr">
                                        PC VR
                                    </label>
                                </div>
                                <div className="form-check d-flex align-items-center">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="pc" />
                                    <label className="form-check-label" for="pc">
                                        PC
                                    </label>
                                </div>
                                <div className="form-check d-flex align-items-center">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="maplication" />
                                    <label className="form-check-label" for="maplication">
                                        Mobile Application
                                    </label>
                                </div>
                                <div className="form-check d-flex align-items-center">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="stnalonevr" />
                                    <label className="form-check-label" for="stnalonevr">
                                        Standalone VR
                                    </label>
                                </div>
                                <div className="form-check d-flex align-items-center">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="webgl" />
                                    <label className="form-check-label" for="webgl">
                                        WebGL
                                    </label>
                                </div>
                            </div>
                            <div className="platformcheckd">
                                <h5>Industry specific</h5>
                                <div className="form-check d-flex align-items-center">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="automotive" />
                                    <label className="form-check-label" for="automotive">
                                        Automotive
                                    </label>
                                </div>
                                <div className="form-check d-flex align-items-center">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="pharmaceutical" />
                                    <label className="form-check-label" for="pharmaceutical">
                                        Pharmaceutical
                                    </label>
                                </div>
                                <div className="form-check d-flex align-items-center">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="hse" />
                                    <label className="form-check-label" for="hse">
                                        Health, Safety & Environment
                                    </label>
                                </div>
                                <div className="form-check d-flex align-items-center">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="oilgas" />
                                    <label className="form-check-label" for="oilgas">
                                        Oil and Gas
                                    </label>
                                </div>
                                <div className="form-check d-flex align-items-center">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="construction" />
                                    <label className="form-check-label" for="construction">
                                        Construction
                                    </label>
                                </div>
                                <div className="form-check d-flex align-items-center">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="power" />
                                    <label className="form-check-label" for="power">
                                        Power
                                    </label>
                                </div>
                                <div className="form-check d-flex align-items-center">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="mining" />
                                    <label className="form-check-label" for="mining">
                                        Mining
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div class="tab-content" id="nav-tabContent-2">
                            <div class="tab-pane fade active show" id="gridview" role="tabpanel">
                                <div className="row">
                                    <div className="col-md-4 mb-4">
                                        <div className="learncard">
                                            <div className="images">
                                                <img src="assets/img/learn/sliderbanner.jpg" alt="" />
                                            </div>
                                            <p><span>Pharmaceutical</span> <span className="userviews"> <i className="fa fa-user"></i> 108 </span></p>
                                            <div className="tirtrrf">
                                                <h3>Crystallizer</h3>
                                                <div className="platformicon">
                                                    <ul>
                                                        <li><img src="assets/img/learn/icon/hololens.svg" alt="" /></li>
                                                        <li><img src="assets/img/learn/icon/oculus1.svg" alt="" /></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <p className="descripttfe">This training Module is designed to let the user experience an interactive, engaging, and immersive way of learning the operations of crystallizer machine for crystallization operations in the industry.</p>
                                            <div className="cartbtnrrt mt-3">
                                                <button className="btn btn-outline-danger btn-sm "><i className="fa fa-cart-shopping"></i> Buy Now</button>
                                                <button className="btn btn-outline-primary btn-sm "><i className="fa fa-database"></i> Buy bundle</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <div className="learncard">
                                            <div className="images">
                                                <img src="assets/img/learn/dispensingisolator.jpg" alt="" />
                                            </div>
                                            <p><span>Pharmaceutical</span> <span className="userviews"> <i className="fa fa-user"></i> 108 </span></p>
                                            <div className="tirtrrf">
                                                <h3>Dispensing Isolator</h3>
                                                <div className="platformicon">
                                                    <ul>
                                                        <li><img src="assets/img/learn/icon/hololens.svg" alt="" /></li>
                                                        <li><img src="assets/img/learn/icon/oculus1.svg" alt="" /></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <p className="descripttfe">This training Module is designed to let the user experience an interactive, engaging, and immersive way of learning the operations of dispensing isolator for the product isolation in the industry.</p>
                                            <div className="cartbtnrrt mt-3">
                                                <button className="btn btn-outline-danger btn-sm "><i className="fa fa-cart-shopping"></i> Buy Now</button>
                                                <button className="btn btn-outline-primary btn-sm "><i className="fa fa-database"></i> Buy bundle</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <div className="learncard">
                                            <div className="images">
                                            <img src="assets/img/learn/trainingmodule.jpg" alt="" />
                                            </div>

                                            <p><span>Automotive</span> <span className="userviews"> <i className="fa fa-user"></i> 108 </span></p>
                                            <div className="tirtrrf">
                                                <h3>Tuning of Ignition system</h3>
                                                <div className="platformicon">
                                                    <ul>
                                                        <li><img src="assets/img/learn/icon/hololens.svg" alt="" /></li>
                                                        <li><img src="assets/img/learn/icon/oculus1.svg" alt="" /></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <p className="descripttfe">This training module aims to provide an understanding of the tuning of Ignition system and to equip participants with the necessary knowledge and skills to perform this procedure effectively.</p>
                                            <div className="cartbtnrrt mt-3">
                                                <button className="btn btn-outline-danger btn-sm "><i className="fa fa-cart-shopping"></i> Buy Now</button>
                                                <button className="btn btn-outline-primary btn-sm "><i className="fa fa-database"></i> Buy bundle</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <div className="learncard">
                                            <div className="images">
                                                <img src="assets/img/learn/sliderbanner.jpg" alt="" />
                                            </div>
                                            <p><span>Pharmaceutical</span> <span className="userviews"> <i className="fa fa-user"></i> 108 </span></p>
                                            <div className="tirtrrf">
                                                <h3>Crystallizer</h3>
                                                <div className="platformicon">
                                                    <ul>
                                                        <li><img src="assets/img/learn/icon/hololens.svg" alt="" /></li>
                                                        <li><img src="assets/img/learn/icon/oculus1.svg" alt="" /></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <p className="descripttfe">This training Module is designed to let the user experience an interactive, engaging, and immersive way of learning the operations of crystallizer machine for crystallization operations in the industry.</p>
                                            <div className="cartbtnrrt mt-3">
                                                <button className="btn btn-outline-danger btn-sm "><i className="fa fa-cart-shopping"></i> Buy Now</button>
                                                <button className="btn btn-outline-primary btn-sm "><i className="fa fa-database"></i> Buy bundle</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <div className="learncard">
                                            <div className="images">
                                                <img src="assets/img/learn/dispensingisolator.jpg" alt="" />
                                            </div>
                                            <p><span>Pharmaceutical</span> <span className="userviews"> <i className="fa fa-user"></i> 108 </span></p>
                                            <div className="tirtrrf">
                                                <h3>Dispensing Isolator</h3>
                                                <div className="platformicon">
                                                    <ul>
                                                        <li><img src="assets/img/learn/icon/hololens.svg" alt="" /></li>
                                                        <li><img src="assets/img/learn/icon/oculus1.svg" alt="" /></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <p className="descripttfe">This training Module is designed to let the user experience an interactive, engaging, and immersive way of learning the operations of dispensing isolator for the product isolation in the industry.</p>
                                            <div className="cartbtnrrt mt-3">
                                                <button className="btn btn-outline-danger btn-sm "><i className="fa fa-cart-shopping"></i> Buy Now</button>
                                                <button className="btn btn-outline-primary btn-sm "><i className="fa fa-database"></i> Buy bundle</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <div className="learncard">
                                            <div className="images">
                                            <img src="assets/img/learn/trainingmodule.jpg" alt="" />
                                            </div>

                                            <p><span>Automotive</span> <span className="userviews"> <i className="fa fa-user"></i> 108 </span></p>
                                            <div className="tirtrrf">
                                                <h3>Tuning of Ignition system</h3>
                                                <div className="platformicon">
                                                    <ul>
                                                        <li><img src="assets/img/learn/icon/hololens.svg" alt="" /></li>
                                                        <li><img src="assets/img/learn/icon/oculus1.svg" alt="" /></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <p className="descripttfe">This training module aims to provide an understanding of the tuning of Ignition system and to equip participants with the necessary knowledge and skills to perform this procedure effectively.</p>
                                            <div className="cartbtnrrt mt-3">
                                                <button className="btn btn-outline-danger btn-sm "><i className="fa fa-cart-shopping"></i> Buy Now</button>
                                                <button className="btn btn-outline-primary btn-sm "><i className="fa fa-database"></i> Buy bundle</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="listview" role="tabpanel">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="listviewcourse mb-4">
                                            <div className="learncard">
                                                <div className="images">
                                                    <img src="assets/img/learn/sliderbanner.jpg" alt="" />
                                                </div>
                                                <div className='conseccourse'>
                                                    <div className="tirtrrf">
                                                        <h3>Crystallizer </h3>
                                                        <span className="userviews"> <i className="fa fa-user"></i> 108 </span>
                                                    </div>
                                                    <div className='d-flex'>
                                                        <p><span className='industrydft d-flex'><FactoryOutlinedIcon/> Pharmaceutical</span> </p>
                                                        <div className="platformicon">
                                                            <ul>
                                                                <li><img src="assets/img/learn/icon/hololens.svg" alt="" /></li>
                                                                <li><img src="assets/img/learn/icon/oculus1.svg" alt="" /></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <p className="descripttfe">This training Module is designed to let the user experience an interactive, engaging, and immersive way of learning the operations of crystallizer machine for crystallization operations in the industry.</p>
                                                    <div className="cartbtnrrt mt-3">
                                                        <button className="btn btn-outline-danger btn-sm "><i className="fa fa-cart-shopping"></i> Buy Now</button>
                                                        <button className="btn btn-outline-primary btn-sm "><i className="fa fa-database"></i> Buy bundle</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                       <div className="listviewcourse mb-4">
                                            <div className="learncard">
                                                <div className="images">
                                                    <img src="assets/img/learn/sliderbanner.jpg" alt="" />
                                                </div>
                                                <div className='conseccourse'>
                                                    <div className="tirtrrf">
                                                        <h3>Crystallizer </h3>
                                                        <span className="userviews"> <i className="fa fa-user"></i> 108 </span>
                                                    </div>
                                                    <div className='d-flex'>
                                                        <p><span className='industrydft d-flex'><FactoryOutlinedIcon/> Pharmaceutical</span> </p>
                                                        <div className="platformicon">
                                                            <ul>
                                                                <li><img src="assets/img/learn/icon/hololens.svg" alt="" /></li>
                                                                <li><img src="assets/img/learn/icon/oculus1.svg" alt="" /></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <p className="descripttfe">This training Module is designed to let the user experience an interactive, engaging, and immersive way of learning the operations of crystallizer machine for crystallization operations in the industry.</p>
                                                    <div className="cartbtnrrt mt-3">
                                                        <button className="btn btn-outline-danger btn-sm "><i className="fa fa-cart-shopping"></i> Buy Now</button>
                                                        <button className="btn btn-outline-primary btn-sm "><i className="fa fa-database"></i> Buy bundle</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="listviewcourse mb-4">
                                            <div className="learncard">
                                                <div className="images">
                                                    <img src="assets/img/learn/sliderbanner.jpg" alt="" />
                                                </div>
                                                <div className='conseccourse'>
                                                    <div className="tirtrrf">
                                                        <h3>Crystallizer </h3>
                                                        <span className="userviews"> <i className="fa fa-user"></i> 108 </span>
                                                    </div>
                                                    <div className='d-flex'>
                                                        <p><span className='industrydft d-flex'><FactoryOutlinedIcon/> Pharmaceutical</span> </p>
                                                        <div className="platformicon">
                                                            <ul>
                                                                <li><img src="assets/img/learn/icon/hololens.svg" alt="" /></li>
                                                                <li><img src="assets/img/learn/icon/oculus1.svg" alt="" /></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <p className="descripttfe">This training Module is designed to let the user experience an interactive, engaging, and immersive way of learning the operations of crystallizer machine for crystallization operations in the industry.</p>
                                                    <div className="cartbtnrrt mt-3">
                                                        <button className="btn btn-outline-danger btn-sm "><i className="fa fa-cart-shopping"></i> Buy Now</button>
                                                        <button className="btn btn-outline-primary btn-sm "><i className="fa fa-database"></i> Buy bundle</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="integration-section bg-light-subtle ptb-40">
            <div className="container">
                <div className="row align-items-center justify-content-lg-between">
                    <div className="col-lg-7 col-md-12">
                        <div className="section-heading">
                            <h2>Trusted Clients</h2>
                            <p>We have served more than 120+ enterprises across the globe using our solutions</p>
                        </div>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-12">
                        <div className="integration-wrapper position-relative w-100">
                            <ul className="integration-list list-unstyled mb-0">
                                <li>
                                    <div className="single-integration bg-white">
                                        <img src="assets/img/clients/adityabirla.png" alt="integration" className="img-fluid" />
                                    </div>
                                </li>
                                <li>
                                    <div className="single-integration bg-white">
                                        <img src="assets/img/clients/cairn.png" alt="integration" className="img-fluid" />
                                    </div>
                                </li>
                                <li>
                                    <div className="single-integration bg-white">
                                        <img src="assets/img/clients/iocl.png" alt="integration" className="img-fluid" />
                                    </div>
                                </li>
                                <li>
                                    <div className="single-integration bg-white">
                                        <img src="assets/img/clients/hul.png" alt="integration" className="img-fluid" />
                                    </div>
                                </li>
                                <li>
                                    <div className="single-integration bg-white">
                                        <img src="assets/img/clients/ongc.png" alt="integration" className="img-fluid" />
                                    </div>
                                </li>
                                <li>
                                    <div className="single-integration bg-white">
                                        <img src="assets/img/clients/honeywell.png" alt="integration" className="img-fluid" />
                                    </div>
                                </li>
                                <li>
                                    <div className="single-integration bg-white">
                                        <img src="assets/img/clients/hp.png" alt="integration" className="img-fluid" />
                                    </div>
                                </li>
                                <li>
                                    <div className="single-integration bg-white">
                                        <img src="assets/img/clients/hyundai.png" alt="integration" className="img-fluid" />
                                    </div>
                                </li>
                                <li>
                                    <div className="single-integration bg-white">
                                        <img src="assets/img/clients/sunpharma.png" alt="integration" className="img-fluid" />
                                    </div>
                                </li>
                                <li>
                                    <div className="single-integration bg-white">
                                        <img src="assets/img/clients/lupin.png" alt="integration" className="img-fluid" />
                                    </div>
                                </li>

                                <li>
                                    <div className="single-integration bg-white">
                                        <img src="assets/img/clients/upl.png" alt="integration" className="img-fluid" />
                                    </div>
                                </li>

                                <li>
                                    <div className="single-integration bg-white">
                                        <img src="assets/img/clients/voith.png" alt="integration" className="img-fluid" />
                                    </div>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="testimonial-section ptb-40">
            <div className="container">
                <div className="row justify-content-center align-content-center">
                    <div className="col-md-10 col-lg-8">
                        <div className="section-heading text-center" data-aos="fade-up">
                            <h2>What They Say About Us</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="position-relative w-100" data-aos="fade-up" data-aos-delay="50">
                            <div className="swiper testimonialSwiper">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="border border-2 p-5 rounded-custom position-relative">
                                            <img src="assets/img/testimonial/quotes-dot.svg" alt="quotes" width="100" className="img-fluid position-absolute left-0 top-0 z--1 p-3" />
                                            <div className="d-flex mb-32 align-items-center">
                                                <img src="assets/img/testimonial/1.jpg" className="img-fluid me-3 rounded" width="60" alt="user" />
                                                <div className="author-info">
                                                    <h6 className="mb-0">Mr.Rupan Oberoi</h6>
                                                    <small>Founder and CEO at Amaara Herbs</small>
                                                </div>
                                            </div>
                                            <blockquote>
                                                <h6>The Best Template You Got to Have it!</h6>
                                                Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce
                                                cross-media
                                            </blockquote>
                                            <ul className="review-rate mb-0 mt-2 list-unstyled list-inline">
                                                <li className="list-inline-item"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item"><i className="fas fa-star text-warning"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="border border-2 p-5 rounded-custom position-relative">
                                            <img src="assets/img/testimonial/quotes-dot.svg" alt="quotes" width="100" className="img-fluid position-absolute left-0 top-0 z--1 p-3" />
                                            <div className="d-flex mb-32 align-items-center">
                                                <img src="assets/img/testimonial/3.jpg" className="img-fluid me-3 rounded" width="60" alt="user" />
                                                <div className="author-info">
                                                    <h6 className="mb-0">Oberoi R.</h6>
                                                    <small>CEO at Herbs</small>
                                                </div>
                                            </div>
                                            <blockquote>
                                                <h6>Embarrassed by the First Version.</h6>
                                                Dynamically create innovative core competencies with effective best
                                                practices promote innovative infrastructures.
                                            </blockquote>
                                            <ul className="review-rate mb-0 mt-2 list-unstyled list-inline">
                                                <li className="list-inline-item"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item"><i className="fas fa-star text-warning"></i></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="swiper-slide">
                                        <div className="border border-2 p-5 rounded-custom position-relative">
                                            <img src="assets/img/testimonial/quotes-dot.svg" alt="quotes" width="100" className="img-fluid position-absolute left-0 top-0 z--1 p-3" />
                                            <div className="d-flex mb-32 align-items-center">
                                                <img src="assets/img/testimonial/2.jpg" className="img-fluid me-3 rounded" width="60" alt="user" />
                                                <div className="author-info">
                                                    <h6 className="mb-0">Mr.Rupan Oberoi</h6>
                                                    <small>Founder and CEO</small>
                                                </div>
                                            </div>
                                            <blockquote>
                                                <h6>Amazing Quiety template!</h6>
                                                Appropriately negotiate interactive niches rather than parallel strategic theme
                                                incubate
                                            </blockquote>
                                            <ul className="review-rate mb-0 mt-2 list-unstyled list-inline">
                                                <li className="list-inline-item"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item"><i className="fas fa-star text-warning"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="border border-2 p-5 rounded-custom position-relative">
                                            <img src="assets/img/testimonial/quotes-dot.svg" alt="quotes" width="100" className="img-fluid position-absolute left-0 top-0 z--1 p-3" />
                                            <div className="d-flex mb-32 align-items-center">
                                                <img src="assets/img/testimonial/4.jpg" className="img-fluid me-3 rounded" width="60" alt="user" />
                                                <div className="author-info">
                                                    <h6 className="mb-0">Joan Dho</h6>
                                                    <small>Founder and CTO</small>
                                                </div>
                                            </div>
                                            <blockquote>
                                                <h6>Best Template for SAAS Company!</h6>
                                                Dynamically create innovative core competencies with effective best
                                                practices promote innovative infrastructures.
                                            </blockquote>
                                            <ul className="review-rate mb-0 mt-2 list-unstyled list-inline">
                                                <li className="list-inline-item"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item"><i className="fas fa-star text-warning"></i></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="swiper-slide">
                                        <div className="border border-2 p-5 rounded-custom position-relative">
                                            <img src="assets/img/testimonial/quotes-dot.svg" alt="quotes" width="100" className="img-fluid position-absolute left-0 top-0 z--1 p-3" />
                                            <div className="d-flex mb-32 align-items-center">
                                                <img src="assets/img/testimonial/5.jpg" className="img-fluid me-3 rounded" width="60" alt="user" />
                                                <div className="author-info">
                                                    <h6 className="mb-0">Ranu Mondal</h6>
                                                    <small>Lead Developer</small>
                                                </div>
                                            </div>
                                            <blockquote>
                                                <h6>It is undeniably good!</h6>
                                                Rapidiously supply client-centric e-markets and maintainable processes
                                                progressively engineer
                                            </blockquote>
                                            <ul className="review-rate mb-0 mt-2 list-unstyled list-inline">
                                                <li className="list-inline-item"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item"><i className="fas fa-star text-warning"></i></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="swiper-nav-control">
                                <span className="swiper-button-next"></span>
                                <span className="swiper-button-prev"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
        <section className="work-process wprocessef bg-light-subtle ptb-40">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8">
                        <div className="section-heading text-center">
                            <h2>Upskill your industrial knowledge with us</h2>
                            <p>Get access to industrial courses, assessments, knowledge repositories, and professional certificates on Simulanis LEARN, trusted by leading industries and companies.  </p>
                        </div>
                    </div>
                </div>
                <div className="row d-flex align-items-center">
                    <div className="col-md-6 col-lg-3">
                        <div className="process-card text-center px-4 py-lg-5 py-4 rounded-custom shadow-hover mb-3 mb-lg-0">
                            <img src="assets/img/learn/industry-img1.png" alt="" />
                            <h3 className="h5">Hands on Training</h3>
                            <p className="mb-0">Learn new industry skills using the ‘learn-by-doing’ pedagogy</p>
                        </div>
                    </div>
                    <div className="dots-line first"></div>
                    <div className="col-md-6 col-lg-3">
                        <div className="process-card text-center px-4 py-lg-5 py-4 rounded-custom shadow-hover mb-3 mb-lg-0">
                            <img src="assets/img/learn/industry-img4.png" alt="" />
                            <h3 className="h5">Save Money</h3>
                            <p className="mb-0">Save time by enabling faster learning in an immersive and engaging fashion</p>
                        </div>
                    </div>
                    <div className="dots-line first"></div>
                    <div className="col-md-6 col-lg-3">
                        <div className="process-card text-center px-4 py-lg-5 py-4 rounded-custom shadow-hover mb-3 mb-lg-0 mb-md-0">
                            <img src="assets/img/learn/industry-img3.png" alt="" />
                            <h3 className="h5">Completion Certificates</h3>
                            <p className="mb-0">Get certified post successful competition of your every course</p>
                        </div>
                    </div>
                    <div className="dots-line first"></div>
                    <div className="col-md-6 col-lg-3">
                        <div className="process-card text-center px-4 py-lg-5 py-4 rounded-custom shadow-hover mb-0">
                            <img src="assets/img/learn/industry-img2.png" alt="" />
                            <h3 className="h5">Industry 5.0 Ready</h3>
                            <p className="mb-0">Get job ready by digitally learning industry 5.0 skills</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="work-process featuredcourses ptb-40">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8">
                        <div className="section-heading text-center">
                            <h2>Featured Courses</h2>
                            <p>  </p>
                        </div>
                    </div>
                </div>
                <div className="row d-flex align-items-center">
                    <div className="col-md-4 mb-4">
                        <div className="learncard">
                            <div className="images">
                                <img src="assets/img/learn/sliderbanner.jpg" alt="" />
                            </div>
                            <p><span>Pharmaceutical</span> <span className="userviews"> <i className="fa fa-user"></i> 108 </span></p>
                            <div className="tirtrrf">
                                <h3>Crystallizer</h3>
                                <div className="platformicon">
                                    <ul>
                                        <li><img src="assets/img/learn/icon/hololens.svg" alt="" /></li>
                                        <li><img src="assets/img/learn/icon/oculus1.svg" alt="" /></li>
                                    </ul>
                                </div>
                            </div>
                            <p className="descripttfe">This training Module is designed to let the user experience an interactive, engaging, and immersive way of learning the operations of crystallizer machine for crystallization operations in the industry.</p>
                            <div className="cartbtnrrt mt-3">
                                <button className="btn btn-outline-danger btn-sm "><i className="fa fa-cart-shopping"></i> Buy Now</button>
                                <button className="btn btn-outline-primary btn-sm "><i className="fa fa-database"></i> Buy bundle</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="learncard">
                            <div className="images">
                                <img src="assets/img/learn/dispensingisolator.jpg" alt="" />
                            </div>
                            <p><span>Pharmaceutical</span> <span className="userviews"> <i className="fa fa-user"></i> 108 </span></p>
                            <div className="tirtrrf">
                                <h3>Dispensing Isolator</h3>
                                <div className="platformicon">
                                    <ul>
                                        <li><img src="assets/img/learn/icon/hololens.svg" alt="" /></li>
                                        <li><img src="assets/img/learn/icon/oculus1.svg" alt="" /></li>
                                    </ul>
                                </div>
                            </div>
                            <p className="descripttfe">This training Module is designed to let the user experience an interactive, engaging, and immersive way of learning the operations of dispensing isolator for the product isolation in the industry.</p>
                            <div className="cartbtnrrt mt-3">
                                <button className="btn btn-outline-danger btn-sm "><i className="fa fa-cart-shopping"></i> Buy Now</button>
                                <button className="btn btn-outline-primary btn-sm "><i className="fa fa-database"></i> Buy bundle</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="learncard">
                            <div className="images">
                                <img src="assets/img/learn/trainingmodule.jpg" alt="" />
                            </div>
                            <p><span>Automotive</span> <span className="userviews"> <i className="fa fa-user"></i> 108 </span></p>
                            <div className="tirtrrf">
                                <h3>Tuning of Ignition system</h3>
                                <div className="platformicon">
                                    <ul>
                                        <li><img src="assets/img/learn/icon/hololens.svg" alt="" /></li>
                                        <li><img src="assets/img/learn/icon/oculus1.svg" alt="" /></li>
                                    </ul>
                                </div>
                            </div>
                            <p className="descripttfe">This training module aims to provide an understanding of the tuning of Ignition system and to equip participants with the necessary knowledge and skills to perform this procedure effectively.</p>
                            <div className="cartbtnrrt mt-3">
                                <button className="btn btn-outline-danger btn-sm "><i className="fa fa-cart-shopping"></i> Buy Now</button>
                                <button className="btn btn-outline-primary btn-sm "><i className="fa fa-database"></i> Buy bundle</button>
                            </div>
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

export default Learn