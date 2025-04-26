"use client"
import { ChildrenProp } from "@/_types/global.t";
import { createTheme, CssBaseline, ThemeProvider as MUIThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import fontFaces from "./fonts";
import typography from "./typography";
const ThemeProvider = ({children}:ChildrenProp) => {
  const theme = createTheme({
    typography,
    components: {
      MuiCssBaseline: {
        styleOverrides: fontFaces,
      },
    },
  });
  return (
    <AppRouterCacheProvider options={{ key: "css" }}>
      <MUIThemeProvider theme={theme}>
      {children}
      <CssBaseline/>
      </MUIThemeProvider>
    </AppRouterCacheProvider>
  );
};
export default ThemeProvider;


