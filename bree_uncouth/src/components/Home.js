import { useState } from 'react'

import Nav from './Nav'
import Footer from './Footer'
import Switch from './Switch'

const Home = () => {
  const [currentPage, setCurrentPage] = useState('')

  const renderPage = () => {
    if (currentPage === 'Home') {
      console.log(currentPage)
      return <Research />
    }

    return <Home />
  }

  const handlePageChange = (page) => setCurrentPage(page)

  return (
    <div className='flex flex-col h-screen justify-between font-mono'>
      <div>
        <Switch currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
      </div>

      {/* <Footer /> */}
    </div>
  )
}

export default Home
