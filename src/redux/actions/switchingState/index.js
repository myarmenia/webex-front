export const switchingState = (buttonName) => {
  return {
    type: 'BUTTON_STATE',
    payload: buttonName
  }
}