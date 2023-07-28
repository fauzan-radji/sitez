export const search = (keyword, data) => {
  return data.filter((item) =>
    item.keyword.toLowerCase().includes(keyword.toLowerCase())
  );
};
