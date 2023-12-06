export function getDaysArray(
  year = new Date().getFullYear(),
  month = new Date().getMonth() + 1,
) {
  const daysInMonth = new Date(year, month, 0).getDate();
  return Array.from({ length: daysInMonth }, (_, i) => i + 1);
}

export function getYearsArray() {
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let i = currentYear; i > currentYear - 100; i--) {
    years.push(i);
  }
  return years;
}

export const monthsArray = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function getBirthdayInSeconds({ year, month, day }) {
  const selectedDate = new Date(year, month - 1, day);
  const seconds = Math.round(selectedDate.getTime() / 1000);
  return seconds;
}
