"use client";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import { Box, Grid } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "./styles.css";
const LBCards = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true });
   const cardData = [
      {
         title: "Live Chat",
         desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
         icon: (
            <ForumOutlinedIcon
               sx={{ color: "#3081DA", fontSize: "50px" }}
            />
         ),
         duration: 0.9,
      },
      {
         title: "Send Ticket",
         desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
         icon: (
            <DraftsOutlinedIcon
               sx={{ color: "#3081DA", fontSize: "50px" }}
            />
         ),
         duration: 0.8,
      },
      {
         title: "Knowledge Base",
         desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
         icon: (
            <MenuBookOutlinedIcon
               sx={{ color: "#3081DA", fontSize: "50px" }}
            />
         ),
         duration: 0.9,
      },
   ];
   return (
      <div className="lbcardsWrap">
         <div className="lbcardsWrapBox">
            <Grid container spacing={4}>
               {cardData?.map((item, index) => (
                  <Grid
                     key={index}
                     item
                     lg={4}
                     md={6}
                     sm={12}
                     xs={12}
                  >
                     <motion.div
                        ref={ref}
                        initial={{ y: 100, opacity: 0 }}
                        animate={isInView ? { y: 0, opacity: 1 } : {}}
                        transition={{
                           duration: item?.duration,
                           bounce: 0.5,
                           damping: 40,
                           x: {
                              type: "spring",
                              stiffness: 300,
                           },
                        }}
                        className="lbcardsMain"
                     >
                        <Box className="lbcardsIcon">
                           {item?.icon}
                        </Box>
                        <Box className="lbcardsInfo">
                           <Box className="lbcardsInfoTitle">
                              {item?.title}
                           </Box>
                           <Box className="lbcardsInfoDesc">
                              {item?.desc}
                           </Box>
                        </Box>
                     </motion.div>
                  </Grid>
               ))}
            </Grid>
         </div>
      </div>
   );
};

export default LBCards;
