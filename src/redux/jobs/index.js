import { configureStore } from "@reduxjs/toolkit";
import myreducer from "../reducers";

const jobs = configureStore({
  //reducer
  reducer: myreducer,
});

export default jobs;
