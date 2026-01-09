import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import NavigationBar from './component/NavigationBar'

import FillerImg from "./assets/filler.jpg"

function App() {

  return (
    <>
      <div className='bg-black'>
      <div className="bg-fixed bg-linear-to-t from-gray-950 to-blue-950 h-full text-white">
        
        <NavigationBar/>

        <div className="p-5 py-50 md:py-70 lg:py-110">
          {/* <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a> */}
          <div className='font-extralight text-6xl md:text-8xl text-center'>
            Paolo Lapira
          </div>
          <div className='text-center text-green-600'>
            <code>[ewan ko pa]</code>
          </div>
        </div>

        <div className='bg-gray-950 px-9 py-5 md:px-20 h-lvh'>
            
          <div className='flex flex-row justify-center my-6 max-h-75 '>
          
            <div className='flex flex-col overflow-hidden w-full bg-gray-800 outline outline-white/15 mr-5 rounded-r-lg rounded-l-xl rounded-tl-4xl py-5 px-6'>
                <h1 className='text-3xl font-bold md:text-5xl my-1'> Dorm Monitoring and Managemant </h1>
                <p className='grow my-2'> A centralized system to track and manage univeristy dorm residents. </p>
                <p className='tracking-wide font-bold'> Technologies: Laravel, ReactJS, PostgreSQL</p>
            </div>
            <img className="max-w-3/10 outline outline-white/40 rounded-l-lg rounded-r-xl object-cover" src={FillerImg} />
          </div>

          <div className='flex flex-row justify-center my-6 max-h-75'>
              <img className="max-w-3/10 object-cover outline outline-white/40 rounded-r-lg rounded-l-xl" src={FillerImg} />
            <div className='flex flex-col overflow-hidden w-full bg-gray-800 outline outline-white/15 ml-5 rounded-l-lg rounded-r-xl  rounded-br-4xl py-5 px-6'>
              <h1 className='text-3xl font-bold md:text-5xl my-1 '> Climate Sentiment Classifier </h1>
              <p className='grow py-2'> Natural Language AI model trained to identify emotional sentiment on climate-related statements</p>
              <p className='tracking-wide font-bold'> Technologies: Python (Tensorflow, Pandas, etc)</p>
            </div>
          </div>

          <div className='my-4'>
            ano pa ba ambag ko sa mundo
          </div>

        </div>

      </div>
      </div>
    </>
  )
}

export default App
