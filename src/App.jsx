import './App.css'
import React, {useRef, useState} from 'react'
import {motion, stagger, useScroll, useSpring} from 'framer-motion'
import {LayoutGroup} from "framer-motion"

import {Routes, Route} from 'react-router-dom'
import pages from "../pages/pages.json"
import {useEffect} from 'react'
import Home from './Home'


function App() {
  const [components, setComponents] = useState({})

  useEffect(() => {
    const loadAllComponents = async () => {
      const loadedComponents = {}

      for (const page of pages) {
        let route = page.slice(0, page.indexOf("."))

        loadedComponents[route.toLowerCase()] = (await import(`./Hard/${route}.jsx`)).default
      }

      setComponents(loadedComponents)
    }

    loadAllComponents()
  }, [])

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        {
          Object.keys(components).map(route => (
            <Route key={route} path={`/${route}`} element={React.createElement(components[route])} />
          ))
        }
      </Routes>
    </div>
  )
}

export default App



