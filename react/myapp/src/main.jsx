import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
import Header from './Header.jsx'
import './App.css'
import './Media.css'
// import './Script.js'
import Slide from './Slide.jsx'
import Footer from './Footer.jsx'
import Section from './Section.jsx'
import Card from './Card.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App/> */}
    <Header/>
    <Slide/>
    <Section/>
    <Card/>
     <Footer/>
  </React.StrictMode>,
)
