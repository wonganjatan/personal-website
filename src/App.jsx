import { useState } from 'react'
import './App.css'
import Introduction from './components/Introduction'

function App() {

  return (
    <html>
      <body className='h-full font-mono flex justify-center px-20'>
        <main className='min-h-screen flex justify-center items-start px-6 py-10'>
          <div className='mx-auto pt-6 pb-12 max-w-xl space-y-12 sm:py-10'>
            <Introduction/>
          </div>
        </main>
      </body>
    </html>
    
  )
}

export default App
