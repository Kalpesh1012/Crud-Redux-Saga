import { Button, Container, Input } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUserSlice } from '../containers/usersSlice'

import { nanoid } from '@reduxjs/toolkit'
import { CREATE_USER, UPDATE_USER_BY_ID } from './sagas/types'

const MyForm = () => {
   
    const user=useSelector(store=>store.users);
    console.log(user)
    const dispatch=useDispatch();
    const handlechnage=(prop)=>(event)=>{
           console.log("prop");
           dispatch(setUserSlice({...user,[prop]:event.target.value}))
    }
    const handlesubmit=()=>{
        console.log("YES")
        //user.id===0? dispatch(addUser({...user,id:nanoid(8)})):dispatch(updateUser(user))
        
        user.id===0? dispatch({type:CREATE_USER,user:{...user,id:nanoid(8)}}):dispatch({type:UPDATE_USER_BY_ID,user})
        dispatch(setUserSlice({
            id:0,
            name:'',
            lname:'',
            email:'',
        }))

    }
    console.log(user)
  return (
    <div>
        <h1 style={{marginLeft:"580px",color:"blueviolet",marginTop:"150px"}}>REDUX-SAGA FORM</h1>
      <Container className='container' style={{display:"grid",marginLeft:"400px",marginTop:"80px"}}>
        
      <Input style={{height:"30px",width:"700px",marginTop:"5px",border:"2px"}} value={user.id} fullWidth disabled ></Input>
        <Input style={{height:"30px",width:"700px",marginTop:"20px",boxShadow:"2px 2px"}}  onChange={handlechnage('name')} placeholder='NAME' value={user.name} fullWidth></Input>
        <Input style={{height:"30px",width:"700px",marginTop:"20px",boxShadow:"2px 2px"}} className='llname' onChange={handlechnage('lname')} placeholder='LNAME' value={user.lname} fullWidth></Input>
        <Input style={{height:"30px",width:"700px",marginTop:"20px",boxShadow:"2px 2px"}} className='eemail' onChange={handlechnage('email')} placeholder='EMAIL' value={user.email} fullWidth></Input>
        <Button style={{height:"30px",width:"100px",marginTop:"50px",marginLeft:"300px"}} className='btn' fullWidth variant='contained' onClick={()=>{
            handlesubmit()
        }}>Submit</Button>
      </Container>
    </div>
  )
}

export default MyForm
