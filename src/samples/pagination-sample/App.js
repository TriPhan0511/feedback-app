import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Post from './components/Post'

function App() {
  const [posts, setPosts] = useState([])
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then((response) => response.json())
  //     .then((data) => setPosts(data))
  // }, [])
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const posts = await response.json()
      setPosts(posts)
    }
    fetchPosts()
  }, [])
  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} id={post.id} title={post.title} />
      ))}
    </div>
  )
}

export default App
