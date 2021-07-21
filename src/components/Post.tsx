import React from 'react'
import { Post as PostType } from '../redux/postSlice'

interface PostProps {
  post: PostType
}

const Post = ({ post }: PostProps) => (
  <div className="post">
    <div>
      <strong>{post.title}</strong>
    </div>
    <div>
      <strong>Email: </strong>
      {post.email}
    </div>
    <div>
      <br />
      {post.body}
    </div>
  </div>
)

export default Post
