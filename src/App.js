import React from "react"
import { Routes, Route } from "react-router-dom"
import "./styles/app.scss"

import Home from "./pages/index"
import About from "./pages/about"
import Contact from "./pages/contact"
import Error from "./pages/404"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  )
}

export default App
