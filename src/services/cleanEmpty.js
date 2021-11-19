export const cleanEmpty = (obj) => {
  let filteredParams = Object.fromEntries(
    Object.entries(obj).filter(([_, value]) => value != "")
  );
  return filteredParams;
};
