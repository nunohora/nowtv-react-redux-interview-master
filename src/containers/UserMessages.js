import React from 'react';
import { Link } from 'react-router-dom';
import UserMessage from '../components/UserMessage';
import Avatar from '../components/Avatar';

const UserMessages = ({ messages }) => {
  const user = messages.length > 0 ? messages[0] : {};
  const { fullName, avatar } = user;

  return (
    !!messages.length && (
      <>
        <div className="title-wrapper">
          <Avatar avatar={avatar} fullName={fullName} />
          <h2 className="user-name">{fullName}</h2>
          <div className="back-link">
            <Link to="/">{`< Back`}</Link>
          </div>
        </div>
        <ul className="messages-list">
          {messages.map((message) => (
            <UserMessage key={message.id} message={message} />
          ))}
        </ul>
      </>
    )
  );
};

export default UserMessages;
