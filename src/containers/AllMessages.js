import React from 'react';
import Message from '../components/Message';

const AllMessages = ({ messages }) => (
  <ul className="messages-container">
    {messages.map((message) => (
      <Message key={message.id} message={message} />
    ))}
  </ul>
);

export default AllMessages;
