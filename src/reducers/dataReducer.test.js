import dataReducer from './dataReducer';

describe('dataReducer', () => {
  test('SET_DATA', () => {
    const action = {
      type: 'SET_DATA',
      members: [{ id: 1, firstName: 'Joe' }],
      messages: [{ id: 1, message: 'test message' }],
    };

    expect(dataReducer(undefined, action)).toMatchInlineSnapshot(`
      Object {
        "loading": false,
        "members": Array [
          Object {
            "firstName": "Joe",
            "id": 1,
          },
        ],
        "messages": Array [
          Object {
            "id": 1,
            "message": "test message",
          },
        ],
      }
    `);
  });
});
