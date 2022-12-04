import React from 'react'

function Post({ post: { id, title, body }, deletePost, upDatePost }) {
  return (
    <div style={{ fontSize: 20 }}>
      <h3>Id: {id}</h3>
      <div>
        <strong>Title:</strong> {title}
      </div>
      <div>
        <strong>Body:</strong> {body}
      </div>
      <button onClick={() => upDatePost(id)}>Update</button>
      {/* <button onClick={() => deletePost(id)}>Delete</button> */}
    </div>
  )
}

export default Post
