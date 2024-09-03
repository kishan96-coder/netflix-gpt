import { createSlice } from "@reduxjs/toolkit";

const showSearchGptSlice = createSlice({
    name: 'Search Gpt',
    initialState:{
        ShowSearch:false
    },
    reducers:{
        addSearch:(state)=>{
            state.ShowSearch = !state.ShowSearch
        }
    }
});

export const {addSearch} = showSearchGptSlice.actions;
export default showSearchGptSlice.reducer; 