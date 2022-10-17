import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { StyledNameContainer } from './nameBlock.styled';
import { setName } from '../../redux/room/roomAndNameSlice';

const NameBlock = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  const handleEnter = () => {
    if (userName) {
      dispatch(setName({ name: userName }));
      navigate('/enterRoom');
    }
  };

  return (
    <StyledNameContainer>
      <input
        className='input-name'
        type='text'
        placeholder='Enter name'
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button disabled={isLoading} onClick={handleEnter} className='btn-login'>
        {isLoading ? 'PROCESS...' : 'Login'}
      </button>
    </StyledNameContainer>
  );
};

export default NameBlock;
