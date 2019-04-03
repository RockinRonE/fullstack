import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { GlobalStyle } from '../theme/globalStyle'
import Header from './Header'

// const Header = () => <h2>Header</h2>
const Dashboard = () => <h2>Dashboard</h2>
const Survey = () => <h2>Survey</h2>
const Landing = () => <h2>Landing</h2>

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <GlobalStyle />
          <Header />
          <Route path="/" exact component={Landing} />
          <Route path="/surveys" component={Dashboard} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
