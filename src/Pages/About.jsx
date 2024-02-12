import React from 'react'
import "./About.scss"

const About = () => {
  return (
    <div className="page" id='aboutpage'>
         <h1>About Us</h1>
      <div className="about">
        <div className="about_left">
          <img src="./about.png" alt="" />
        </div>
       <div className="about_right">
        <p>At <b>TaskBuddy</b>, we are on a mission to empower individuals and teams to achieve their full potential by providing a powerful yet simple task management solution. We believe that when tasks are managed efficiently, it frees up valuable time for what truly matters - personal growth, meaningful connections, and pursuing your passions.</p><br></br>
          <h3>Join Us on the Productivity Journey:</h3>
        <p>Try TaskBuddy today and experience a new level of productivity. Whether you're a student, professional, or anyone striving to make the most out of every day, we're here to support you on your journey towards success.</p><br></br>   
        <p>  Thank you for choosing TaskBuddy - where productivity meets simplicity! </p>
       </div>
      </div>
    </div>
  )
}

export default About