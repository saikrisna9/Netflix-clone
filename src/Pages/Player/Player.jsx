import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from "../../assets/back_arrow_icon.png"
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

  const {id} = useParams()
  const navigate=useNavigate()

   const[apiData,setApiData]=useState({
    name:"",
    key:"",
    published_at:"",
    type:""
   })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDhlYTQxODcwYTM1OWMwMWY4ZTBmZmExZjY1NmY1ZSIsIm5iZiI6MTc0NDEwODQwOS41ODksInN1YiI6IjY3ZjRmYjc5ZGRmOTE5NDM4N2Q5ZGMwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m_D6tIJtPL1F2SMfsI1mYHP2OaCPHe4VjQ_u2Nd7laI'
    }
  };


  useEffect(()=>{
  
    
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results[0]))
      .catch(err => console.error(err));
  },[])
 










  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" onClick={()=>{
        navigate(-2)
      }} />
      <iframe width="90%" height="90%" title='trailer' frameBorder='0' allowFullScreen src={`https://www.youtube.com/embed/${apiData.key}`}></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
