import { userData } from "../../Variables/Let/";

let NUMBER = userData.saveData;

const saveDataReducer = (state = NUMBER, action) => {
  switch(action.type){
    case 'BUTTON_SAVE':
      return action.payload
    default:
      return state;
  }
}

export default saveDataReducer;