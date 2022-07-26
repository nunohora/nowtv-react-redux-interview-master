import React from 'react';
import { shallow } from 'enzyme';
import Message from './Message';

describe('<Message />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <Message
        message={{
          avatar: null,
          email: 'joebloggs@gmail.com',
          timestamp: '2016-11-09T05:04:58Z',
          fullName: 'Joe Bloogs',
          userId: 1,
        }}
      />
    );
    expect(wrapper).toMatchInlineSnapshot(`
      <li
        className="message-item"
      >
        <Avatar
          avatar={null}
          fullName="Joe Bloogs"
        />
        <div
          className="message-info"
        >
          <div
            className="message-text"
          />
          <div
            className="message-info-bottom"
          >
            <div
              className="user-info"
            >
              <div
                className="user-fullname"
              >
                <Link
                  to="/user/1"
                >
                  Joe Bloogs
                </Link>
              </div>
              <div
                className="user-email"
              >
                joebloggs@gmail.com
              </div>
            </div>
            <div
              className="message-date"
            >
              Wed Nov 09 2016
            </div>
          </div>
        </div>
      </li>
    `);
  });
});
