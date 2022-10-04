import React from 'react'
import { createContext, useState } from 'react'
import FeedbackData from '../data/FeedbackData'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData)
  const deleteFeedback = (id) => {
    setFeedback(feedback.filter((item) => item.id !== id))
  }
  const addFeedback = (newFeedback) => {
    setFeedback([newFeedback, ...feedback])
  }
  return (
    <FeedbackContext.Provider value={{ feedback, deleteFeedback, addFeedback }}>
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext

// import React from 'react'
// import { createContext, useState } from 'react'

// const FeedbackContext = createContext()

// export const FeedbackProvider = ({ children }) => {
//   const [feedback, setFeedback] = useState([
//     {
//       id: 1,
//       text: 'This is item from context',
//       rating: 10,
//     },
//   ])
//   return <FeedbackContext.Provider value={{ feedback }}>{children}</FeedbackContext.Provider>
// }

// export default FeedbackContext
