import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import data from './dataReducer';

export const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    data,
  });
