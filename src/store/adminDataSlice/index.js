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
    addNewReward: (state, action) => {
      if (state.adminData.superAdminRewards) {
        state.adminData.superAdminRewards.push(action.payload);
      } else {
        state.adminData.superAdminRewards = [action.payload];
      }
    },
    deleteReward: (state, action) => {
      const rewardId = action.payload;
      state.adminData.superAdminRewards = state.adminData.superAdminRewards.filter(
        (reward) => reward._id !== rewardId
      );
    },
    updateRewardRedux: (state, action) => {
      const updatedData = action.payload;

      state.adminData.superAdminRewards = state.adminData.superAdminRewards.map(
        (reward) =>
          reward._id === updatedData._id
            ? { ...reward, ...updatedData }
            : reward
      );
    },
  },
});

export const { setAdminData, clearAdminData, addNewReward, deleteReward, updateRewardRedux } = adminData.actions;

export const selectAdminData = (state) => state.adminData.adminData;

export default adminData.reducer;