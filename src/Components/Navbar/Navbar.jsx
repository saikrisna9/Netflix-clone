import React, { useEffect } from 'react'
import './Navbar.css'
import logo from "../../assets/logo.png"
import search from "../../assets/search_icon.svg"
import bell from "../../assets/bell_icon.svg"
import profile from "../../assets/profile_img.png"
import dropdown_icon from "../../assets/caret_icon.svg"
import { logout } from '../../firebase'
import { useRef } from 'react'



const Navbar = () => {

    const navRef = useRef();

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY>=80){
                navRef.current.classList.add('nav-dark')
            }else{
                navRef.current.classList.remove('nav-dark')
            }
        })
    })

  return (
    <div  ref={navRef} className='navbar'>
        <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>My List</li>
            <li>New&Popular</li>
            <li>Browse By Langauage</li>
        </ul>
        </div>
        <div className="navbar-right">
            <img src={search} alt="" className='icons' />
            <p>Children</p>
            <img src={bell} alt="" className='icons' />
            <div className="navbar-profile">
            <img src={profile} alt="" className='profile' />
            <img src={dropdown_icon} alt=""  />
            <div className="dropdown">
                <p onClick={()=>{logout()}}>
                    Sign Out Of Netflix
                </p>
            </div>
         </div>
            
        </div>
    </div>
  )
}

export default Navbar
