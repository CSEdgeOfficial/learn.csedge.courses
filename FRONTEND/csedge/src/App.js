import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'

const App = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
    </Routes>

    </>
  )
}

export default App
