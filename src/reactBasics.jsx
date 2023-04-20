import React from 'react'
import { createRoot } from 'react-dom/client'
import A_Title from './reactBasics/A_Title.jsx'
// Render your React component instead
const root = createRoot(document.getElementById('app'))
root.render(<A_Title name="ADC" />)
