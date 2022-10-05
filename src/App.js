import React from 'react'
import FeedbackForm from './components/FeedbackForm'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import Header from './components/Header'
import AboutPage from './pages/AboutPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Post from './pages/Post'
import NotFound from './pages/NotFound'

import { FeedbackProvider } from './context/FeedbackContext'

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/post/*' element={<Post />} />
            <Route path='/notfound' element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App
