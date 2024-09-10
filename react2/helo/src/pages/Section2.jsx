import React from 'react'

import  {useState} from 'react';

import axios from 'axios';

function Section2 () {
  const[formData, setFormData] = useState({
    name:'',
    email:'',
    phonenumber:'',
  });

  const handleChange =(e) => {         
    const{name, value} = e.target;
    setFormData({                   
      ...formData,                 
      [name]: value                 
    });
 };

 const handleSubmit = async(e) =>{
  e.preventDefault();               
  try{
    const response = await axios.post('http://localhost:3001/submit',formData);
    console.log(response.data);       
    alert('form Submitted successfully');
  }catch(error){
    console.error('Enter Submitting form',error);
    alert('Failed to submit form');
  }
 };

  return (
    <form onSubmit={handleSubmit}>
        <container>
      <div>
        <label>name: </label>
        <input type='text' name='name' value={formData.name} onChange={handleChange} required/>
      </div>
      <div>
        <label>email: </label>
        <input type='email' name='email' value={formData.email} onChange={handleChange} required/>
      </div>
      <div>
        <label>phone number: </label>
        <input type='phonenumber' name='phonenumber' value={formData.phonenumber} onChange={handleChange} required/>
      </div>
      <div>
        
        <button type="submit">Submit!</button>
      </div>
      </container>
      </form>
  )
}

export default Section2