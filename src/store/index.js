import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authTokenReducer from "./authTokenSlice";
import adminDataReducers from "./adminDataSlice";

// const persistConfig = {
//   key: "root",
//   storage,
// };

const authTokenPersistConfig = {
  key: "authToken",
  storage,
};

const adminDataPersistConfig = {
  key: "adminData",
  storage,
};

const rootReducer = combineReducers({
  authToken: persistReducer(authTokenPersistConfig, authTokenReducer),
  adminData: persistReducer(adminDataPersistConfig, adminDataReducers),
});

export const store = configureStore({
  reducer: rootReducer,
});

export const persistor = persistStore(store);