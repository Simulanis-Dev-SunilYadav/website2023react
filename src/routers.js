import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
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

            {/* Services */}
            <Route path="/coe-setup" element={<CoeSetup/>}/>
            <Route path="/videos-and-animations" element={<VideosAnimations/>}/>
            <Route path="/custom-solutions" element={<CustomSolutions/>}/>

            {/* Use Cases */}
            <Route path="/use-cases" element={<UseCases/>}/>
            <Route path="/use-case-detail" element={<UseCaseDetail/>}/>

        </Routes>
    </>
  )
}

export default Routers