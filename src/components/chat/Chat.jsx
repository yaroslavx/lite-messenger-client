import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import {
  addMessages,
  setCurrentRoom,
  setMessages,
  setUsers,
} from '../../redux/room/roomAndNameSlice';
import socket from '../../socket';
import { StyledChatContainer } from './chat.styled';
import TimeAgo from 'javascript-time-ago';

// English.
import en from 'javascript-time-ago/locale/en';

TimeAgo.addDefaultLocale(en);

// Create formatter (English).
const timeAgo = new TimeAgo('en-US');

function Chat() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [messageValue, setMessageValue] = useState('');

  console.log(window.location.pathname.split('/')[2]);
  const messagesRef = useRef(null);
  const roomId =
    useSelector((state) => state.room.rooms[0]) ||
    JSON.parse(localStorage.getItem('state')).room;

  const currentRoom = useSelector((state) => state.room.currentRoom);

  const rooms = useSelector((state) => state.room.rooms);

  const userName =
    useSelector((state) => state.room.name) ||
    JSON.parse(localStorage.getItem('state')).name;

  let users = useSelector((state) => state.room.users);
  if (!users.length) users = JSON.parse(localStorage.getItem('state')).users;

  const messages = useSelector((state) => state.room.messages);
  // console.log(messages);
  // console.log(userName);
  // console.log(rooms, users, messages);
  console.log(messages);

  const onSendMessage = async () => {
    const time = Date.now();
    console.log(userName, currentRoom, messageValue);
    socket.emit('ROOM:NEW_MESSAGE', {
      userName,
      roomId: currentRoom,
      text: messageValue,
      time,
    });
    dispatch(addMessages({ messages: { userName, text: messageValue, time } }));
    setMessageValue('');
  };

  useEffect(() => {
    messagesRef.current.scrollTo(0, 99999);
  }, [messages]);

  const handleCreateRoom = () => {
    navigate('/enterRoom');
    socket.emit('ROOM:LEFT', roomId);
  };

  const handleChangeRoom = async (room) => {
    // await axios.post('/rooms', { room, userName });
    socket.emit('ROOM:LEFT', roomId);
    socket.emit('ROOM:JOIN', { roomId: room, userName });
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/${room}`
    );
    console.log(data);
    data.users.push(userName);
    dispatch(setUsers({ users: data.users }));
    dispatch(setMessages({ messages: data.messages }));
    dispatch(setCurrentRoom({ room: room }));
  };

  return (
    <StyledChatContainer>
      <div className='chat'>
        <div className='chat-users'>
          <button className='btn-create-room' onClick={handleCreateRoom}>
            Create or enter existing room
          </button>
          <div className='awailable-rooms'>
            <span>
              You <b className='you'>{userName}</b>
            </span>
            <span onClick={handleCreateRoom}>
              Current room <b className='room'>{currentRoom}</b>
            </span>
            Available rooms:
            {rooms.map((room) => (
              <b
                className='available-room'
                onClick={(room) => handleChangeRoom(room.target.outerText)}
              >
                {room}
              </b>
            ))}
          </div>

          <div className='online-users'>
            <span>Online {users.length}:</span>
            <ul>
              {users.map((name, index) => (
                <p className='user' key={name + index}>
                  {name}
                </p>
              ))}
            </ul>
          </div>
        </div>
        <div className='chat-messages'>
          <div ref={messagesRef} className='messages'>
            {messages.map((message, i) => (
              <div className='message' key={i}>
                <p>{message.text}</p>
                <div>
                  <span>
                    {message.userName}
                    {'   '}
                    <span className='timeago'>
                      {timeAgo.format(message.time)}
                    </span>
                  </span>
                </div>
              </div>
            ))}
          </div>
          <form className='send-message'>
            <textarea
              value={messageValue}
              onChange={(e) => setMessageValue(e.target.value)}
              className='input-message'
              rows='3'
            ></textarea>
            <button onClick={onSendMessage} type='button' className='btn-send'>
              Send
            </button>
          </form>
        </div>
      </div>
    </StyledChatContainer>
  );
}

export default Chat;
