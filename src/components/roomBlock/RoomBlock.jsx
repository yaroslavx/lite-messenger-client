import React, { useEffect, useLayoutEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {
  addRoom,
  setCurrentRoom,
  setMessages,
  setName,
  setUsers,
} from '../../redux/room/roomAndNameSlice';
import { useNavigate } from 'react-router-dom';
import { StyledRoomContainer } from './roomBlock.styled';
import store from '../../redux/store';
import socket from '../../socket';

const RoomBlock = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [roomId, setRoomId] = useState('');
  const [isLoading, setLoading] = useState(false);
  const userName =
    useSelector((state) => state.room.name) ||
    JSON.parse(localStorage.getItem('state')).name;

  const handleEnter = async () => {
    if (!roomId || !userName) {
      return console.log('Неверные данные');
    }
    dispatch(addRoom({ room: roomId }));
    dispatch(setCurrentRoom({ room: roomId }));
    setLoading(true);
    const obj = {
      roomId,
      userName,
    };
    // console.log(obj);
    await axios.post(`${process.env.REACT_APP_API_URL}/rooms`, obj);
    socket.emit('ROOM:JOIN', obj);
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/rooms/${obj.roomId}`
    );
    // console.log(data);
    dispatch(setUsers({ users: data.users }));
    dispatch(setMessages({ messages: data.messages }));
    navigate(`/room/${roomId}`);
  };

  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/');
  };

  const stateStr = localStorage.getItem('state');

  return (
    <StyledRoomContainer>
      <input
        className='input-room'
        type='text'
        placeholder='Room ID'
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
      />

      {stateStr ? JSON.parse(stateStr).name : undefined}
      <button className='btn-enter' disabled={isLoading} onClick={handleEnter}>
        {isLoading ? 'Entering...' : 'Enter room'}
      </button>
      <button onClick={handleLogout} className='btn-logout'>
        Logout
      </button>
    </StyledRoomContainer>
  );
};

export default RoomBlock;
