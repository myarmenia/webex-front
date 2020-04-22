export const saveData = (buttonName) => {
  return {
    type: 'BUTTON_SAVE',
    payload: buttonName
  }
}