import { createSlice } from "@reduxjs/toolkit";

const rsslice=createSlice({
    name:"user",
    initialState:[{
        id:0,
        name:'',
        lname:'',
        email:''
        
    }],
    reducers:{
        getUSer:(state,action)=>{
            state=action.payload
            return state;
        },
        addUser:(state,action)=>{
            console.log("OP")
             state.push(action.payload);
             return state;
        },
        updateUser:(state,action)=>{
            state.map((item)=>{
                if(item.id===action.payload.id){
                    item.name=action.payload.name;
                    item.lname=action.payload.lname;
                    item.email=action.payload.email
                }
            })
        },
        deleteUser:(state,action)=>{
            state=state.filter((user)=>user.id!==action.payload)
            return state;
        }
    }

})

export const {getUSer,addUser,updateUser,deleteUser}=rsslice.actions;
export default rsslice.reducer