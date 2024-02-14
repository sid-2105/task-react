import React from 'react'
import Form from "../Components/Form"
import "./Help.scss"

const Help = () => {
  return (
    <div className="page">
      <div className="help" id='helppage'>
        <div className="help_left">
          <img src="./help.png" alt="" />
        </div>
       <div className="help_right">
        <Form/>
       </div>
       
      </div>
    </div>
       
  )
}

export default Help