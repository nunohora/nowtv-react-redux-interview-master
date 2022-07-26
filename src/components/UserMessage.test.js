import React from 'react';
import { shallow } from 'enzyme';
import UserMessage from './UserMessage';

describe('<UserMessage />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <UserMessage
        message={{
          avatar: null,
          message: 'test message',
        }}
      />
    );
    expect(wrapper).toMatchInlineSnapshot(`
      <li
        className="message-item"
      >
        <div
          className="message-info"
        >
          <div
            className="message-text"
          >
            test message
          </div>
          <div
            className="message-info-bottom"
          >
            <div
              className="message-date"
            >
              Invalid Date
            </div>
          </div>
        </div>
      </li>
    `);
  });
});
