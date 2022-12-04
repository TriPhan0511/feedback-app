import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Post from './components/Post'

// Make A Post Request
function App() {
  const [post, setPost] = useState(null)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  // Get a specific post
  useEffect(() => {
    const fetchPost = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts/99')
      setPost(response.data)
    }
    fetchPost()
  }, [])
  // Create a new post
  const createPost = async () => {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
      title,
      body,
    })
    setPost(response.data)
  }
  if (!post) {
    return <p>Loading...</p>
  }
  return (
    <>
      <Post post={post} />
      <form
        onSubmit={(e) => {
          e.preventDefault()
          createPost()
        }}
      >
        <label htmlFor='title'>Title</label>
        <input type='text' id='title' name={title} onChange={(e) => setTitle(e.target.value)} />
        <br />
        <label htmlFor='body'>Body</label>
        <input type='text' id='body' name={body} onChange={(e) => setBody(e.target.value)} /> <br />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

// --------------------------------------------------------------------------------
// // Make A Post Request
// function App() {
//   const [post, setPost] = useState(null)
//   useEffect(() => {
//     const fetchPost = async () => {
//       const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
//       setPost(response.data)
//     }
//     fetchPost()
//   }, [])
//   const createPost = async () => {
//     const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
//       title: 'Have a nice weekend',
//       body: `Let's go out!`,
//     })
//     setPost(response.data)
//   }
//   // function createPost() {
//   //   axios
//   //     .post('https://jsonplaceholder.typicode.com/posts', {
//   //       title: 'Hello World!',
//   //       body: 'This is a new post.',
//   //     })
//   //     .then((response) => setPost(response.data))
//   // }
//   if (!post) {
//     return <p>Loading...</p>
//   }
//   return (
//     <>
//       <Post post={post} />
//       <button onClick={createPost}>Create Post</button>
//     </>
//   )
// }

// --------------------------------------------------------------------------------
// // Get An Individual Post
// function App() {
//   const [post, setPost] = useState(null)
//   useEffect(() => {
//     const fetchPost = async () => {
//       const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
//       setPost(response.data)
//     }
//     fetchPost()
//   }, [])
//   // useEffect(() => {
//   //   axios.get('https://jsonplaceholder.typicode.com/posts/1').then((response) => {
//   //     setPost(response.data)
//   //   })
//   // }, [])
//   if (!post) {
//     return <p>Loading...</p>
//   }
//   return <Post post={post} />
// }

export default App
