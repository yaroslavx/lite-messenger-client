import styled from 'styled-components';

export const StyledNameContainer = styled.div`
  margin: 50px auto;
  width: 300px;
  display: flex;
  gap: 15px;
  /* border: 1px solid black; */

  .input-name {
    outline: none;
    width: 278px;
    border: 1px solid #14171a;
    padding: 10px;
    border-radius: 5px;
    font-size: 21px;
    background-color: #f5f8fa;
    color: #14171a;
  }

  .btn-login {
    border-radius: 5px;
    width: fit-content;
    margin: auto;
    border: none;
    padding: 10px 15px;
    font-size: 21px;
    background-color: #1da1f2;
    color: white;
  }
`;
