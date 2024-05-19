import React from 'react'
import ReactDOM from 'react-dom/client'
import Car from './Car.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Car color="Red" model={2024}/>
    <Car color="Silver" model={2014}/>
    <Car color="White" model={2000}/>
    <Car color="Black" model={2020}/>
  </React.StrictMode>,
)
