import React from 'react'

import kyiv_kate_bnw from '../assets/images/kyiv_kate_bnw.png'

const CV = ({ menuShut }) => {
  return (
    <div onLoad={menuShut} onClick={menuShut} className='md:columns-2'>
      <div className='m-1 mt-1'>
        <img
          className='object-cover'
          src={kyiv_kate_bnw}
          alt=''
          //   className='shadow-md mx-auto duration-200 w-60 hover:scale-105'
        />
      </div>
      <div className='m-2 break-inside-avoid-column'>
        <p className='pt-2'>
          I am an architectural historian and Assistant Professor of
          Architecture at the University of Utah. My research investigates the
          evolution of residential architecture in times of socio-political
          change in relation to the collapse of the USSR, and to the rising
          housing insecurity in North American cities. I studied architecture at
          the National Academy of Fine Arts and Architecture, Kyiv, Ukraine. I
          continued my studies at the School of Architecture and Urban Planning,
          University of Wisconsin-Milwaukee, where I received my PhD in the
          Buildings-Landscapes-Cultures Program in 2019.
        </p>
        <p className='mt-2'>
          I am an author of two books: Taking the Soviet Union Apart Room by
          Room (NIUP/Cornell UP, 2023) and Mass Housing in Ukraine (co-authored
          with Philipp Meuser, DOM Publishers, 2024). My articles appear in the
          Journal of the Society of Architectural Historians, Architectural
          Histories, East/West: Journal of Ukrainian Studies, PLATFORM, and
          Bauwelt. I also co-direct two public history projects on housing
          insecurity and justice in American cities and towns during the current
          housing crisis. Currently, I am working on a comprehensive study of
          Ukrainian rural housing, as a cultural asset continuously and
          intentionally destroyed by the Russian army during the full-scale
          invasion.
        </p>
        <p className='mt-2 pb-8'>
          At the University of Utah, I teach graduate and undergraduate design
          studios, research methods, and architectural theory courses.
        </p>
      </div>
    </div>
  )
}

export default CV
