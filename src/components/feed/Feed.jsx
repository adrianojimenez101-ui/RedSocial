import React from 'react'
import CreatePost from "./CreatePost"
import Post from "./Post"

export default function Feed() {
  return (
    <div className="w3-col m7">
      <CreatePost/>
      <Post/>
    </div>
  )
}