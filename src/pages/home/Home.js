import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div className="text-center pb-12 mt-20 md:pb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4">Welcome to RadarOffice </h1>
        <h1 className="mt-3 animate-pulse text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-blue-800 to-blue-400 transition ease-in-out delay-150 hover:scale-110 duration-300">
            Check
        </h1>
        <h2 className="mt-6 animate-bounce text-2xl md:text-2xl 
        font-extrabold leading-tighter tracking-tighter mb-4 text-transparent 
        bg-clip-text bg-gradient-to-r from-blue-800 via-blue-800 to-blue-400 "
        >Touch. <span className='text-blue-600'>Control.</span>
        </h2>
        <div className="place-content-center mt-12 flex lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
                <Link
                to="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-900"
                >
                Check your Vehicules
                </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
                <Link
                to="#team"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-900 bg-white hover:bg-indigo-50"
                >
                View Infractions
                </Link>
            </div>
        </div>
    </div>
  )
}
