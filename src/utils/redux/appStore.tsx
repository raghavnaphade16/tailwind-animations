import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slice/loginSlice";
const appStore = configureStore({
  reducer: {
    login: loginSlice,
  },
});
export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
export default appStore;
