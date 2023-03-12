export const numberToUSD = (number: number) => {
  const formattedNum: string = number.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  return formattedNum;
};
