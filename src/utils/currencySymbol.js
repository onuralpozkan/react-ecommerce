export const currencySymbol = (amount) => {
  return parseFloat(amount).toLocaleString("tr-TR", {
    style: "currency",
    currency: "TRY",
  });
};
