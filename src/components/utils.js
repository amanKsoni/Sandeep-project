export function findMaxByKey(data, key) {

  return data.reduce((maxObj, currentObj) => {
    const currentValue = parseFloat(currentObj[key]) || 0; // Handle numeric and percentage values
    const maxValue = parseFloat(maxObj[key]) || 0;

    return currentValue > maxValue ? currentObj : maxObj;
  },{});
}

export function getRankSuffix(rank) {
  if (typeof rank !== "number" || rank <= 0) {
    throw new Error("Rank must be a positive number.");
  }

  const lastDigit = rank % 10;
  const lastTwoDigits = rank % 100;

  // Handle special cases for 11th, 12th, 13th
  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return `${rank}th`;
  }

  // Add appropriate suffix based on the last digit
  switch (lastDigit) {
    case 1:
      return `${rank}st`;
    case 2:
      return `${rank}nd`;
    case 3:
      return `${rank}rd`;
    default:
      return `${rank}th`;
  }
}
