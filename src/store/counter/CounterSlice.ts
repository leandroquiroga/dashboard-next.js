import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  count: number;
  isReady: boolean;
}

const initialState: CounterState = {
  count: 5,
  isReady: false,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    initCounterState: (state, action: PayloadAction<number>) => { 
      if (state.isReady) return;

      state.count = action.payload;
      state.isReady = true
    },

    increment: (state) => {
      state.count++
    },
    decrement: (state) => {
      if (state.count === 0) return;
      state.count--
    },

    incrementByAmaount: (state, action: PayloadAction<number>) => {
      if (action.payload < 0) action.payload = 0;
      state.count += action.payload
    }
  },
});


export const {
  increment,
  decrement,
  incrementByAmaount,
  initCounterState
} = counterSlice.actions;
export default counterSlice.reducer;