import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from './Avatar';

const Message = ({ message: { message, avatar, email, timestamp, fullName, userId } }) => (
  <li className="message-item">
    <Avatar avatar={avatar} fullName={fullName} />
    <div className="message-info">
      <div className="message-text">{message}</div>
      <div className="message-info-bottom">
        <div className="user-info">
          <div className="user-fullname">
            <Link to={`/user/${userId}`}>{fullName}</Link>
          </div>
          <div className="user-email">{email}</div>
        </div>
        <div className="message-date">{new Date(timestamp).toDateString()}</div>
      </div>
    </div>
  </li>
);

export default Message;
