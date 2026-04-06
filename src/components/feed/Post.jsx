import React from 'react'
import CommentPost from './CommentPost'

export default function Post() {

  const posts = [
    {
      id: 1,
      name: "John Doe",
      time: "1 min",
      avatar: "https://www.w3schools.com/w3images/avatar2.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
      images: [
        "https://www.w3schools.com/w3images/lights.jpg",
        "https://www.w3schools.com/w3images/nature.jpg"
      ]
    },
    {
      id: 2,
      name: "Jane Doe",
      time: "16 min",
      avatar: "https://www.w3schools.com/w3images/avatar5.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
      images: []
    },
    {
      id: 3,
      name: "Angie Jane",
      time: "32 min",
      avatar: "https://www.w3schools.com/w3images/avatar6.png",
      text: "Have you seen this?",
      images: ["https://www.w3schools.com/w3images/nature.jpg"]
    }
  ]

  return (
    <>
      {posts.map(post => (
        <div key={post.id} className="w3-container w3-card w3-white w3-round w3-margin">
          <br />

          <img 
            src={post.avatar} 
            alt="Avatar" 
            className="w3-left w3-circle w3-margin-right" 
            style={{ width: "60px" }}
          />

          <span className="w3-right w3-opacity">{post.time}</span>

          <h4>{post.name}</h4>
          <br />

          <hr className="w3-clear" />

          <p>{post.text}</p>

          {/* IMAGENES */}
          <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
            {post.images.map((img, index) => (
              <div key={index} className="w3-half">
                <img 
                  src={img} 
                  style={{ width: "100%" }} 
                  className="w3-margin-bottom" 
                />
              </div>
            ))}
          </div>

          {/* 🔥 AQUI ESTA LA MAGIA */}
          <CommentPost postId={post.id} />

        </div>
      ))}
    </>
  )
}