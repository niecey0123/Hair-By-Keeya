import React from 'react';

import 'bulma/css/bulma.css'

import '../Contact.css'

const Contact =()=>{
    return(
       

<div className="columns is-mobile">

<div className="container column is-fluid">
  <div className="notification first ">
  <form method='POST'>
  <div className="field">
    <label className="label">Name</label>
    <div className="control">
      <input className="input" type="text" placeholder="Stacy Williams" />
    </div>
  </div>
  <div className="field">
    <label className="label">Phone Number</label>
    <div className="control ">
      <input className="input" type="text" placeholder="000-000-0000"  />
      
    </div>
  </div>
  <div className="field">
    <label className="label">Email</label>
    <div className="control ">
      <input className="input" type="email" placeholder="stacy123@gmail.com" />
    
    </div>

  </div>
  <div className="field">
    <label className="label">Subject</label>
    <div className="control">
      <div className="select">
        <select>
          <option>Book Appointment</option>
          <option>Reschedule Appointment</option>

        </select>
      </div>
    </div>
  </div>
  <div className="field">
    <label className="label">Message</label>
    <div className="control">
      <textarea className="textarea" placeholder="Textarea" defaultValue={""} />
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