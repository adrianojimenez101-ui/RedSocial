import React from 'react'
import Events from "./right/Events"
import FriendRequest from "./right/FriendRequest"
import Ads from "./right/Ads"

export default function RightSidebar() {
  return (
    <div className="w3-col m2">
      <Events/>
      <br/>
      <FriendRequest/>
      <br/>
      <Ads/>
    </div>
  )
}