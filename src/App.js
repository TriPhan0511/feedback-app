import React, { useState } from 'react'
import FeedbackForm from './components/FeedbackForm'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import Header from './components/Header'
import FeedbackData from './data/FeedbackData'
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
// import React, { useState } from 'react'
// import FeedbackForm from './components/FeedbackForm'
// import FeedbackList from './components/FeedbackList'
// import FeedbackStats from './components/FeedbackStats'
// import Header from './components/Header'
// import FeedbackData from './data/FeedbackData'
// import AboutPage from './pages/AboutPage'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import Post from './pages/Post'
// import NotFound from './pages/NotFound'

// import { FeedbackProvider } from './context/FeedbackContext'

// function App() {
//   const [feedback, setFeedback] = useState(FeedbackData)
//   const deleteFeedback = (id) => {
//     if (window.confirm('Are you sure you want to delete?')) {
//       setFeedback(feedback.filter((item) => item.id !== id))
//     }
//   }
//   const addFeedback = (newFeedback) => {
//     console.log(newFeedback)
//     setFeedback([newFeedback, ...feedback])
//   }
//   return (
//     <FeedbackProvider>
//       <Router>
//         <Header />
//         <div className='container'>
//           <Routes>
//             <Route
//               exact
//               path='/'
//               element={
//                 <>
//                   <FeedbackForm handleAdd={addFeedback} />
//                   <FeedbackStats />
//                   <FeedbackList handleDelete={deleteFeedback} />
//                 </>
//               }
//             />
//             <Route path='/about' element={<AboutPage />} />
//             <Route path='/post/*' element={<Post />} />
//             <Route path='/notfound' element={<NotFound />} />
//           </Routes>
//         </div>
//       </Router>
//     </FeedbackProvider>
//   )
// }

// export default App
