import React from 'react'
import Nav from './components/Nav'
import Section from './components/Section'
import About from './components/About'
import Services from './components/Services'
import ContactMe from './components/Contact'

export default function App() {
  return (
    <div>
      <div id='nav'><Nav /></div>
      <div id='home'><Section /></div>
      <div id='about'><About /></div>
      <div id='service'><Services /></div>
      <div id='contacts'><ContactMe/>  </div>

    </div>
  )
}
