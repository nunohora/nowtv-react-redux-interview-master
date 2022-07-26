import { composeMessages } from './utils';

const messages = [
  {
    id: 1,
    message: 'test message 1',
    timestamp: '2016-06-03T20:24:29Z',
    userId: 1,
  },
  {
    id: 2,
    message: 'test message 2',
    timestamp: '2016-05-03T20:24:29Z',
    userId: 2,
  },
  {
    id: 3,
    message: 'test message 3',
    timestamp: '2016-03-03T20:24:29Z',
    userId: 1,
  },
];

const members = [
  {
    id: 1,
    avatar: null,
    email: 'joebloggs@hmail.com',
    firstName: 'Joe',
    lastName: 'Bloggs',
  },
  {
    id: 2,
    avatar: null,
    email: 'jane@hmail.com',
    firstName: 'Jane',
    lastName: 'Bloggs',
  },
];

describe('utils.js', () => {
  describe('composeMessages', () => {
    test('returns a new array with new ordered data', () => {
      expect(composeMessages(messages, members)).toMatchObject([
        {
          avatar: null,
          email: 'joebloggs@hmail.com',
          fullName: 'Joe Bloggs',
          id: 3,
          message: 'test message 3',
          timestamp: '2016-03-03T20:24:29Z',
          userId: 1,
        },
        {
          avatar: null,
          email: 'jane@hmail.com',
          fullName: 'Jane Bloggs',
          id: 2,
          message: 'test message 2',
          timestamp: '2016-05-03T20:24:29Z',
          userId: 2,
        },
        {
          avatar: null,
          email: 'joebloggs@hmail.com',
          fullName: 'Joe Bloggs',
          id: 1,
          message: 'test message 1',
          timestamp: '2016-06-03T20:24:29Z',
          userId: 1,
        },
      ]);
    });
  });
});
