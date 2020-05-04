// import { CONST_USER_DATA } from "../../Variables/Const";
export const buttonSwitch = [
  "financial_data",
  "personal_information",
  "change_password",
  // "4",
  // "5",
  // "6",
];

const switchingTabPanelsReducer = (state = 0, action) => {
  switch (action.type) {
    case "BUTTON_NAME":
      return action.payload;
    default:
      return state;
  }
};

export default switchingTabPanelsReducer;
