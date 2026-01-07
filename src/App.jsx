import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import NavigationBar from './component/NavigationBar'

function App() {

  return (
    <>
      <div className='bg-black'>
      <div className="bg-fixed bg-linear-to-t from-purple-800 to-stone-0 h-full text-white">
        
        <NavigationBar/>

        <div className="p-5 py-50 md:py-70 lg:py-110">
          {/* <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a> */}
          <div className='font-extralight text-6xl md:text-8xl text-center'>
            [ Place Holder ]
          </div>
          <div className='text-center text-green-600'>
            <code>[place holder]</code>
          </div>
        </div>

        <div className='bg-black rounded-t-3xl px-9 py-5 h-lvh'>
            
          <div className='flex flex-row my-4 max-h-75'>
            <div className='border flex-col mr-5 min-w-2/3'>
              <h1 className='text-3xl font-bold md:text-5xl my-1'>Dorm Monitoring and Managemant</h1>
              <p className='py-2'> A centralized system to track and manage univeristy dorm residents. </p>
              <p className='font-light'> Technologies: Laravel, ReactJS, PostgreSQL</p>
            </div>
            <div className='border flex justify-center min-w-1/3 '>
              <img className="" src={'public/filler.jpg'} />
            </div>
          </div>

          <div className='flex flex-row my-4 max-h-75'>
            <div className='border flex justify-center min-w-1/3 '>
              <img className="" src={'public/filler.jpg'} />
            </div>
            <div className='border flex-col ml-5 min-w-2/3'>
              <h1 className='text-3xl font-bold md:text-5xl my-1 '> Climate Sentiment Classifier </h1>
              <p className='py-2'> Natural Language AI model trained to identify emotional sentiment on climate-related statements</p>
              <p className='font-light'> Technologies: Python (Tensorflow, Pandas, etc)</p>
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
