import React from 'react';

const UserMessage = ({ message: { message, timestamp } }) => (
  <li className="message-item">
    <div className="message-info">
      <div className="message-text">{message}</div>
      <div className="message-info-bottom">
        <div className="message-date">{new Date(timestamp).toDateString()}</div>
      </div>
    </div>
  </li>
);

export default UserMessage;
