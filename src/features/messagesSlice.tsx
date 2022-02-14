import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MessagesAction{
  value: {
    id: string,
    author: string,
    message: string
  }[]
}

const initialState: MessagesAction = {
  value: []
}

export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessages: (state, action: PayloadAction<{
      id: string,
      author: string,
      message: string
    }>) => {
      state.value.unshift(action.payload)
    }
  }
})

export const { addMessages } = messagesSlice.actions;

export default messagesSlice.reducer;