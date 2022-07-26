import React from 'react';
import { Link } from 'react-router-dom';
import './user-messages.css';
import UserMessage from '../components/UserMessage';

const UserMessages = ({ messages }) => {
  const user = messages.length > 0 ? messages[0] : {};
  const { fullName, avatar } = user;

  return (
    <>
      {messages.length && (
        <>
          <div className="title-wrapper">
            <div className="user-avatar-wrapper user-messages-wrapper" role="img" aria-label="User Avatar">
              {avatar && <img src={avatar} alt={fullName} />}
            </div>
            <h2 className="user-name">{fullName}</h2>
            <div className="back-link">
              <Link to="/">{`< Back`}</Link>
            </div>
          </div>
          <div className="user-messages-container">
            {messages.map((message) => (
              <UserMessage key={message.id} message={message} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default UserMessages;
