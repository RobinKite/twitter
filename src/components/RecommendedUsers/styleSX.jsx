export const userCardSX = {
  cursor: "pointer",
  flexDirection: "row",
  gap: "12px",
  alignItems: "center",
  padding: "6px 8px",
  transition: "background-color 200ms linear",
  flex: 1,
  "&:hover": {
    backgroundColor: (theme) => theme.palette[theme.palette.mode].hover,
  },
};
