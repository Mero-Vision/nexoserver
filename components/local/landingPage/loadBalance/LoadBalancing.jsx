"use client";
import infrastructure from "@/public/assets/lannding/infrastructure.svg";
import { Box, Grid } from "@mui/material";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import "./styles.css";
const LoadBalancing = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true });
   return (
      <div className="loadWrap">
         <div className="loadWrapBox">
            <div className="loadTitleBox">
               <motion.div
                  ref={ref}
                  initial={{ y: 100, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{
                     duration: 0.6,
                     bounce: 0.5,
                     damping: 40,
                     x: {
                        type: "spring",
                        stiffness: 300,
                     },
                  }}
                  className="loadTitle"
               >
                  Cloud Load Balancing
               </motion.div>
               <motion.div
                  ref={ref}
                  initial={{ y: 100, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{
                     duration: 0.8,
                     bounce: 0.5,
                     damping: 40,
                     x: {
                        type: "spring",
                        stiffness: 300,
                     },
                  }}
                  className="loadSubtitle"
               >
                  We make use of top cloud providers and optimize it
                  to provide the best web hosting platform in Nepal
                  that will perform best for you. Your web hosting
                  will evolve with you.
               </motion.div>
            </div>
            <div className="svgBox">
               <Image
                  src={infrastructure}
                  alt="img"
                  className="svgBoxImg"
               />
            </div>
            <Grid container spacing={4}>
               <Grid item lg={4} md={4} sm={12} xs={12}>
                  <Box className="svgCard">
                     <Box className="svgCardTitle">[1] Users</Box>
                     <Box className="svgCardSubtitle">
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor
                        incididunt.
                     </Box>
                  </Box>
               </Grid>
               <Grid item lg={4} md={4} sm={12} xs={12}>
                  <Box className="svgCard">
                     <Box className="svgCardTitle">
                        [2] Load Balancing
                     </Box>
                     <Box className="svgCardSubtitle">
                        Eaque ipsa quae ab illo inventore veritatis et
                        quasi. Eaque ipsa quae omnis iste
                     </Box>
                  </Box>
               </Grid>
               <Grid item lg={4} md={4} sm={12} xs={12}>
                  <Box className="svgCard">
                     <Box className="svgCardTitle">
                        [3] Cloud Servers
                     </Box>
                     <Box className="svgCardSubtitle">
                        Omnis iste natus error sit voluptatem
                        accusantium doloremque laudantium.
                     </Box>
                  </Box>
               </Grid>
            </Grid>
         </div>
      </div>
   );
};

export default LoadBalancing;
