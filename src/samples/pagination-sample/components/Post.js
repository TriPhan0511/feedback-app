import React from 'react'

function Post({ id, title }) {
  return <p style={{ fontSize: 20, fontWeight: 'bold' }}>{`${id}: ${title}`}</p>
}

export default Post
