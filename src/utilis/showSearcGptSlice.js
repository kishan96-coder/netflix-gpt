import { createSlice } from "@reduxjs/toolkit";

const showSearchGptSlice = createSlice({
    name: 'Search Gpt',
    initialState:{
        ShowSearch:false,
        movieAiResult:null,
        movieTitle:null
    },
    reducers:{
        addSearch:(state)=>{
            state.ShowSearch = !state.ShowSearch
        },
        addMovieResult:(state,action)=>{
            state.movieAiResult = action.payload 
        },
        addMovieTitle:(state,action)=>{
            state.movieTitle = action.payload 
        } 
    }
});

export const {addSearch,addMovieResult,addMovieTitle} = showSearchGptSlice.actions;
export default showSearchGptSlice.reducer; 