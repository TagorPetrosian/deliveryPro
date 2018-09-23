export default volumeParams => {
  const invalidParams = volumeParams
    .split(",")
    .map(param => param.trim())
    .filter(param => {
      return param === false;
    });

  if (invalidParams.length) {
    return `These parameters are invalid: ${invalidParams}`;
  }
};
