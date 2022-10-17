import Chat from './components/chat/Chat';
import NameBlock from './components/nameBlock/NameBlock.jsx';
import RoomBlock from './components/roomBlock/RoomBlock.jsx';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  addMessages,
  addRoom,
  setCurrentRoom,
  setMessages,
  setUsers,
} from './redux/room/roomAndNameSlice';
import socket from './socket';
import { useEffect } from 'react';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NameBlock />,
  },
  {
    path: '/enterRoom',
    element: <RoomBlock />,
  },
  {
    path: '/room/:id',
    element: <Chat />,
  },
]);

const App = () => {
  const dispatch = useDispatch();

  const messages = useSelector((state) => state.room.messages);

  useEffect(() => {
    socket.on('ROOM:SET_USERS', (users) =>
      dispatch(setUsers({ users: users }))
    );
    socket.on('ROOM:NEW_MESSAGE', (messages) =>
      dispatch(addMessages({ messages: messages }))
    );
    console.log('rerender');
  }, []);

  return (
    <div className='app'>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
