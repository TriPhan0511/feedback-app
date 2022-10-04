import { v4 as uuidv4 } from 'uuid'
import React, { useContext, useState } from 'react'
import RatingSelect from './RatingSelect'
import Button from './shared/Button'
import Card from './shared/Card'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')
  const { addFeedback } = useContext(FeedbackContext)

  const handleTextChange = (e) => {
    const inputValue = e.target.value
    if (inputValue === '') {
      setBtnDisabled(true)
      setMessage(null)
    } else if (inputValue !== '' && inputValue.trim().length < 10) {
      setBtnDisabled(true)
      setMessage('Text must be at least 10 characters!')
    } else {
      setBtnDisabled(false)
      setMessage(null)
    }
    setText(inputValue)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length >= 10) {
      const newFeedback = { id: uuidv4(), rating, text }
      addFeedback(newFeedback)
      setText('')
      setBtnDisabled(true)
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className='input-group'>
          <input
            type='text'
            placeholder='Write a review'
            value={text}
            onChange={handleTextChange}
          />
          <Button type='submit' isDisabled={btnDisabled}>
            Send
          </Button>
          {/* <button type='submit'>Send</button> */}
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm

// import { v4 as uuidv4 } from 'uuid'
// import React, { useState } from 'react'
// import RatingSelect from './RatingSelect'
// import Button from './shared/Button'
// import Card from './shared/Card'

// function FeedbackForm({ handleAdd }) {
//   const [text, setText] = useState('')
//   const [rating, setRating] = useState(10)
//   const [btnDisabled, setBtnDisabled] = useState(true)
//   const [message, setMessage] = useState('')

//   const handleTextChange = (e) => {
//     const inputValue = e.target.value
//     if (inputValue === '') {
//       setBtnDisabled(true)
//       setMessage(null)
//     } else if (inputValue !== '' && inputValue.trim().length < 10) {
//       setBtnDisabled(true)
//       setMessage('Text must be at least 10 characters!')
//     } else {
//       setBtnDisabled(false)
//       setMessage(null)
//     }
//     setText(inputValue)
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     if (text.trim().length >= 10) {
//       const newFeedback = { id: uuidv4(), rating, text }
//       handleAdd(newFeedback)
//       setText('')
//       setBtnDisabled(true)
//     }
//   }

//   return (
//     <Card>
//       <form onSubmit={handleSubmit}>
//         <h2>How would you rate your service with us?</h2>
//         <RatingSelect select={(rating) => setRating(rating)} />
//         <div className='input-group'>
//           <input
//             type='text'
//             placeholder='Write a review'
//             value={text}
//             onChange={handleTextChange}
//           />
//           <Button type='submit' isDisabled={btnDisabled}>
//             Send
//           </Button>
//           {/* <button type='submit'>Send</button> */}
//         </div>
//         {message && <div className='message'>{message}</div>}
//       </form>
//     </Card>
//   )
// }

// export default FeedbackForm
