"use client";

import { Box, Grid } from "@mui/material";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import "./styles.css";

const CommonHostBanner = ({
   children,
   title1,
   title2,
   desc,
   button,
   img,
}) => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true });
   return (
      <div className="backgroundContainerHostBanner">
         <Box className="hostBannerWrap">
            <Box className="hostBannerWrapBox">
               <Grid container spacing={2}>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                     <Box className="hostBannerInfoBox">
                        <motion.div
                           ref={ref}
                           initial={{ y: -20, opacity: 0 }}
                           animate={
                              isInView ? { y: 0, opacity: 1 } : {}
                           }
                           transition={{
                              duration: 0.7,
                              bounce: 0.5,
                              damping: 40,
                              x: {
                                 type: "spring",
                                 stiffness: 300,
                              },
                           }}
                           className="hostBannerButton"
                        >
                           {button}
                        </motion.div>
                        <motion.div
                           ref={ref}
                           initial={{ y: -30, opacity: 0 }}
                           animate={
                              isInView ? { y: 0, opacity: 1 } : {}
                           }
                           transition={{
                              duration: 0.7,
                              bounce: 0.5,
                              damping: 40,
                              x: {
                                 type: "spring",
                                 stiffness: 300,
                              },
                           }}
                           className="hostBannerTitle"
                        >
                           {title1}
                           <br />
                           {title2}
                        </motion.div>
                        <motion.div
                           ref={ref}
                           initial={{ y: -20, opacity: 0 }}
                           animate={
                              isInView ? { y: 0, opacity: 1 } : {}
                           }
                           transition={{
                              duration: 0.7,
                              bounce: 0.5,
                              damping: 40,
                              x: {
                                 type: "spring",
                                 stiffness: 300,
                              },
                           }}
                           className="hostBannerSubtitle"
                        >
                           {desc}
                        </motion.div>
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
