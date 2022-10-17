import { createSlice } from '@reduxjs/toolkit';
import { loadFromLocalStorage, persistedStore } from '../store';

const initialState = {
  name: '',
  users: [],
  currentRoom: '',
  rooms: [],
  messages: [],
};

const roomSlice = createSlice({
  name: 'roomAndName',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload.name;
    },
    setCurrentRoom: (state, action) => {
      state.currentRoom = action.payload.room;
    },
    addRoom: (state, action) => {
      state.rooms.push(action.payload.room);
    },
    setUsers: (state, action) => {
      state.users = action.payload.users;
    },
    setMessages: (state, action) => {
      state.messages = action.payload.messages;
    },
    addMessages: (state, action) => {
      state.messages.push(action.payload.messages);
    },
  },
});

export const {
  setName,
  setCurrentRoom,
  addRoom,
  setUsers,
  setMessages,
  addMessages,
} = roomSlice.actions;

export default roomSlice.reducer;
