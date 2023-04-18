import { createSlice } from "@reduxjs/toolkit";

const usersSlice=createSlice({
    name:"users",
    initialState:{
        id:0,
        name:'',
        lname:'',
        email:''
    },
    reducers:{
        setUserSlice:(state,action)=>{
            state=action.payload;
            return state;
        }
    }
})

export const{setUserSlice}=usersSlice.actions;
export default usersSlice.reducer;