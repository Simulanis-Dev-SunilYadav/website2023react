import React from 'react'
import LearnHeader from '../../../common/LearnHeader'
import Footer from '../../../common/Footer'
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import FactoryOutlinedIcon from '@mui/icons-material/FactoryOutlined';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import SmartphoneOutlinedIcon from '@mui/icons-material/SmartphoneOutlined';

function CourseList() {
  return (
    <>
        <LearnHeader/>
            <section className="page-header position-relative overflow-hidden pt-160 pb-80 bg-dark detailbg">
                <div className="container">
                    <div className="row mt-4">
                        <div className="col-lg-7 col-md-12">
                            <h1 className="display-3">XR training module</h1>
                            <p className="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            {/* <div className='d-flex align-items-center'>
                                <h6>Supported Platform :</h6>
                                <ul className='platformicon'>
                                    <li className='px-1'>
                                        <DesktopWindowsOutlinedIcon/>
                                    </li>
                                    <li className='px-1'>
                                        <SmartphoneOutlinedIcon/>
                                    </li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                    <div className="bg-circle rounded-circle circle-shape-3 position-absolute bg-dark-light right-5"></div>
                </div>
            </section>
            <section className="services-section learnvourses bg-light-subtle ptb-40">
                <div className="container">
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
        <Footer/>
    </>
  )
}

export default CourseList