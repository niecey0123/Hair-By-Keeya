import React, { useState } from 'react';
import {db} from '../firebase'
import 'bulma/css/bulma.css'
import emailjs from 'emailjs-com'
import '../Contact.css'

const Contact =()=>{

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [number, setNumber] = useState("");


  const [loader, setLoader]= useState(false);


const sendEmail =(e)=>{
  e.preventDefault();
  setLoader(true);

  emailjs.sendForm('service_2z57sln', 'template_xp0r45i', e.target, 'user_B0RDlrmbyosdCXdGd0KFi')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);

        // e.target.reset
    });


    db.collection('contacts').add({
      name: name,
      email: email,
      message: message,
      number:number,
      subject:subject

    })
    .then(() => {
     alert("Your Message Was Successfully Sent!");
     setLoader(false);

    })
    .catch((error) =>{
      console.log(error.message)
      setLoader(false);

    })

    setName("");
    setEmail("");
    setMessage("");
    setNumber("");
    setSubject("");
}

    return(
       

<div className="columns is-mobile">
<div className="container column is-fluid">
  <div className="notification first ">
  <h2 className="contact-title">Dont Beat Yourself</h2>
<h2 className="contact-title2">...Treat Yourself</h2>
  <form onSubmit={sendEmail}>
  <div className="field">
    <label  className="label">Name</label>
      <input className="input" name="name" value={name} onChange={(e)=> setName(e.target.value)} type="text" placeholder="Stacy Williams" />
    </div>
   <div className="field">
    <label  className="label">Phone Number</label>
    <div className="control ">
      <input className="input"name="phone-number" value={number} onChange={(e) => setNumber(e.target.value)}type="text" placeholder="000-000-0000"  />
      
    </div> 
  </div> 
  <div className="field">
    <label  className="label">Email</label>
      <input className="input" name="email" value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="stacy123@gmail.com" />
    
    </div>

   <div className="field">
    <label className="label">Subject</label>
    <div className="control">
      <div className="select">
        <select  name="subject" value={subject}  onChange={(e)=> setSubject(e.target.value)} >
          <option value="Book-Appointment">Book Appointment</option>
          <option value="Reschedule-Appointment">Reschedule Appointment</option>

        </select>
      </div>
    </div>
  </div> 
  <div className="field">
    <label   className="label">Message</label>
      <textarea name="message" className="textarea" value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Textarea"  />
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
      <button className="button is-link" type='submit'> Submit</button>
    </div>
    <div className="control">
      <button className="button is-link is-light" style={{background : loader ? "#ccc" : "rgb(2,2,110)"}}>Cancel</button>
    </div>
  </div>
</form>
  </div>
</div>


</div>



    
    )
    
}

export default Contact