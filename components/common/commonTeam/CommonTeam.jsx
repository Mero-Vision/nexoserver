"use client";
import teamImg from "@/public/assets/pages/hosting/teamImg.jpg";
import { Box, Grid } from "@mui/material";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import "./styles.css";
const CommonTeam = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true });
   const data = [
      { name: "Hancie Phago", postion: "CEO", img: teamImg },
      { name: "Joey Tribanni", postion: "Manager", img: teamImg },
      { name: "Chandler Bing", postion: "CTO", img: teamImg },
      { name: "Ross Geller", postion: "Tech Lead", img: teamImg },
   ];
   return (
      <div className="commonTeamWrap">
         <div className="commonTeamWrapBox">
            <div className="commonTeamTitleBox">
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
                  className="commonTeamTitle"
               >
                  Part of our team
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
                  className="commonTeamSubtitle"
               >
                  Over the last 19 years, Site Ground has grown to
                  more than A considerable number of our people
                  started working
               </motion.div>
            </div>
            <Grid container spacing={4}>
               {data?.map((item, index) => (
                  <Grid key={index} item lg={4} md={4} sm={6} xs={12}>
                     <Box className="commonTeamCardMain">
                        <Image
                           src={item?.img}
                           alt="img"
                           className="commonTeamCardImg"
                        />
                        <Box className="commonTeamCardName">
                           {item?.name}
                        </Box>
                        <Box className="commonTeamCardPosition">
                           {item?.postion}
                        </Box>
                     </Box>
                  </Grid>
               ))}
            </Grid>
         </div>
      </div>
   );
};

export default CommonTeam;
