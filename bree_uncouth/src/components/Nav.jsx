import React from 'react'

import Switch from './Switch'

const Nav = ({ currentPage, handlePageChange }) => {
  return (
    <Switch
      //   className='fixed top-0'
      currentPage={currentPage}
      handlePageChange={handlePageChange}
    />
  )
}

export default Nav
