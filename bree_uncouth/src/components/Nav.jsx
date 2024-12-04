import React from 'react'

import Switch from './Switch'

const Nav = ({ currentPage, handlePageChange }) => {
  return (
    <Switch currentPage={currentPage} handlePageChange={handlePageChange} />
  )
}

export default Nav
