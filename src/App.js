import React from 'react'
import { HeadNav } from './atoms/Atoms'
import { Route, Routes } from 'react-router-dom'
import Home from './user/pages/Home'
import About from './user/pages/About'
import Contact from './user/pages/Contact'
import Dashboard from './admin/pages/Dashboard'
import Manage from './admin/pages/Manage'

const App = () => {

  let role ="user"

  if(role==="user"){
    return (
      <>
        <HeadNav element={role} />
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </>
    )
  }
  else if(role==="admin"){
    return(
      <>
        <HeadNav element={role} />
        <Routes>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/manage' element={<Manage/>} />
        </Routes>
      </>
    )
  }
  else{
    return(
      <h1>Something Went Wrong !!!</h1>
    )
  }

  
}

export default App
