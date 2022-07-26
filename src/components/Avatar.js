import React from 'react';

const Avatar = ({ avatar, fullName }) => (
  <div className="user-avatar-wrapper" role="img" aria-label="User Avatar">
    {avatar && <img src={avatar} alt={fullName} />}
  </div>
);

export default Avatar;
