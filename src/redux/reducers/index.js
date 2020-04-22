import { combineReducers } from 'redux';

import currentUser from './currentUser';
import coursesData from './coursesData';
/* profile */
import switchingTabPanelsReducer from './switchingTabPanels/';
import saveDataReducer from './saveData/';
import switchingStateReducer from './switchingState/';
import textsInInputReducer from './textsInInput/';

export default combineReducers({
  currentUser,
  coursesData,
	switchingTabPanels: switchingTabPanelsReducer,
  saveData: saveDataReducer,
  switchingState: switchingStateReducer,
  textsInInput: textsInInputReducer
});