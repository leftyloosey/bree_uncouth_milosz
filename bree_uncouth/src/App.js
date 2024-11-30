import { useState } from 'react'

import Nav from './components/Nav'
import Footer from './components/Footer'
import Research from './components/Research'
import Teaching from './components/Teaching'
import Home from './components/Home'
import CV from './components/CV'
import About from './components/About'

// import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('Home')

  const renderPage = () => {
    if (currentPage === 'Research') {
      return <Research />
    }
    if (currentPage === 'Teaching') {
      return <Teaching />
    }
    if (currentPage === 'About') {
      return <About />
    }
    if (currentPage === 'CV') {
      return <CV />
    }
    if (currentPage === 'Home') {
      return <Home />
    }
  }

  const handlePageChange = (page) => setCurrentPage(page)

  return (
    <div className='font-grotesk flex flex-col space-y-16'>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />

      <div className='h-screen'>{renderPage()}</div>

      <Footer />
    </div>
  )
}

export default App
