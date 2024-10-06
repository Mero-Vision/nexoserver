"use client";

import hostBannerImg from "@/public/assets/pages/hosting/hostBannerImg.svg";
import { Box, Grid } from "@mui/material";
import Image from "next/image";
import "./styles.css";

const CommonHostBanner = ({ children }) => {
   return (
      <div className="backgroundContainerHostBanner">
         <Box className="hostBannerWrap">
            <Box className="hostBannerWrapBox">
               <Grid container spacing={2}>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                     <Box className="hostBannerInfoBox">
                        <Box className="hostBannerButton">
                           Starting at $25
                        </Box>
                        <Box className="hostBannerTitle">
                           Shared Website <br /> Hosting
                        </Box>
                        <Box className="hostBannerSubtitle">
                           Everything you need to launch a website.
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
                           src={hostBannerImg}
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
