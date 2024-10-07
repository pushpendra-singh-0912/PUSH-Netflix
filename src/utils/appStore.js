import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";



const appStore = configureStore(
    {
        reducer:{
            user:userSliceReducer,
            moives:moviesReducer,
            gpt:gptReducer
        }
    }
)

export default appStore;