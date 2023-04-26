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
        </Routes>
    </>
  )
}

export default Routers