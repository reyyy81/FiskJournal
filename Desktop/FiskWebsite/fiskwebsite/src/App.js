import React from 'react'
import {Footer, Blog, Features, Header} from './containers';
import { Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className="gradient_bg">
        <Navbar/>
        <Header/>
      </div>
      <Blog/>
      <Features/>
      <Footer/>
    </div>
  )
}

export default App