import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name :'movie',
    initialState:{
        nowPlayingMovies: null,
        PopularMovies: null,
        TopRatedrMovies: null,
        UpcomingMovies: null,
        trailerVideo: null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.PopularMovies= action.payload;
        },
        addTopRatedrMovies:(state,action)=>{
            state.TopRatedrMovies= action.payload;
        },
        addUpcomingMovies:(state,action)=>{
            state.UpcomingMovies= action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo = action.payload;
        },
    },
});

export const{addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTopRatedrMovies,addUpcomingMovies}= movieSlice.actions;

export default movieSlice.reducer;