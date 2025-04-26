import { Breakpoint, useTheme } from "@mui/material";
import useResponsive from "./useResponsive.hook";

    const useWidth = () => {
      const theme = useTheme();
      const keys = [...theme.breakpoints.keys].reverse();
      return (
        keys.reduce((output: Breakpoint | null, key: Breakpoint) => {
          const matched = useResponsive("up", key as Breakpoint);
          return !output && matched ? key : output;
        }, null) || "xs"
      );
    };
export default useWidth