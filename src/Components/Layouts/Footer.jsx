import React from 'react'
import {  FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./Footer.scss"

const Footer = () => {
  return (
    <div className="Footer">
    <div className="Footer_Left">
      <h2>About Website:</h2>
      <p>This website is design to manage your task efficiently</p>
      <p>Created with love by Sid</p>
      <h3>Copyright &#169; All rights reserved</h3>
    </div>
    <div className="Footer_Right">
      <h2> Contact Us:</h2>
      <div className="Footer_Icons">
        <a title='Instagram' href="http://instagram.com/perfectly_imperfect_sid?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer">
        <FaInstagram
              size={35}
              style={{ color: "#1f1f1f", marginTop: "1rem" }}
            />
        </a>
        <a title='LinkedIn' href="http://www.linkedin.com/in/siddharth-mishra-363194225" target="_blank" rel="noreferrer">
        <FaLinkedin
              size={35}
              style={{ color: "#1f1f1f", marginTop: "1rem" }}
            />
        </a>
        <a title='Twitter' href="http://twitter.com/Siddhu0509?t=QTCaR_p09WzsFXq1_LwDIQ&s=08" target="_blank" rel="noreferrer">
        <FaTwitter
              size={35}
              style={{ color: "#1f1f1f", marginTop: "1rem" }}
            />
        </a>
      </div>
    </div>
  </div>
  )
}

export default Footer