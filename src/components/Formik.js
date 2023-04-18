import React, { useState } from 'react'
import { useDispatch} from 'react-redux';
import { additem } from '../containers/crudSlice';


const Formik = () => {
    const dispatch=useDispatch();
    
    const [name,setName]=useState("");
    const [lname,setLname]=useState("");
    const [email,setEmail]=useState("");
    const [id,setid]=useState(0);
  return (
    <div>
      
      <form className='main' onSubmit={(e)=>{
        e.preventDefault();
        setid(id+1);
        dispatch(additem({fname:{name},lastname:{lname},emailId:{email},uid:{id}}))

        setName("");
        setLname("");
        setEmail("");
      }}>
        <div className='form'>
        <h1>Form</h1></div>
        <div className='text'>
        <div className='first'>
            <h4 className='ftext'>NAME:</h4>
            <input placeholder='Name' name='name' type='text' id='name' value={name} onChange={(e)=>{
                setName(e.target.value);
            }}></input>
        </div>
        <div className='second'>
            <h4 className='ltext'>LAST-NAME:</h4>
            <input placeholder='L-Name' name='lname' type='text' id='lname' value={lname} onChange={(e)=>{
                setLname(e.target.value);}}></input>
        </div>
        <div className='third'>
            <h4 className='email' >Email-Id:</h4>
            <input placeholder='Email' name='email' type='email' id='email' value={email} onChange={(e)=>{
                setEmail(e.target.value);}}></input>
        </div>
        <button className='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Formik
