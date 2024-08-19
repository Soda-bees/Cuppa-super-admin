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
      const { _id, updatedData } = action.payload; // Destructure _id and updated data from the action payload
    
      state.adminData.superAdminRewards = state.adminData.superAdminRewards.map(
        (reward) => 
          reward._id === _id 
            ? { ...reward, ...updatedData } // Update the matched reward with the new data
            : reward // Return other rewards unchanged
      );
    },
  },
});

export const { setAdminData, clearAdminData, addNewReward , deleteReward} = adminData.actions;

export const selectAdminData = (state) => state.adminData.adminData;

export default adminData.reducer;