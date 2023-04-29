import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'

function About() {
  return (
    <>
        <Header/>
         <section className="event-hero ptb-120 aboutbg">
            <div className="position-relative">
                <div className="container">
                    <div className="row align-items-md-center">
                        <div className="col-lg-6">
                            <div className="event-hero-content">
                                <h1 className="fw-bold display-5">India’s Most Awarded  XR Company.</h1>
                                <p>Simulanis is a multi-award winning XR technology company dedicated to delivering excellence in creating some of the most engaging, interactive and immersive AR-VR applications. We started back in November 2013, and have been pioneering the application of AR-VR-MR / XR technologies for industrial training across manufacturing-based sectors such as pharmaceutical, FMCG, automotive, engineering, automation, oil and gas, paints, power, energy, and chemicals to name a few. </p>
                                <p></p>
                                <div className="action-btns mt-4 align-items-center d-block d-sm-flex d-lg-flex d-md-flex">
                                    <a href="#" className="btn btn-danger bg-danger me-3 mb-3">Get Started</a>
                                    <a href="#our-team"  className="btn border-danger text-danger mb-3">Meet Our Team</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="mt-5 mt-lg-0 event-hero-img">
                                <img src="assets/img/about/about-img-1.png" className="img-fluid" alt="Event" />
                                <a href="https://www.youtube.com/watch?v=jiSeqYn6CrU" className="popup-youtube">
                                    <i className="fas fa-play"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <ul className="list-unstyled ev-hero-shape d-none d-xl-block m-0">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li>
                            <img src="assets/img/event/square.png" alt="shape" />
                        </li>
                    </ul>
                </div>
            </div>
        </section>

       <section className="our-story-section pt-60 pb-60 journerybg">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-6 col-md-12 order-lg-1">
                        <div className="section-heading sticky-sidebar ps-4">
                            <h2>The Meritorious Journey</h2>
                            <p>Earliest pacesetter in the domain, we have achieved certain milestones by leveraging the AR-VR-MR / XR technologies to revolutionize conventional training across the industries. </p>
                            <h3>Mission </h3>
                            <p>“Empowering individuals to safely enhance their skills and driving organizations to increase operational efficiency by leveraging cutting-edge XR technologies across hazardous manufacturing-based industries.”</p>
                            <h3>Vision</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 order-lg-0">
                        <div className="story-grid-wrapper position-relative">
                            <div className="story-grid rounded-custom bg-dark overflow-hidden position-relative">
                                <div className="story-item bg-light-subtle border">
                                    <h3 className="display-5 fw-bold mb-1 text-warning">10+ </h3>
                                    <h6 className="mb-0">Years In Business</h6>
                                </div>
                                <div className="story-item bg-light-subtle border">
                                    <h3 className="display-5 fw-bold mb-1 text-danger">120+</h3>
                                    <h6 className="mb-0">Clients Worldwide</h6>
                                </div>
                                <div className="story-item bg-light-subtle border">
                                    <h3 className="display-5 fw-bold mb-1 text-success">6+</h3>
                                    <h6 className="mb-0">Products</h6>
                                </div>
                                <div className="story-item bg-light-subtle border">
                                    <h3 className="display-5 fw-bold mb-1 text-primary">855+</h3>
                                    <h6 className="mb-0">Projects</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


                <section className=" support-content ptb-40 bg-light-subtle">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-md-8">
                        <h2>Our meritorious journey</h2>
                        <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                    </div>
                </div>
                <div className="row justify-content-between mt-5">
                    <div className="col-lg-3 col-md-4">
                        <div className="support-article-sidebar sticky-sidebar">
                            <div className="nav flex-column nav-pills support-article-tab bg-light-subtle" id="v-pills-support" role="tablist" aria-orientation="vertical">
                                <button className="nav-link active" data-bs-target="#support-tab-1" data-bs-toggle="pill" type="button" role="tab" aria-selected="true">Year-2023</button>
                                <button className="nav-link" data-bs-target="#support-tab-2" data-bs-toggle="pill" type="button" role="tab" aria-selected="false">Year-2022</button>
                                <button className="nav-link" data-bs-target="#support-tab-3" data-bs-toggle="pill" type="button" role="tab" aria-selected="false">Year-2021</button>
                                <button className="nav-link" data-bs-target="#support-tab-4" data-bs-toggle="pill" type="button" role="tab" aria-selected="false">Year-2020</button>
                                <button className="nav-link" data-bs-target="#support-tab-5" data-bs-toggle="pill" type="button" role="tab" aria-selected="false">Year-2019</button>
                                <button className="nav-link" data-bs-target="#support-tab-6" data-bs-toggle="pill" type="button" role="tab" aria-selected="false">Year-2018</button>
                                <button className="nav-link" data-bs-target="#support-tab-7" data-bs-toggle="pill" type="button" role="tab" aria-selected="false">Year-2017</button>
                                <button className="nav-link" data-bs-target="#support-tab-8" data-bs-toggle="pill" type="button" role="tab" aria-selected="false">Year-2016</button>
                                <button className="nav-link" data-bs-target="#support-tab-9" data-bs-toggle="pill" type="button" role="tab" aria-selected="false">Year-2015</button>
                                <button className="nav-link" data-bs-target="#support-tab-10" data-bs-toggle="pill" type="button" role="tab" aria-selected="false">Year-2014</button>
                                <button className="nav-link" data-bs-target="#support-tab-11" data-bs-toggle="pill" type="button" role="tab" aria-selected="false">Year-2013</button>
                            </div> 
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-8">
                        <div className="tab-content" id="v-pills-supportContent">
                            <div className="tab-pane fade show active" id="support-tab-1" role="tabpanel">
                                <div className="support-article-wrap">
                                    <h2>Lorem Ipsum</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    <img src="assets/img/about/journey/2023.jpg" alt="" />
                                </div>
                            </div>
                            <div className="tab-pane fade" id="support-tab-2" role="tabpanel">
                                <div className="support-article-wrap">
                                    <h2>Lorem Ipsum</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    <img src="assets/img/about/journey/2022.jpg" alt="" />
                                </div>
                            </div>
                            <div className="tab-pane fade" id="support-tab-3" role="tabpanel">
                                <div className="support-article-wrap">
                                    <h2>Lorem Ipsum</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    <img src="assets/img/about/journey/2021.jpg" alt="" />
                                </div>
                            </div>
                            <div className="tab-pane fade" id="support-tab-4" role="tabpanel">
                                <div className="support-article-wrap">
                                    <h2>Rise of XR hardware</h2>
                                    <p>In 2020, we launched REFLEXIS - India’s first haptic VR gloves and its SDK that are completely compatible with our XR software thus providing a whole new level of immersive training experience. We also launched our driving simulator and scaffold simulator in the same year come</p>
                                    <img src="assets/img/about/journey/2021.jpg" alt="" />
                                </div>
                            </div>
                            <div className="tab-pane fade" id="support-tab-5" role="tabpanel">
                                <div className="support-article-wrap">
                                    <h2>Year of Simulators</h2>
                                    <p>The year 2019 or as we like to call it the “Year of Simulators”. With pioneering in the XR software space we made a leap into the simulator market where we built XR software integrated with real industry equipment (paint gun and welding gun) and accompanied with 4D effects.</p>
                                    <img src="assets/img/about/journey/yearofsimulatos.jpg" alt="" />
                                </div>
                            </div>
                            <div className="tab-pane fade" id="support-tab-6" role="tabpanel">
                                <div className="support-article-wrap">
                                    <h2>The birth of Sanalexa</h2>
                                    <p>The year 2018 was a step further towards innovation into the field of XR for us as we built our comprehensive data analytics suite SANALEXA, a one-stop Data Analytics Suite to scientifically measure and adequately evaluate the performance of industrious workers as they get adequately trained on XR technologies along with the psychological and physiological assessments of the employees</p>
                                    <img src="assets/img/about/journey/yearofsimulatos.jpg" alt="" />
                                </div>
                            </div>
                            <div className="tab-pane fade" id="support-tab-7" role="tabpanel">
                                <div className="support-article-wrap">
                                    <h2>Pioneering the technology</h2>
                                    <p>Since 2017 onwards, we have pioneered deployments of AR, VR, MR, 3D Gamification on Desktop, Web and Mobile applications across a plethora of industrial sectors, and built a suite of generic products leveraging a proprietary 4-layer framework honing years of experience and deep domain expertise of deploying applications for over 120 Fortune-500 enterprises.</p>
                                    <img src="assets/img/about/journey/pioneering_technology.jpg" alt="" />
                                </div>
                            </div>
                            <div className="tab-pane fade" id="support-tab-8" role="tabpanel">
                                <div className="support-article-wrap">
                                    <h2>The start of VR worlds</h2>
                                    <p>Even at this juncture, consumer and enterprise grade VR-AR technologies were nascent worldwide and only matured towards the start of 2016. Coincidentally, at the same time towards the end of 2015, post our failure to achieve product-market fit with AR and 3D Gamification technologies in the higher (engineering) education space, we pivoted our focus to leverage AR, 3D Gamification and VR technologies for industrial training use-cases, and deployed applications as we headed deeper into 2016 within the pharmaceutical and FMCG sector to start with becoming one of the firsts to do so in India.</p>
                                    <img src="assets/img/about/journey/startvr.png" alt="" />
                                </div>
                            </div>
                            <div className="tab-pane fade" id="support-tab-9" role="tabpanel">
                                <div className="support-article-wrap">
                                    <h2>The shift to gamification</h2>
                                    <p className="mb-1">We soon realized that technical engineering knowhow is best suited to be learnt through interactive tools. That’s when, towards the start of 2015, we shifted focus on leveraging 3D gamification and AR technologies for the higher education sector.</p>
                                    <p>Post shifting focus on leveraging 3D gamification and AR technologies for the higher education sector, during the entire year of 2015, we spent considerable time in performing market validation and ultimately failed to achieve a product-market fit in the form of sales and traction. This called for a pivot as we headed into 2016.</p>
                                    <img src="assets/img/about/journey/gamification.png" alt="" />
                                </div>
                            </div>
                            <div className="tab-pane fade" id="support-tab-10" role="tabpanel">
                                <div className="support-article-wrap">
                                    <h2>Classroom based training</h2>
                                    <p>In 2014, we expanded the list of courses to incorporate common engineering topics encapsulating operations, repair, maintenance and troubleshooting across industries, and shifted the mode of delivery from presenter-led to online video-based.</p>
                                    <img src="assets/img/about/journey/classroom.jpg" alt="" />
                                </div>
                            </div>
                            <div className="tab-pane fade" id="support-tab-11" role="tabpanel">
                                <div className="support-article-wrap">
                                    <h2>Starting up!</h2>
                                    <p>It all started in a wintery November of 2013 on the 23rd when we commenced our business as a training services business.</p>
                                    <p>Started our business in November 2013 as an engineering and corporate training services company delivering trainer-led computer-aided-engineering (CAE) courses (viz. process modelling and simulation, VBA / C / Java coding for engineers, mathematical optimization and stochastic programming). We formed a band of trainers and delivered lectures in colleges and in our own office.</p>
                                    <img src="assets/img/about/journey/startingup.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


                <section className="feature-section-two ptb-40 ">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="section-heading">
                            <h4 className="h5 text-primary">The three engines of our Growth</h4>
                            <h2>Design, Development & Engineering</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            <ul className="list-unstyled mt-5">
                                <li className="d-flex align-items-start mb-4">
                                    <div className="icon-box bg-primary rounded me-4">
                                        <i className="fas fa-bezier-curve text-white"></i>
                                    </div>
                                    <div className="icon-content">
                                        <h3 className="h5">Design</h3>
                                        <p>Blessed with incredible design talent since inception, we blend the highest level of creativity in all our designs encompassing all XR applications.</p>
                                    </div>
                                </li>
                                <li className="d-flex align-items-start mb-4">
                                    <div className="icon-box bg-danger rounded me-4">
                                        <i className="fas fa-fingerprint text-white"></i>
                                    </div>
                                    <div className="icon-content">
                                        <h3 className="h5">Development</h3>
                                        <p>Always ready to take the plunge 7 into the unknown and come up with the goods when needed, our development team is our biggest asset.</p>
                                    </div>
                                </li>
                                <li className="d-flex align-items-start mb-4">
                                    <div className="icon-box bg-dark rounded me-4">
                                        <i className="fas fa-cog text-white"></i>
                                    </div>
                                    <div className="icon-content">
                                        <h3 className="h5">Engineering</h3>
                                        <p>Our execution arms uniquely position us in the industry. Our core technical engineering team adds technical expertise to all XR applications we develop.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-7">
                        <div className="feature-img-wrap position-relative d-flex flex-column align-items-end">
                            <ul className="img-overlay-list list-unstyled position-absolute">
                                <li className="d-flex align-items-center bg-white rounded shadow-sm p-3">
                                    <i className="fas fa-check bg-primary text-white rounded-circle"></i>
                                    <h6 className="mb-0">Lorem Ipsum is simply</h6>
                                </li>
                                <li className="d-flex align-items-center bg-white rounded shadow-sm p-3">
                                    <i className="fas fa-check bg-primary text-white rounded-circle"></i>
                                    <h6 className="mb-0">Lorem Ipsum is simply</h6>
                                </li>
                                <li className="d-flex align-items-center bg-white rounded shadow-sm p-3">
                                    <i className="fas fa-check bg-primary text-white rounded-circle"></i>
                                    <h6 className="mb-0">Lorem Ipsum is simply</h6>
                                </li>
                            </ul>
                            <img src="assets/img/feature-img3.jpg" alt="feature image" className="img-fluid rounded-custom" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

                <section id="our-team" className="team-section ptb-40 bg-light-subtle">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="row align-items-center">
                            <div className="col-md-4">
                                <img src="assets/img/about/team/raman_talwar.png" alt="" />
                            </div>
                            <div className="col-md-7 offset-md-1">
                                <h3 className="ceoname">Raman Talwar</h3>
                                <h6>Founder, Director and CEO</h6>
                                <p className="mb-0">Raman Talwar is a well decorated, top-rank holder and a multi-award winning Masters in Chemical Engineering with Honours in Research (MEng. Hons.) from the University of Manchester (UK). His core interests lie in the development and application of process simulation and optimization models to solve real world problems. He also takes a keen interest in the field of computer-aided design and development of process safety solutions applicable across a range of industries including oil & gas, pharmaceutical and chemicals.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-12">
                        <div className="section-heading text-center">
                            <h2>The People Behind Simulanis</h2>
                            <p>An eclectic mix of super-passionate go-getters  who don’t take “NO” for an answer</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 col-lg-3 col-md-6">
                        <div className="team-single-wrap mb-4">
                            <div className="team-img rounded-custom">
                                <img src="assets/img/about/team/Rohit_Sharma.png" alt="team" className="img-fluid position-relative" />
                                <ul className="list-unstyled team-social-list d-flex flex-column mb-0">
                                    <li className="list-inline-item"><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fab fa-github"></i></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                </ul>
                            </div>
                            <div className="team-info text-center">
                                <h5 className="h6 mb-1">Rohit Sharma</h5>
                                <p className="small mb-0">Chief Technology Officer</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 col-md-6">
                        <div className="team-single-wrap mb-4">
                            <div className="team-img rounded-custom">
                                <img src="assets/img/about/team/Punit_Kumar.png" alt="team" className="img-fluid position-relative" />
                                <ul className="list-unstyled team-social-list d-flex flex-column mb-0">
                                    <li className="list-inline-item"><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fab fa-github"></i></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                </ul>
                            </div>
                            <div className="team-info text-center">
                                <h5 className="h6 mb-1">Punit Kumar</h5>
                                <p className="small mb-0">Chief Operations Office</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 col-md-6">
                        <div className="team-single-wrap mb-4">
                            <div className="team-img rounded-custom">
                                <img src="assets/img/about/team/Neeraj_Chouhan.png" alt="team" className="img-fluid position-relative" />
                                <ul className="list-unstyled team-social-list d-flex flex-column mb-0">
                                    <li className="list-inline-item"><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fab fa-github"></i></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                </ul>
                            </div>
                            <div className="team-info text-center">
                                <h5 className="h6 mb-1">Neeraj Chouhan</h5>
                                <p className="small mb-0">Chief Product Manager</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 col-md-6">
                        <div className="team-single-wrap mb-4">
                            <div className="team-img rounded-custom">
                                <img src="assets/img/about/team/Ritesh_Kumar.png" alt="team" className="img-fluid position-relative" />
                                <ul className="list-unstyled team-social-list d-flex flex-column mb-0">
                                    <li className="list-inline-item"><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fab fa-github"></i></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                </ul>
                            </div>
                            <div className="team-info text-center">
                                <h5 className="h6 mb-1">Ritesh Kumar</h5>
                                <p className="small mb-0">Chief Metaverse Designer</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 col-md-6">
                        <div className="team-single-wrap mb-4">
                            <div className="team-img rounded-custom">
                                <img src="assets/img/about/team/Arjun_Sharma.png" alt="team" className="img-fluid position-relative" />
                                <ul className="list-unstyled team-social-list d-flex flex-column mb-0">
                                    <li className="list-inline-item"><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fab fa-github"></i></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                </ul>
                            </div>
                            <div className="team-info text-center">
                                <h5 className="h6 mb-1">Arjun Sharma</h5>
                                <p className="small mb-0">Chief Business Officer</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 col-md-6">
                        <div className="team-single-wrap mb-4">
                            <div className="team-img rounded-custom">
                                <img src="assets/img/about/team/Yatin_Chopra.png" alt="team" className="img-fluid position-relative" />
                                <ul className="list-unstyled team-social-list d-flex flex-column mb-0">
                                    <li className="list-inline-item"><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fab fa-github"></i></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                </ul>
                            </div>
                            <div className="team-info text-center">
                                <h5 className="h6 mb-1">Yatin Chopra</h5>
                                <p className="small mb-0">Chief Creative Officer</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 col-md-6">
                        <div className="team-single-wrap mb-4">
                            <div className="team-img rounded-custom">
                                <img src="assets/img/about/team/Niraj_Mishra.png" alt="team" className="img-fluid position-relative" />
                                <ul className="list-unstyled team-social-list d-flex flex-column mb-0">
                                    <li className="list-inline-item"><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fab fa-github"></i></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                </ul>
                            </div>
                            <div className="team-info text-center">
                                <h5 className="h6 mb-1">Niraj Mishra</h5>
                                <p className="small mb-0">Chief Information Officer</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3 col-md-6">
                        <div className="team-single-wrap mb-4">
                            <div className="team-img rounded-custom">
                                <img src="assets/img/about/team/Sunil_Tiwari.png" alt="team" className="img-fluid position-relative" />
                                <ul className="list-unstyled team-social-list d-flex flex-column mb-0">
                                    <li className="list-inline-item"><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fab fa-github"></i></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                </ul>
                            </div>
                            <div className="team-info text-center">
                                <h5 className="h6 mb-1">Sunil Tiwari</h5>
                                <p className="small mb-0">Chief Project Officer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

                <section className="teamgallery">
            <div className="gallery">
                <div className="gbox">
                        <a href="javascript:;" className="big"><img src="assets/img/about/gallery/10.JPG" alt="" title="Beautiful Image" /></a>
                    <div className="smallbox">
                        <a href="javascript:;"><img src="assets/img/about/gallery/2.JPG" alt="" title="" /></a>
                        <a href="javascript:;"><img src="assets/img/about/gallery/3.JPG" alt="" title="Beautiful Image" /></a>
                    </div>
                </div>

                <div className="gbox">
                    <div className="smallbox">
                        <a href="javascript:;"><img src="assets/img/about/gallery/4.JPG" alt="" title="" /></a>
                        <a href="javascript:;"><img src="assets/img/about/gallery/5.JPG" alt="" title="" /></a>
                    </div>
                    <div className="imgplaybtn">
                        <div className="popupbtn">
                            <a href="https://www.youtube.com/watch?v=8Y964JZ_bqI" className="popup-youtube">
                                <i className="fas fa-play"></i>
                            </a>
                        </div>
                    </div>
                </div>
            
            
                <div className="gbox">
                        <a href="javascript:;" className="big"><img src="assets/img/about/gallery/11.JPG" alt="" title="" /></a>
                    <div className="smallbox">
                        <a href="javascript:;"><img src="assets/img/about/gallery/7.JPG" alt="" title="" /></a>
                        <a href="javascript:;"><img src="assets/img/about/gallery/1.JPG" alt="" title="" /></a>
                    </div>
                </div>

                <div className="clear"></div>
            </div>
        </section>
        
        <Footer/>

    </>
  )
}

export default About