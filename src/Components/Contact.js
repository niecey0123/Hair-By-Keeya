import React, { useState } from 'react';
import {db} from '../Firebase'
import 'bulma/css/bulma.css'

import '../Contact.css'

const Contact =()=>{

  const {name, setName} = useState("")
  const {email, setEmail} = useState("")
  const {message, setMessage} = useState("")
  const {number, setNumber} = useState("")
  const {subject, setSubject} = useState("")



  const handleSubmit = (e)=>{
    e.preventDefault();
    db.collection('contacts').add({
      name:name,
      email:email,
      message:message,
      number:number,
      subject:subject
    })
    .then(()=>{
      alert("Message has been Sumbitted" )
    })
    .catch(error =>{
      alert(error.message)
    })

    setName("");
    setEmail("");
    setNumber("");
    setMessage("");
    setSubject("");
  }
    return(
       

<div className="columns is-mobile">

<div className="container column is-fluid">
  <div className="notification first ">
  <form method='POST' onSubmit={handleSubmit()}>
  <div className="field">
    <label className="label">Name</label>
    <div className="control">
      <input className="input" value="name" onChange={(e)=>setName(e.target.value)} type="text" placeholder="Stacy Williams" />
    </div>
  </div>
  <div className="field">
    <label className="label">Phone Number</label>
    <div className="control ">
      <input className="input" value="number" onChange={(e)=>setNumber(e.target.value)} type="text" placeholder="000-000-0000"  />
      
    </div>
  </div>
  <div className="field">
    <label className="label">Email</label>
    <div className="control ">
      <input className="input"value="email" onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="stacy123@gmail.com" />
    
    </div>

  </div>
  <div className="field">
    <label className="label">Subject</label>
    <div className="control">
      <div className="select">
        <select value="subject" onChange={(e)=> setSubject(e.target.value)}>
          <option value="book">Book Appointment</option>
          <option value="resched">Reschedule Appointment</option>

        </select>
      </div>
    </div>
  </div>
  <div className="field">
    <label className="label">Message</label>
    <div className="control">
      <textarea className="textarea" value="message" onChange={(e)=>setMessage(e.target.value)}placeholder="Textarea" defaultValue={""} />
    </div>
  </div>
  <div className="field">
    <div className="control">
      <label className="checkbox">
        <input type="checkbox" /> I agree to the <a href="#"> terms and conditions</a> 
      </label>
    </div>
  </div>
  <div className="field">
    <div className="control">
    </div>
  </div>
  <div className="field is-grouped">
    <div className="control">
      <button className="button is-link" type='submit'>Submit</button>
    </div>
    <div className="control">
      <button className="button is-link is-light">Cancel</button>
    </div>
  </div>
</form>
  </div>
</div>


</div>



    
    )
    
}

export default Contact