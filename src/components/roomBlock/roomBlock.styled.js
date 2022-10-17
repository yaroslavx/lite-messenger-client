import styled from 'styled-components';

export const StyledRoomContainer = styled.div`
  margin: 50px auto;
  width: 300px;
  display: flex;
  flex-direction: column;

  .input-room {
    outline: none;
    width: 278px;
    border: 1px solid #14171a;
    padding: 10px;
    border-radius: 5px;
    font-size: 21px;
    margin: 0 0 15px 0;
    color: #14171a;
    background-color: #f5f8fa;
  }

  .btn-enter {
    border-radius: 5px;
    width: 300px;
    border: none;
    padding: 10px;
    font-size: 21px;
    background-color: #1da1f2;
    color: white;
    margin: 0 0 15px 0;
  }

  .btn-logout {
    border-radius: 5px;
    width: 300px;
    border: 1px solid #14171a;
    color: #14171a;
    padding: 10px;
    font-size: 21px;
    background-color: #f5f8fa;
    margin: 0 0 15px 0;
  }
`;
