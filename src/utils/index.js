export const compareByDate = (a, b) => {
  const dateA = new Date(a.createdAt);
  const dateB = new Date(b.createdAt);

  if (dateA < dateB) {
    return 1;
  } else if (dateA > dateB) {
    return -1;
  } else {
    return 0;
  }
};

export function capitalize(text) {
  if (text.length <= 1) return text.toUpperCase();
  return text[0].toUpperCase() + text.substr(1).toLowerCase();
}
