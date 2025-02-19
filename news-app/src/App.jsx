// src/App.jsx
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavigationBar from './components/NavigationBar'
import NewsList from './components/NewsList'
import NewsDetail from './components/NewsDetail'

function App() {
  return (
    <Router>
      <NavigationBar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<NewsList />} />
          <Route path="/news/:id" element={<NewsDetail />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
