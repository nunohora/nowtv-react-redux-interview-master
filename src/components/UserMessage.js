import React from 'react';

const UserMessage = ({ message: { message, timestamp } }) => {
  const date = new Date(timestamp);

  return (
    <div className="message-item">
      <div className="message-info">
        <div className="message-title">Messages don't have titles</div>
        <div className="message-info-bottom">
          <div className="message-date">{date.toDateString()}</div>
        </div>
      </div>
    </div>
  );
};

export default UserMessage;
