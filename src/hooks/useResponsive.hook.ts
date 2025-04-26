import { Breakpoint, useMediaQuery, useTheme } from "@mui/material";
type BreakPointValue = Breakpoint | number;
type KeyProp = "up" | "down" | "between" | "only";
type StartProp = BreakPointValue;
type EndProp = BreakPointValue;

const useResponsive = (
  keys: KeyProp,
  start: StartProp,
  end?: EndProp
) => {
  const theme = useTheme();
    const query = (()=>{
        switch (keys){
            case "up":{
                return theme.breakpoints.up(start)
            }
            case "down":{
                return theme.breakpoints.down(start)
            }
            case "between":{
                return theme.breakpoints.between(start, end as EndProp);
            }
            case "only":{
                return theme.breakpoints.only(start as Breakpoint)
            }
            default:{
                 return theme.breakpoints.up(start);
            }
        }
    })();
    const matches = useMediaQuery(query)

    return matches;
};
export default useResponsive;
