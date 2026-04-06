import Navbar from "./Navbar"
import Footer from "./Footer"
import LeftSidebar from "../sidebar/LeftSidebar"
import RightSidebar from "../sidebar/RightSidebar"
import Feed from "../feed/Feed"

export default function MainLayout() {
  return (
    <>
      <Navbar/>
      <div className="w3-container w3-content" style={{maxWidth:"1400px", marginTop:"80px"}}>
        <div className="w3-row">
          <LeftSidebar/>
          <Feed/>
          <RightSidebar/>
        </div>
      </div>
      <Footer/>
    </>
  )
}