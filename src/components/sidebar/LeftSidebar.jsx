import React from 'react'
import Profile from "./left/Profile"
import Accordion from "./left/Accordion"
import Interests from "./left/Interests"
import AlertBox from "./left/AlertBox"

export default function LeftSidebar() {
  return (
    <div className="w3-col m3">
      <Profile/>
      <br/>
      <Accordion/>
      <br/>
      <Interests/>
      <br/>
      <AlertBox/>
    </div>
  )
}