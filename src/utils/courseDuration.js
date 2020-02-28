const appendZero = num => (num < 10 ? "0" + num : "" + num);

export default value => {
  const minutes = appendZero(parseInt(value / 60)),
    seconds = appendZero(parseInt(value % 60));

  return `${minutes}:${seconds}`;
};
