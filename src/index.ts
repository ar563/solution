export const getItemsMaxNumber = (items: { name: string }[]): number => {
  let maxNumber = 0;
  items.forEach((item) => {
    const matchingStrings = item.name.match(/\d+/g);
    matchingStrings?.forEach((matchingString) => {
      const matchingNumber = parseInt(matchingString);
      if (maxNumber >= matchingNumber) return;
      maxNumber = matchingNumber;
    });
  });

  return maxNumber;
};
