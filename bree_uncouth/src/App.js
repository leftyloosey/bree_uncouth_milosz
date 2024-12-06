import { useState } from 'react'

import Nav from './components/Nav'
import Footer from './components/Footer'
import Research from './components/Research'
import Teaching from './components/Teaching'
import Home from './components/Home'
import About from './components/About'

function App() {
  const [currentPage, setCurrentPage] = useState('Home')

  const renderPage = () => {
    if (currentPage === 'Research') {
      return <Research menuShut={menuShut} />
    }
    if (currentPage === 'Teaching') {
      return <Teaching menuShut={menuShut} />
    }
    // }
    if (currentPage === 'About') {
      return <About menuShut={menuShut} />
    }
    if (currentPage === 'Home') {
      return <Home menuShut={menuShut} />
    }
  }

  const handlePageChange = (page) => setCurrentPage(page)

  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  const menuShut = () => {
    if (isOpen === true) setIsOpen(false)
  }

  return (
    <div className='font-grotesk flex flex-col space-y-16'>
      <Nav
        handleClick={handleClick}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />

      <div className='h-screen'>{renderPage()}</div>

      <Footer />
    </div>
  )
}

export default App
