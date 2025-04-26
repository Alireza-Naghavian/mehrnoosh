interface ResponsiveFonts {
  xs: number;
  sm: number;
  md: number;
  lg: number;
}
export function responsiveFont({ xs,sm, md, lg }: ResponsiveFonts){
   return {
     fontSize: pxToRem(xs),
     "@media (min-width:600px)": {
       fontSize: pxToRem(sm),
     },
     "@media (min-width:900px)": {
       fontSize: pxToRem(md),
     },
     "@media (min-width:1200)": {
       fontSize: pxToRem(lg),
     },
   }; 
};

export const pxToRem = (value: number) => {
  return `${value / 16}rem`;
};
