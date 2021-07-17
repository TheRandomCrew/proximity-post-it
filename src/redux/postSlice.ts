import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'

export type Post = {
  id: string;
  title: string;
  email: string;
  body: string;
  comments: Comment[];
}

export type Comment = {
  id: string;
  name: string;
  email: string;
  body: string;
  postId: string;
}

interface PostState {
  posts: Post[]
}

const initialState: PostState = { posts: [] }

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    savePosts: (state, action: PayloadAction<PostState>) => {
      state.posts = action.payload.posts
    },
    sendComment: (state, action: PayloadAction<any>) => {
      const data = action.payload
      const updatedPosts = state.posts.map(post => {
        if (post.id === data.postId) {
          return { ...post, comments: [...post.comments, ...data] }
        } else {
          return post
        }
      })
      state.posts = updatedPosts
    },
  },
})

export const selectPosts = (state: RootState) => state.posts.posts

export const { savePosts, sendComment } = postSlice.actions

export default postSlice.reducer
