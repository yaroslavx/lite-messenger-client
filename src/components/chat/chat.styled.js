import styled from 'styled-components';

export const StyledChatContainer = styled.div`
  * {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    outline: none;
    color: black;
  }

  .wrapper {
    max-width: 40%;
    margin: 100px auto;
    min-width: 720px;
  }

  .join-block {
    margin: 0 auto;
    width: 300px;
  }

  .join-block input {
    font-size: 24px;
    width: 100%;
    height: 50px;
    padding-bottom: 5px;
    padding-left: 10px;
    margin-bottom: 10px;
  }

  .join-block button {
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    font-weight: bold;
    cursor: pointer;
  }

  .chat {
    display: flex;
    height: 500px;
    width: 900px;
    margin: 50px auto;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    overflow: hidden;
  }

  .chat-users {
    border-right: 1px solid rgba(0, 0, 0, 0.2);
    width: 300px;
    background-color: #f5f8fa;
  }

  .btn-create-room {
    font-size: 15px;
    border: none;
    margin: 15px;
    padding: 5px;
    border-radius: 5px;
    background-color: #1db954;
    color: white;
  }

  .you,
  .room,
  .user {
    background-color: #e1e8ed;
    color: #14171a;
    padding: 5px;
    border-radius: 5px;
    width: fit-content;
    cursor: default;
  }

  .available-room {
    background-color: #e1e8ed;
    color: #14171a;
    padding: 5px;
    border-radius: 5px;
    width: fit-content;
    cursor: pointer;
  }

  .chat-messages {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    padding: 30px;
  }

  .send-message {
    border: none;
    border-top: white;
  }

  .messages {
    flex: 1;
    height: calc(100% - 155px);
    overflow: auto;
  }

  .message {
    margin-bottom: 20px;
  }

  .btn-send {
    background-color: #1da1f2;
    font-size: 15px;
    border: none;
    padding: 5px;
    border-radius: 5px;
    color: white;
  }

  .message p {
    display: inline-flex;
    border-radius: 10px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    background-color: #1db954;
    padding: 10px 15px 15px;
    color: #fff;
    margin-bottom: 2px;
  }

  .message span {
    opacity: 0.5;
    font-size: 14px;
  }

  .chat-users ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .chat-messages form {
    margin-top: 20px;
    padding-top: 20px;
  }

  .chat-messages form textarea {
    width: 100%;
    margin-bottom: 10px;
  }

  .input-message {
    resize: none;
    border: 1px solid #aab8c2;
    border-radius: 5px;
    padding: 5px;
  }

  .awailable-rooms {
    display: flex;
    gap: 10px;
    padding: 0 15px 15px 15px;
    width: auto;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    flex-direction: column;
  }

  .online-users {
    display: flex;
    gap: 7px;
    padding: 15px;
    width: auto;
    flex-direction: column;
  }
`;
