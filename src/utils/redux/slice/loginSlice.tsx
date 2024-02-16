import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface loginComponentState {
  loginComponent: true | false;
}
const initialState: loginComponentState = {
  loginComponent: false,
};

const LoginComponentSlice = createSlice({
  name: "loginComponent",
  initialState,
  reducers: {
    showModal: (state, action: PayloadAction<true | false>) => {
      state.loginComponent = action.payload;
    },
  },
});

export const { showModal } = LoginComponentSlice.actions;
export default LoginComponentSlice.reducer;
