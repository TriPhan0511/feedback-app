import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Post from './components/Post'

// // Make A Delete Request
// function App() {
//   const [posts, setPosts] = useState([])

//   useEffect(() => {
//     const fetchPosts = async () => {
//       const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
//       setPosts(response.data)
//     }
//     fetchPosts()
//   }, [])

//   const deletePost = async (id) => {
//     await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
//     setPosts(posts.filter((post) => post.id !== id))
//     alert('A post was deleted.')
//   }

//   // const deletePost = (id) => {
//   //   axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`).then(() => {
//   //     alert('A post was deleted.')
//   //     setPosts(posts.filter((post) => post.id !== id))
//   //   })
//   // }

//   if (!posts) {
//     return <div>Loading...</div>
//   }
//   return (
//     <>
//       {posts.slice(0, 5).map((post) => (
//         <Post post={post} deletePost={deletePost} />
//       ))}
//     </>
//   )
// }

// --------------------------------------------------------------------------------
// // Make A Put Request
// // (Update a post)
// function App() {
//   const [posts, setPosts] = useState([])
//   const [post, setPost] = useState(null)
//   const [title, setTitle] = useState('')
//   const [body, setBody] = useState('')
//   useEffect(() => {
//     const fetchPosts = async () => {
//       const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
//       setPosts(response.data)
//     }
//     fetchPosts()
//   }, [])

//   const updatePost = async (id) => {
//     const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
//       title: 'new title',
//       body: 'new body',
//     })
//     setPost()
//   }

//   if (!posts) {
//     return <p>Loading...</p>
//   }
//   return (
//     <>
//       {posts.map((post) => (
//         <Post key={post.id} post={post} updatePost={updatePost} />
//       ))}
//     </>
//   )
// }
// -------------------------------------------------------
function App() {
  const [post, setPost] = useState(null)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  useEffect(() => {
    const fetchPost = async () => {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
      setPost(response.data)
    }
    fetchPost()
  }, [])

  const updatePost = async (id) => {
    const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/1`, {
      title: 'new title',
      body: 'new body',
    })
    setPost(response.data)
  }

  if (!post) {
    return <p>Loading...</p>
  }
  return (
    <>
      <Post post={post} updatePost={updatePost} />
    </>
  )
}

// --------------------------------------------------------------------------------
// // Make A POST Request
// function App() {
//   const [post, setPost] = useState(null)
//   const [title, setTitle] = useState('')
//   const [body, setBody] = useState('')

//   useEffect(() => {
//     const fetchPost = async () => {
//       const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
//       setPost(response.data)
//     }
//     fetchPost()
//   }, [])

//   const createPost = async (title, body) => {
//     const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
//       title,
//       body,
//     })
//     setPost(response.data)
//   }

//   if (!post) {
//     return <div>Loading...</div>
//   }
//   return (
//     <>
//       <Post post={post} />
//       <form
//         onSubmit={(e) => {
//           e.preventDefault()
//           createPost(title, body)
//         }}
//       >
//         <label htmlFor='title'>Title</label>
//         <input type='text' id='title' value={title} onChange={(e) => setTitle(e.target.value)} />
//         <label htmlFor='body'>Body</label>
//         <input type='text' id='body' value={body} onChange={(e) => setBody(e.target.value)} />
//         <button type='submit'>Submit</button>
//       </form>
//     </>
//   )
// }

// --------------------------------------------------------------------------------
// // Get An Individual Post
// function App() {
//   const [post, setPost] = useState(null)
//   const [error, setError] = useState(null)

//   useEffect(() => {
//     const fetchPost = async () => {
//       try {
//         const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
//         // const response = await axios.get('https://jsonplaceholder.typicode.com/posts/10000')
//         setPost(response.data)
//       } catch (error) {
//         setError(error)
//       }
//     }
//     fetchPost()
//   }, [])

//   if (error) {
//     return <div>{error.message}</div>
//   }
//   if (!post) {
//     return <p>Loading...</p>
//   }
//   return <Post post={post} />
// }

export default App
