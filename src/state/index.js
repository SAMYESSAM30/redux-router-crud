import { configureStore } from '@reduxjs/toolkit'
import posts from "./postSlice"
// const store = configureStore({
//   reducer: { posts },
// });
const store = configureStore({ reducer: posts })
export default store;