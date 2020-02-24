import { combineReducers } from 'redux';

import currentUser from './currentUser';
import coursesData from './coursesData';

export default combineReducers({
  currentUser,
  coursesData,
});