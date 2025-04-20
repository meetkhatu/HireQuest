import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Jobs from './pages/Jobs'
import Profile from './pages/Profile'
import JobProvider from './context/jobContext'



function App() {


  return (
    <JobProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Jobs />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </JobProvider>
  )
}

export default App
