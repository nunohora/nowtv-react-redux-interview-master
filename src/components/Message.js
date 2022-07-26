import React from 'react';
import { Link } from 'react-router-dom';
import './message.css';

const Message = ({ message: { message, avatar, email, timestamp, fullName, userId } }) => {
  const date = new Date(timestamp);

  return (
    <li className="message-item">
      <div className="user-avatar-wrapper" role="img" aria-label="User Avatar">
        {avatar && <img src={avatar} alt={fullName} />}
      </div>
      <div className="message-info">
        <div className="message-text">{message}</div>
        <div className="message-info-bottom">
          <div className="user-info">
            <div className="user-fullname">
              <Link to={`/user/${userId}`}>{fullName}</Link>
            </div>
            <div className="user-email">{email}</div>
          </div>
          <div className="message-date">{date.toDateString()}</div>
        </div>
      </div>
    </li>
  );
};

export default Message;
