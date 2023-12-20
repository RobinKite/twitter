import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/themes/theme";
import AppRoutes from "./AppRoutes";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  );
}
