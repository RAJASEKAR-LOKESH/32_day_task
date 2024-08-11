import { createSlice } from '@reduxjs/toolkit'
export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    amount:[1,1,1,1,1],
    price:[549,899,1249,280,499],
    result:[549,899,1249,280,499]
  },
  reducers: {
    increment: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      const id = action.payload;
      state.amount[id]=state.amount[id]+1
      state.result[id]=state.price[id]*state.amount[id]
    },
    decrement: (state, action) => {
      const id = action.payload;
      state.amount[id] = Math.max((state.amount[id] || 0)-1,1)
      state.result[id]=(state.price[id])*state.amount[id]
    },
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer