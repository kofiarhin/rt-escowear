export const flattenData = (data) => {
  const categories = Object.keys(data);
  const flattened = [];
  categories.forEach((cat) => {
    data[cat].forEach((item) => {
      item.category = cat;

      flattened.push(item);
    });
  });

  return flattened;
};
