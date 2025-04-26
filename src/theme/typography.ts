import { responsiveFont } from "@/utils/getFontValue";

const typography = {
  fontFamily: "YekanBakh",
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  fontSize: 40/16,
  h1: {
    fontWeight: 700,
    ...responsiveFont({ xs: 32, sm: 40, md: 48, lg: 52 }),
  },
  h2: {
    fontWeight: 600,
    ...responsiveFont({ xs: 28, sm: 36, md: 42, lg: 48 }),
  },
  h3: {
    fontWeight: 600,
    ...responsiveFont({ xs: 24, sm: 28, md: 32, lg: 36 }),
  },
  body1: {
    fontWeight: 400,
    ...responsiveFont({ xs: 14, sm: 16, md: 18, lg: 24 }),
  },
  button: {
    fontWeight: 600,
    ...responsiveFont({ xs: 14, sm: 16, md: 18, lg: 20 }),
  },
};
export default typography;