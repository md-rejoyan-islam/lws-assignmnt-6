// convert date 2024-07 - 24 to 12 Nov 2021

export const formatDate = (date) => {
  const options = { year: "numeric", month: "short", day: "numeric" };
  return new Date(date).toLocaleDateString("en-US", options);
};
