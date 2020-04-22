import { userData } from "../../Variables/Let/";

let NUMBER = userData;

const switchingStateReducer = (state = NUMBER, action) => {
  switch(action.type){
    case 'BUTTON_STATE':
      return action.payload
    default:
      return state;
  }
}

export default switchingStateReducer;