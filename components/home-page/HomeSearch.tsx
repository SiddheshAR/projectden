import { SearchIcon } from 'lucide-react'
import React from 'react'

function HomeSearch() {
  return (
    <div className='my-4 md:my-10 z-40 mx-auto relative'>
        <input
            type='text'
            // label='search'
            className='bg-white text-md  md:text-lg px-6 py-3 border-2 border-black font-bold text-gray-900 rounded-full w-[80vw] md:w-[500px] focus:outline-none focus:border-black' 
            placeholder='Search Projects'
        />
        <SearchIcon className='absolute right-5 top-4'/>
    </div>
  )
}

export default HomeSearch