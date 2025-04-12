import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import hero_banner from '/hero-banner.avif'
import hero_title from "../../assets/title.png"
import Play from "../../assets/play_icon.png"
import Info from "../../assets/info_icon.png"
import TitleCards from '../../Components/TitleCards/TitleCards'
import Footer from '../../Components/Footer/Footer'





const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img' />
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img' />
          <p>The fate of a violently contested kingdom hangs on the fraught bond between two friends-turned-foes in this saga of power, bloodshed and betrayal.</p>
        <div className="hero-buttons">
          <button  className="btn">
            <img src={Play} alt="" />Play
          </button>
          <button className='btn dark-btn'>
            <img src={Info} alt="" />More Info
          </button>
        </div>
        
        
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"BlockBuster Movies"} category={"top_rated"}/>
        <TitleCards title={"Only On Netflix"} category={"popular"} />
        <TitleCards title={"Upcoming"} category={"upcoming"}/>
        <TitleCards  title={"Top Picks For You"} category={"now_playing"}/>
      </div>
      <Footer />
    </div>
  )
}

export default Home
