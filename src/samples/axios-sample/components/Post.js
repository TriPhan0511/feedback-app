import React from 'react'

function Post({ post: { id, title, body } }) {
  return (
    <div>
      <h3>Id: {id}</h3>
      <p style={{ fontSize: 20 }}>Title: {title}</p>
      {body && <p style={{ fontSize: 20 }}>Body: {body}</p>}
    </div>
  )
}

export default Post
