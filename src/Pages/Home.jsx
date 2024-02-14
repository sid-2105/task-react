import React from 'react'
import "./Home.scss"
import {FaArrowRight} from "react-icons/fa"

const Home = () => {
  return (
        <div className='Home'id='homepage'>
          <div className="home_left"> <img src='./homepic.png' alt='Landing Pic'/></div>
           <div className="home_right">
            <div className="regbtn">
            <button id='loginbtn' type='submit'>Login</button>
            <button id='signupbtn' type='submit'>Signup</button>
            </div>
            <div className="taskbtn">  
           <button id='taskbtn' type='submit'>Task Arena<FaArrowRight/></button>
           </div>
           </div>
        </div>
  )
}

export default Home