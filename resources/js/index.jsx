import React from "react"
import {createRoot} from 'react-dom/client'

const root = createRoot(document.getElementById('app'))

root.render(
  <React.StrictMode>
    <h1>Hello React!</h1>
  </React.StrictMode>
)