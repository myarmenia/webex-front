import { userData } from '../../Variables/Let';
const initialState = [
  {
    textInputCustomer: '',
    textInputContact: userData.userContactPhone
  },
  {
    textInputCustomer: userData.userName,
    textInputContact: userData.userMail,
  },
  {
    textInputCustomer: userData.userSurName,
    textInputContact: userData.contactSlack,
  },
  {
    textInputContact: userData.contactLinkedin,
  },
  {
    textInputContact: userData.contactGithub,
  }
];

const textReducer = (state = initialState, action) => {
  switch (action.type){
    case 'textInInput':
      return [...state, action.type];
    default:
      return [...state];
  }
}

export default textReducer;