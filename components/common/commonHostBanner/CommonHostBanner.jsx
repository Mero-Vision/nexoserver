"use client";

import { Box, Grid } from "@mui/material";
import Image from "next/image";
import "./styles.css";

const CommonHostBanner = ({
   children,
   title1,
   title2,
   desc,
   button,
   img,
}) => {
   return (
      <div className="backgroundContainerHostBanner">
         <Box className="hostBannerWrap">
            <Box className="hostBannerWrapBox">
               <Grid container spacing={2}>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                     <Box className="hostBannerInfoBox">
                        <Box className="hostBannerButton">
                           {button}
                        </Box>
                        <Box className="hostBannerTitle">
                           {title1}
                           <br />
                           {title2}
                        </Box>
                        <Box className="hostBannerSubtitle">
                           {desc}
                        </Box>
                        {children}
                     </Box>
                  </Grid>
                  <Grid
                     item
                     lg={6}
                     md={6}
                     sm={12}
                     xs={12}
                     // sx={{ width: "100% !important" }}
                  >
                     <Box className="hostBannerImgBox">
                        <Image
                           src={img}
                           alt="img"
                           className="hostBannerImg"
                        />
                     </Box>
                  </Grid>
               </Grid>
            </Box>
         </Box>
      </div>
   );
};

export default CommonHostBanner;
