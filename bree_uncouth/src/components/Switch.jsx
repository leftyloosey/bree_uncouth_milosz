import React from 'react'

const Switch = ({ currentPage, handlePageChange }) => {
  return (
    <section className='flex flex-row justify-between p-1 shadow-md fixed top-0 left-0 right-0 z-100 bg-white'>
      <div className='text-4xl font-semibold pt-3 pl-2'>Kateryna Malaia</div>
      <div className='flex flex-row mr-16 text-2xl pt-3'>
        <div className='group mr-32'>
          <a href='#Research' onClick={() => handlePageChange('Research')}>
            Research
          </a>
          <div className='mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100'></div>
        </div>
        <div className='group mr-32'>
          <a href='#Teaching' onClick={() => handlePageChange('Teaching')}>
            Teaching
          </a>
          <div className='mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100'></div>
        </div>
        <div className='group mr-32'>
          <a href='#About' onClick={() => handlePageChange('About')}>
            About
          </a>
          <div className='mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100'></div>
        </div>
        <div className='group mr-16'>
          <a href='#CV' onClick={() => handlePageChange('CV')}>
            CV
          </a>
          <div className='mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100'></div>
        </div>
      </div>
    </section>
  )
}

export default Switch
