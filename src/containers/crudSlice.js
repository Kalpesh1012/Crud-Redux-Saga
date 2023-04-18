import { createSlice } from "@reduxjs/toolkit";

const crudSlice=createSlice({
    name:"crud",
    initialState:{
        result:[]
    },
    reducers:{
        additem:(state,action)=>{
            state.result.push(action.payload);

        },
        deleteitem:(state,action)=>{
            state.result.splice(action.payload,1);
        },
        edititem:(state,action)=>{
            state.result.map((item)=>{
                
                if(item.uid.id===action.payload.id){
                    item.fname.name=action.payload.name;
                    item.lastname.lname=action.payload.lname;
                    item.emailId.email=action.payload.email;
                }
            })
        }
    }
})

export const{additem,deleteitem,edititem}=crudSlice.actions;
export default crudSlice.reducer;