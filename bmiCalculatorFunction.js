const calculateBMI = function (weightInKg, heightInMeter) {
  try {
    return weightInKg / (heightInMeter * heightInMeter);
  } catch (error) {
    return undefined;
  }
};

export { calculateBMI };
