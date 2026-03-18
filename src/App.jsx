import { useState } from 'react'
import './App.css'
import Introduction from './components/Introduction'
import Skills from './components/Skills'
import Education from './components/Education'
import Courses from './components/Courses'
import Footer from './components/Footer'

function App() {

  return (
    <html>
      <body className='h-full font-mono flex justify-center px-20'>
        <main className='min-h-screen flex justify-center items-start px-6 py-10'>
          <div className='mx-auto pt-6 pb-12 max-w-xl space-y-12 sm:py-10'>
            <Introduction/>
            <Skills/>
            <Education/>
            <Courses/>
            <Footer/>
          </div>
        </main>
      </body>
    </html>
  )
}

export default App
