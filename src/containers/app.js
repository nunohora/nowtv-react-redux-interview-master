import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { formatMessages } from '../utils';
import { useSelector } from 'react-redux';
import { getMessages, getMembers } from '../data';
import { Switch, Route } from 'react-router';
import AllMessages from './AllMessages';
import UserMessages from './UserMessages';

const loadingSelector = ({ data: { loading } }) => loading;
const composedMessagesSelector = ({ data: { messages, members } }) => formatMessages(messages, members);

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(loadingSelector);
  const composedMessages = useSelector(composedMessagesSelector);

  useEffect(() => {
    const fetchData = async () => {
      const messages = await getMessages();
      const members = await getMembers();
      dispatch({ type: 'SET_DATA', members, messages });
    };

    fetchData();
  }, [dispatch]);

  return (
    <main>
      <div className="content">
        {loading ? (
          <div className="loading-container">Loading...</div>
        ) : (
          <div>
            <h1>Welcome to my test solution!</h1>
            <Switch>
              <Route exact path="/">
                <AllMessages messages={composedMessages} />
              </Route>
              <Route
                path="/user/:id"
                render={({ match }) => (
                  <UserMessages messages={composedMessages.filter((message) => message.userId === match.params.id)} />
                )}
              />
            </Switch>
          </div>
        )}
      </div>
    </main>
  );
};

export default App;
