import React, { useState } from 'react'
import Button from './shared/Button'
import Card from './shared/Card'

function FeedbackForm() {
  const [text, setText] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  const handleTextChange = (e) => {
    const inputValue = e.target.value
    setText(inputValue)
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
  }

  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        {/* todo - rating select component */}
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
