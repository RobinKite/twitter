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

export const getDaysInMonth = (month) => {
  if (month === "February") {
    return Array.from({ length: 28 }, (_, i) => i + 1);
  }
  if (["April", "June", "September", "November"].includes(month)) {
    return Array.from({ length: 30 }, (_, i) => i + 1);
  }
  return Array.from({ length: 31 }, (_, i) => i + 1);
};

export const formatTimestamp = (timestamp) => {
  return timestamp ? new Date(Number(timestamp) * 1000).toLocaleDateString() : null;
};

export const formatBirthdate = (birthdateInSeconds) => {
  const birthdate = new Date(birthdateInSeconds * 1000);

  const day = birthdate.getDate();
  const month = monthsArray[birthdate.getMonth()];
  const year = birthdate.getFullYear();

  return { day, month, year };
};
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

export const getTimeDifference = (createdAt) => {
  const postDate = new Date(createdAt);
  const currentDate = new Date();

  const difference = currentDate - postDate;
  const seconds = Math.floor(difference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return postDate.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  } else if (hours > 0) {
    return `${hours}h`;
  } else if (minutes > 0) {
    return `${minutes}m`;
  } else {
    return `${seconds}s`;
  }
};
