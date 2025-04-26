import React from 'react'
import Logo from '../logo/Logo';
import { Box, Stack, TextField } from '@mui/material';

function DesktopHeader() {
  return (
    <header className="w-full relative  h-full max-h-[103px] px-4 pt-[15px] pb-[5px]">
      <div className=" w-full relative  max-w-[90%] h-[100px]  mx-auto flex items-center">
        <Stack direction={"row"}  alignItems={"center"} sx={{ width: "100%" }}>
 
            <Logo href="/" />
         
          <Box dir='rtl' component={"div"} sx={{ width: "40%", position: "relative" }}>
            <TextField
            //   placeholder="جستجوی محصولات"
              label="جستجوی محصولات"
              className="w-full"
              variant="outlined"
            />
          </Box>
          <Box component={"div"} sx={{ width: "30%" }}></Box>
        </Stack>
      </div>
    </header>
  );
}

export default DesktopHeader