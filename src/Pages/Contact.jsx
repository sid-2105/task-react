import React from 'react'
import { FaPhone,FaMailBulk } from "react-icons/fa";
import "./Contact.scss"

const Contact = () => {
  return (
    <div className="page">
         <h1>Contact Us</h1>
      <div className="contact">
        <div className="contact_left">
          <img src="./contact.png" alt="" />
        </div>
       <div className="contact_right">
       <h2><FaMailBulk/>Helpline mail:</h2>
          <h5>xyz@gmail.com</h5>
          <h2><FaPhone/>Call us:</h2>
          <p>xxxxxxxxxxx</p>
          <p>xxxxxxxxxxx</p>
          <p>xxxxxxxxxxx</p>
       </div>
       
      </div>
    </div>
  )
}

export default Contact