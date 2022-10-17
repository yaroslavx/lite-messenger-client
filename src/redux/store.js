import { configureStore } from '@reduxjs/toolkit';
import roomReducer from './room/roomAndNameSlice';

const saveToLocalStorage = (state) => {
  try {
    sessionStorage.setItem('state', JSON.stringify(state));
  } catch (e) {
    console.error(e);
  }
};

const loadFromSessionStorage = () => {
  try {
    const stateStr = sessionStorage.getItem('state');
    return stateStr ? JSON.parse(stateStr) : undefined;
  } catch (e) {
    console.error(e);
    return undefined;
  }
};

const persistedStore = loadFromSessionStorage();

const store = configureStore({
  reducer: {
    room: roomReducer,
  },
  persistedStore,
});

store.subscribe(() => {
  const state = {
    name: store.getState().room.name,
    room: store.getState().room.rooms[0],
    users: store.getState().room.users,
  };

  sessionStorage.setItem('state', JSON.stringify(state));
});

export default store;
