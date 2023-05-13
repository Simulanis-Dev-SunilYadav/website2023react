import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import Productivity from './components/home/products/assist/Productivity'
import Creator from './components/home/products/creator/Creator'
import Metaverse from './components/home/products/metaverse/Metaverse'
import RemoteAssist from './components/home/products/assist/RemoteAssist'
import Learn from './components/home/products/learn/Learn'
import DynamicAssist from './components/home/products/assist/DynamicAssist'
import LearnDetail from './components/home/products/learn/LearnDetail'
import CourseList from './components/home/products/learn/CourseList'
import Blogs from './components/blogs/Blogs'
import BlogsDetail from './components/blogs/BlogsDetail'
import About from './components/aboutus/About'
import Awards from './components/aboutus/Awards'
import Login from './components/authentication/Login'
import SignUp from './components/authentication/SignUp'
import BecomePartner from './components/partner/BecomePartner'
import Partnerships from './components/partner/Partnerships'
import Career from './components/career/Career'
import CareerDetail from './components/career/CareerDetail'
import ApplyNow from './components/career/ApplyNow'
import CaseStudy from './components/case_study/CaseStudy'
import SalesSupport from './components/support/SalesSupport'
import TechnicalSupport from './components/support/TechnicalSupport'
import CaseStudyDetail from './components/case_study/CaseStudyDetail'
import CoeSetup from './components/services/CoeSetup'
import VideosAnimations from './components/services/VideosAnimations'
import UseCases from './components/usecase/UseCases'
import UseCaseDetail from './components/usecase/UseCaseDetail'
import CustomSolutions from './components/services/customsolutions/CustomSolutions'
import AR from './components/services/customsolutions/AR'
import VR from './components/services/customsolutions/VR'
import MR from './components/services/customsolutions/MR'
import OurValues from './components/aboutus/OurValues'
import News from './components/aboutus/news/News'
import NewsAll from './components/aboutus/news/NewsAll'
import EventsAll from './components/aboutus/news/EventsAll'
import Faq from './components/faq/Faq'
import Clients from './components/clients/Clients'
import GetInTouch from './components/contactus/GetInTouch'


function Routers() {
  return (
    <>
        <Routes>
            <Route path= "/" element = {<Home/>}/>
            <Route path="/assist" element={<Productivity/>} />
            <Route path="/remote-assist" element={<RemoteAssist/>} />
            <Route path="/dynamic-assist" element={<DynamicAssist/>} />
            <Route path="/creator" element={<Creator/>} />
            <Route path="/engage" element={<Metaverse/>} />
            <Route path="/learn" element={<Learn/>} />
            <Route path="/learn-detail" element={<LearnDetail/>} />
            <Route path="/course-list" element={<CourseList/>} />

            {/* Blogs */}
            <Route path="/blogs" element={<Blogs/>}/>
            <Route path="/blogs-detail" element={<BlogsDetail/>}/>

            {/* About */}
            <Route path="/about" element={<About/>}/>
            <Route path="/awards" element={<Awards/>}/>
            <Route path="/our-values" element={<OurValues/>}/>
            <Route path="/news" element={<News/>}/>
            <Route path="/news-list" element={<NewsAll/>}/>
            <Route path="/events-list" element={<EventsAll/>}/>

            {/* Authentication */}
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>

            {/* Patrtner */}
            <Route path="/partnerships" element={<Partnerships/>} />
            <Route path="/become-partner" element={<BecomePartner/>} />

            {/* Career */}
            <Route path="/career" element={<Career/>}/>
            <Route path="/career-detail" element={<CareerDetail/>}/>
            <Route path="/applynow" element={<ApplyNow/>}/>

            {/* Case Study */}
            <Route path="/case-study" element={<CaseStudy/>} />
            <Route path="/case-study-detail" element={<CaseStudyDetail/>} />
            
            {/* Support */}
            <Route path="/sales-support" element={<SalesSupport/>}/>
            <Route path="/technical-support" element={<TechnicalSupport/>}/>

            {/* Get in touch */}
            <Route path="/get-in-touch" element={<GetInTouch/>} />

            {/* Services */}
            <Route path="/coe-setup" element={<CoeSetup/>}/>
            <Route path="/videos-and-animations" element={<VideosAnimations/>}/>
            <Route path="/custom-solutions" element={<CustomSolutions/>}/>
            <Route path="/augmented-reality" element={<AR/>}/>
            <Route path="/virtual-reality" element={<VR/>}/>
            <Route path="/mixed-reality" element={<MR/>}/>

            {/* Use Cases */}
            <Route path="/use-cases" element={<UseCases/>}/>
            <Route path="/use-case-detail" element={<UseCaseDetail/>}/>

            {/* Faq */}
            <Route path="/faq" element={<Faq/>}/>
            
            {/* ClientsList */}
            <Route path="/clients" element={<Clients/>}/>
            

        </Routes>
    </>
  )
}

export default Routers