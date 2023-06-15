import './open.css'
import React from 'react'
import { createRoot } from 'react-dom/client'
import O_Header from './components/O_Header/O_Header.jsx'
import O_SplashScreen from './components/O_SplashScreen/O_SplashScreen.jsx'
const root = createRoot(document.getElementById('app'))
const footer = createRoot(document.getElementsByClassName('footer'[0]))
root.render(
  <>
    <O_Header />
    {/* <O_SplashScreen
      fontTitle="К«РС"
      type="color"
      splashBackground="var(--mainGray)"
    /> */}
  </>
)
