import './open.css'
import React from 'react'
import { createRoot } from 'react-dom/client'
import O_Header from './components/O_Header/O_Header.jsx'
import O_SplashScreen from './components/O_SplashScreen/O_SplashScreen.jsx'
import O_Footer from './components/O_Footer/O_Footer.jsx'
const root = createRoot(document.getElementById('app'))
const footer = document.getElementById('footer')
root.render(
  <>
    <O_Header />
  </>
)
footer.render(
  <>
    <O_Footer />
  </>
)
