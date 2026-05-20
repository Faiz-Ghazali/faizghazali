import { configureStore } from '@reduxjs/toolkit'

// Add reducers here as you build out your app
const appReducer = (state = null) => state

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
})
