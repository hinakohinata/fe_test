import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
// import { toast } from 'react-toastify';
import axios from "axios";
// import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

// // dotenv.load();
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export interface userState {
  isLoggedIn: any,
  username: any,
  userrole: any
};

const initialState: userState = {
  isLoggedIn: false,
  username: null,
  userrole: null
};

export const login = createAsyncThunk('author/create', async (param: any) => {
  console.log(param)
  // const { username, password } = param;
  const username="admin"
  const password="123456"
  // Call API
  const response = await axios.post<any>(API_URL+'user/login', { username, password });

  return response.data;
})



const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.isLoggedIn = false;
      state.username = null;
      state.userrole = null;
    },
    setUser: (state, action) => {
      const { username, role } = action.payload;
      state.username = username;
      state.isLoggedIn = true;
      state.userrole = role;
    }
    
  },
  extraReducers(builder) {
    builder
      .addCase(login.fulfilled, (state, action) => {
        if (action.payload.error) {
          // Login thất bại
          // toast.error(action.payload.error, {
          //   position: "top-right",
          //   autoClose: 5000,
          // });
        } else {
          console.log(action.payload)
          // toast.success("Thành công" + action.payload.name + "  " + action.payload.role, {
          //   position: "top-right",
          //   autoClose: 5000,
          // });
          let role;
          const user = action.payload;
          sessionStorage.setItem("user_id", user.name);
          if (user.role1 == 1) {
            role = "1";
          }
          if (user.role2 == 1) {
            role = "2";
          }
          if (user.role3 == 1) {
            role = "3";
          }

          if (user.role4 == 1) {
            role = "4";

          }
          if (user.role5 == 1) {
            role = "5";

          }

          if (user.role6 == 1) {
            role = "6";

          }

          state.isLoggedIn = true;
          state.username = user.user_id;
          state.userrole = role;
          console.log("set ",state.isLoggedIn,state.username,state.userrole)
        }
        // toast.error(action.payload+action.payload.error, {
        //   position: "top-right",
        //   autoClose: 5000,
        // });
      })
  }
});

export const { logout, setUser } = userSlice.actions;
export default userSlice.reducer;

// Selectors
export const selectIsLoggedIn = (state: RootState) => state.user.isLoggedIn;
export const getUsername = (state: RootState) => state.user.username;
export const getRole = (state: RootState) => state.user.userrole;


