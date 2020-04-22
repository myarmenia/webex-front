import { CONST_USER_DATA } from "../../Variables/Const";

const NUMBER = CONST_USER_DATA.numberOfTheMainButtonOfTheSwitch;

const switchingTabPanelsReducer = (state = NUMBER, action) => {
  switch(action.type){
    case 'BUTTON_NAME':
      return action.payload
    default:
      return state;
  }
}

export default switchingTabPanelsReducer;