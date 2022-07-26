import React from 'react';
import AllMessages from './AllMessages';
import { shallow } from 'enzyme';

describe('<AllMessages />', () => {
  const messages = [
    {
      id: 1,
      userId: 1,
      message: 'test message',
      avatar: null,
      email: 'joebloggs@gmail.com',
      timestamp: '12345',
      fullName: 'Joe Bloggs',
    },
    {
      id: 2,
      userId: 2,
      message: 'test message 2',
      avatar: null,
      email: 'joebloggs2@gmail.com',
      timestamp: '123455',
      fullName: 'Joe Bloggs 2',
    },
  ];

  test('should render correctly', () => {
    const wrapper = shallow(<AllMessages messages={messages} />);

    expect(wrapper).toMatchInlineSnapshot(`
      <ul
        className="messages-list"
      >
        <Message
          key="1"
          message={
            Object {
              "avatar": null,
              "email": "joebloggs@gmail.com",
              "fullName": "Joe Bloggs",
              "id": 1,
              "message": "test message",
              "timestamp": "12345",
              "userId": 1,
            }
          }
        />
        <Message
          key="2"
          message={
            Object {
              "avatar": null,
              "email": "joebloggs2@gmail.com",
              "fullName": "Joe Bloggs 2",
              "id": 2,
              "message": "test message 2",
              "timestamp": "123455",
              "userId": 2,
            }
          }
        />
      </ul>
    `);
  });
});
