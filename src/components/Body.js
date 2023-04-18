import React, {  useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { MdDelete } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";
import { deleteitem, edititem } from '../containers/crudSlice';



const Body = () => {
    const rows=useSelector(store=>store.crud.result)
    const [updatedname,setUpdatedName]=useState("");
    const [updatedlname,setUpdatedLname]=useState("");
    const [updatedemail,setUpdatedEmail]=useState("");
    const [showedit,setShowEdit]=useState(false);
    const [id,setId]=useState(null);
    const dispatch=useDispatch();
    console.log(rows[0]);
    
    
  return (
    <>
    {rows.length===0?"":
    <div style={{marginTop:"150px"}}>
        <h1 style={{marginLeft:"670px"}}>Redux Table</h1>
      <table className='tablu' >
        <tr>
            <th>Name</th>
            <th>Last-Name</th>
            <th>Email-Id</th>
            <th>Delete</th>
            <th>Edit</th>
        </tr>
        {rows.map((item,index)=>{
           
            return(
            <> <tr>
                <td>{item.fname.name}</td>
                <td>{item.lastname.lname}</td>
                <td>{item.emailId.email}</td>
                <td><MdDelete onClick={()=>{
                    dispatch(deleteitem(index))
                }} /></td>
                <td><BiEditAlt onClick={()=>{
                    setShowEdit(true)
                    setId(index);
                }}/></td>
                </tr>
                <div>
                {showedit && id===item.uid.id && <div className='edit'>
                <input className='add' placeholder='Update-Name' onChange={(e)=>{
                    setUpdatedName(e.target.value)
                }}></input>
                <input className='add' placeholder='Update-LName' onChange={(e)=>{
                    setUpdatedLname(e.target.value)
                }}></input>
                <input className='add'  type="email" placeholder='Update-Email' onChange={(e)=>{
                    setUpdatedEmail(e.target.value)
                }}></input>
                <button onClick={()=>{
                    dispatch(edititem({
                        name:updatedname===""?item.fname.name:updatedname,
                        lname:updatedlname===""?item.lastname.lname:updatedlname,
                        email:updatedemail===""?item.emailId.email:updatedemail,
                        id:item.uid.id,
                    }))
                    setShowEdit(false);
                }}>UPDATE</button>
                </div>}
                </div>
                </>
                
        )})}
        
        
      </table>
      
    </div>
}
    </>
  )
}

export default Body
