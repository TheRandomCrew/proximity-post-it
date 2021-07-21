import React from 'react'
import { Comment as CommentType } from '../redux/postSlice'

interface CommentProps {
  comment: CommentType
}

const Comment = ({ comment }: CommentProps) => (
  <div className="comment">
    <div>
      <strong>Name: </strong>
      {comment.name}
    </div>
    <div>
      <strong>Email: </strong>
      {comment.email}
    </div>
    <div>
      <br />
      {comment.body}
    </div>
  </div>
)

export default Comment
