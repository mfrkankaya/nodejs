// React
import React from 'react'

// Router
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

// Components
import Header from './components/Header'

// Pages
import Home from './pages/Home'
import Login from './pages/Login'
import Join from './pages/Join'

const Root = () => (
  <Router>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/join' component={Join} />
      <Redirect to='/' />
    </Switch>
  </Router>
)

function App() {
  return (
    <div id='app'>
      <div className='container'>
        <Header />
        <Root />
      </div>
    </div>
  )
}

export default App
