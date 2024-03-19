export const makeRandomBackgroundColor = (index: number) => {
  const colorArray = ['#ff0000', '#29c936', '#ff8c00', '#000000', '#008000', '#f122f1', '#0000ff'];
  return colorArray[index % colorArray.length];
};
