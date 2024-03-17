import React from 'react'
import './App.css' 
import './responsive.css'
import { useRoutes } from 'react-router-dom'
import routes from './routes'

export default function App() {

  let router = useRoutes(routes)

  return (
    <div>
      {router}
    </div>
  )
}

