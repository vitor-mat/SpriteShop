import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IProduct{
  id: string,
  title: string,
  price: string
}

interface IProductState{
  value: IProduct[]
}

const initialState: IProductState = {
  value: []
}

const cartSlice = createSlice({
  name: "cartProducts",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<IProduct>) => {
      state.value.unshift(action.payload)
    },
    removeProduct: ((state, action: PayloadAction<number>) => {
      state.value.splice(action.payload, 1)
    })
  }
})

export const { addProduct, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;