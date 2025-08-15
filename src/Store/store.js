import { configureStore } from '@reduxjs/toolkit';
import reducers from "./combineReducers";

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // <-- désactive complètement la vérification
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
