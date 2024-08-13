import { createSlice } from "@reduxjs/toolkit";

export const adminData = createSlice({
  name: "admin",
  initialState: {
    adminData: null,
  },
  reducers: {
    setAdminData: (state, action) => {
      state.adminData = action.payload;
    },
    clearAdminData: (state) => {
      state.adminData = null;
    },
  },
});

export const { setAdminData, clearAdminData } = adminData.actions;

export const selectAdminData = (state) => state.adminData.adminData;

export default adminData.reducer;