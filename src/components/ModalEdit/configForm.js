export const formFields = [
  { name: "fullName", label: "Name", rows: 1, maxLength: 20 },
  { name: "bio", label: "Bio", rows: 3, maxLength: 100 },
  { name: "location", label: "Location", rows: 1, maxLength: 55 },
  { name: "userTag", label: "Tag", rows: 1, maxLength: 55 },
  // { name: "day", label: "Day", rows: 1, maxLength: 55 },
  // { name: "month", label: "Month", rows: 1, maxLength: 55 },
  // { name: "year", label: "Year", rows: 1, maxLength: 55 },
];

export const configDateForm = [
  {
    name: "month",
    label: "month",
    rows: 1,
    options: [
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
    ],
  },
  {
    name: "day",
    label: "day",
    rows: 1,
    // options: Array.from({ length: 31 }, (_, i) => i + 1),
  },
  {
    name: "year",
    label: "year",
    rows: 1,
    options: Array.from({ length: 112 }, (_, i) => 1910 + i), // Генерируем годы
  },
];
