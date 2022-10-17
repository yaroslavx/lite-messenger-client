import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import store from './redux/store';
import App from './App';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom';
import Chat from './components/chat/Chat';
import NameBlock from './components/nameBlock/NameBlock.jsx';
import RoomBlock from './components/roomBlock/RoomBlock.jsx';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
