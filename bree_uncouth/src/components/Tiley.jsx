// import React, { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

const Tiley = ({ vis, project }) => {
  const { link, img } = project

  const LazyAnimat = () => {
    const { ref, inView } = useInView({
      //   triggerOnce: true,
      rootMargin: '90px 0px -90px 0px',
      //   rootMargin: '200px 0px -300px 0px',
      threshold: 1,
      //   delay: 100,
    })

    return (
      <div className=''>
        <div
          ref={ref}
          className={`absolute pt-8 pl-4 transition-all opacity-0 transform translate-y-16 ${
            inView
              ? 'transition delay-700 duration-300 ease-in-out -translate-y-0 opacity-100'
              : ''
          }`}
          // className={` ${inView ? 'text-red-500' : 'text-green-500'}`}
        >
          <p className='max-w-60 font-medium'>
            text text text text text text text text text text text text text
            text text text text text text text text text text text text text
            text text text text text text
          </p>
        </div>
        <a className='' href={link}>
          <div className='group shadow-md'>
            <img
              // className='w-64 h-64 group-hover:opacity-10'
              className={`w-64 h-64 ${
                inView
                  ? 'transition delay-500 duration-300 ease-in-out opacity-10'
                  : ''
              }`}
              src={img}
              alt=''
            />
          </div>
        </a>
      </div>
    )
  }

  return (
    <div className='group'>
      {/* <div className='absolute pt-8 pl-4 transition-all opacity-0 transform translate-y-16 group-hover:-translate-y-0 group-hover:opacity-100'> */}
      {/* <div className='absolute pt-8 pl-4 transition-all opacity-0 transform translate-y-16 group-hover:-translate-y-0 group-hover:opacity-100'> */}
      {/* <p className='max-w-60 font-medium'>
          text text text text text text text text text text text text text text
          text text text text text text text text text text text text text text
          text text text text
        </p> */}
      {/* </div> */}
      <div className='text-white'></div>
      <div className='mt-16 md:mt-4'></div>

      <LazyAnimat />
      <div className='mb-16'></div>
      {/* <a className='' href={link}>
        <div className='group shadow-md'>
          <img
            className='w-64 h-64 group-hover:opacity-10'
            src={img}
            alt=''
          />
        </div>
      </a> */}
    </div>
  )
}

export default Tiley
