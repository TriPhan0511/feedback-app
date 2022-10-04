import FeedbackItem from './FeedbackItem'
import React, { useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackList() {
  const { feedback } = useContext(FeedbackContext)
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet.</p>
  }
  return (
    <div className='feedback-list'>
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  )
}

export default FeedbackList

// import FeedbackItem from './FeedbackItem'
// import PropTypes from 'prop-types'
// import React, { useContext } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import FeedbackContext from '../context/FeedbackContext'

// // function FeedbackList({ feedback, handleDelete }) {
// function FeedbackList({ handleDelete }) {
//   const { feedback } = useContext(FeedbackContext)
//   if (!feedback || feedback.length === 0) {
//     return <p>No Feedback Yet.</p>
//   }
//   return (
//     <div className='feedback-list'>
//       {feedback.map((item) => (
//         <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
//       ))}
//     </div>
//   )

//   // return (
//   //   <div className='feedback-list'>
//   //     <AnimatePresence>
//   //       {feedback.map((item) => (
//   //         <motion.div
//   //           key={item.id}
//   //           initial={{ opacity: 0 }}
//   //           animate={{ opacity: 1 }}
//   //           exit={{ opacity: 0 }}
//   //         >
//   //           <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
//   //         </motion.div>
//   //       ))}
//   //     </AnimatePresence>
//   //   </div>
//   // )
// }

// FeedbackList.propTypes = {
//   feedback: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       rating: PropTypes.number.isRequired,
//       text: PropTypes.string.isRequired,
//     })
//   ),
// }

// export default FeedbackList
