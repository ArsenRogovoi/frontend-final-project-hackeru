export const makeFirstLetterCapital = (string) => {
  const term = string.toLowerCase().trim();
  return term.chatAt(0).toUpperCase() + term.slice(1);
};
