import { createSlice } from "@reduxjs/toolkit";

const ConfigSlice = createSlice({
    name:"config",
    initialState:{
        lang:"en",
    },
    
    reducers:{
        langChange:(state,action)=>{
            state.lang= action.payload
        }
    }
});

export const {langChange} =  ConfigSlice.actions;
export default ConfigSlice.reducer;