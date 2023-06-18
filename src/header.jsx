import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import O_Header from './components/O_Header/O_Header.jsx'
const root = createRoot(document.querySelector('#header'))
root.render(<O_Header />)
