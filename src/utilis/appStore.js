import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import showSearchGptReducer from "./showSearcGptSlice"
import configReducer from "./configSlice"
const appStore = configureStore({
    reducer:{
       user: userReducer,
       movies: moviesReducer,
       search: showSearchGptReducer,
       config: configReducer
    }
});

export default appStore;