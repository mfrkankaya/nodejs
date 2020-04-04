import React from 'react'

// Components
import Header from './components/Header'

// Pages
import Home from './pages/Home'

function App() {
  return (
    <div id='app'>
      <div className='container'>
        <Header />
        <Home />
      </div>
    </div>
  )
}

export default App
