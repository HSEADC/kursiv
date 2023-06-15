import './reactBasics.css'
import './images/19.png'
import { createRoot } from 'react-dom/client'
import React from 'react'
import O_Schedule from './reactBasics/O_Schedule.jsx'
import O_Header from './components/O_Header/O_Header.jsx'
import O_Footer from './components/O_Footer/O_Footer.jsx'
const mainTitle = 'Schedule'
const events = [
  { title: 'React workshop 09', date: '18 APR 2023' },
  { title: 'React workshop 09', date: '18 APR 2023' },
  { title: 'React workshop 09', date: '18 APR 2023' },
  { title: 'React workshop 09', date: '18 APR 2023' },
  { title: 'React workshop 09', date: '18 APR 2023' },
  { title: 'React workshop 09', date: '18 APR 2023' },
  { title: 'React workshop 09', date: '18 APR 2023' }
]
const root = createRoot(document.getElementById('app'))
root.render(
  <>
    <O_Header />
    <O_Schedule
      events={events}
      title={events}
      fontTitle={'Roboto'}
      splashBackground={'../images/bg.svg'}
    ></O_Schedule>
    <O_Footer />
  </>
)
