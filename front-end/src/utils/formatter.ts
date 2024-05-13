export const formatNumericStringWithComma = (numString: string): string => {
  return numString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
