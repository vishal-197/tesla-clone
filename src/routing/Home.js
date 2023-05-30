import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './Nav'
import Main from './Main'
import About from './About'
import Blog from './Blog'
import Contact from './Contact'
import Forzero from './Forzero'
import SingleBlog from './SingleBlog'
import BlogParent from './BlogParent'

function Home() {
  return (
<BrowserRouter>
<Nav/>
<Routes>
<Route path='/' element={<Main/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/blog' element={<BlogParent/>}>

  <Route index element={<Blog/>}/>
  <Route path='/blog/:id' element={<SingleBlog/>}/>

</Route>

<Route path='/contact' element={<Contact/>}/>
<Route path='*' element={<Forzero/>}/>
</Routes>

</BrowserRouter>
  )
}

export default Home