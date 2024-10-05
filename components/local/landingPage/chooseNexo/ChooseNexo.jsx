"use client";
import CustomGlideButton from "@/components/common/CustomGlideButton/CustomGlideButton";
import RoomPreferencesOutlinedIcon from "@mui/icons-material/RoomPreferencesOutlined";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import TerminalOutlinedIcon from "@mui/icons-material/TerminalOutlined";
import { Box, Grid } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "./styles.css";
const ChooseNexo = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true });
   const pricingData = [
      {
         icon: (
            <SupportAgentIcon
               sx={{
                  color: "#2f82da",
                  fontSize: "70px",
                  marginBottom: "10px",
               }}
            />
         ),
         recomended: "Premium",
         title: "Support 24x7x365",
         subtitle:
            "Excepteur sint occaecat cupidatat non proident voluptate",
         duration: 0.9,
      },
      {
         icon: (
            <TerminalOutlinedIcon
               sx={{
                  color: "#2f82da",
                  fontSize: "70px",
                  marginBottom: "10px",
               }}
            />
         ),
         recomended: "Control Panel",
         title: "Free WHM & cPanel",
         subtitle:
            "Excepteur sint occaecat cupidatat non proident dolor",
         duration: 0.8,
      },
      {
         icon: (
            <RoomPreferencesOutlinedIcon
               sx={{
                  color: "#2f82da",
                  fontSize: "70px",
                  marginBottom: "10px",
               }}
            />
         ),
         recomended: false,
         title: "Perfomance Optimized",
         subtitle:
            "Excepteur sint occaecat cupidatat non proident voluptate",
         duration: 0.9,
      },
   ];
   return (
      <div className="chooseNexoWrap">
         <div className="chooseNexoWrapBox">
            <div className="chooseNexoTitleBox">
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
                  className="chooseNexoTitle"
               >
                  Why Choose Nexo Server?
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
                  className="chooseNexoSubtitle"
               >
                  SLA as standard on all plans - if uptime falls below
                  99.9% in a certain month, we will give you a free
                  month of service.
               </motion.div>
            </div>
            <Grid container spacing={3}>
               {pricingData?.map((item, index) => (
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
                        initial={{ y: 150, opacity: 0 }}
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
                        className="chooseCardMain"
                     >
                        <Box className="chooseRecomendedBox">
                           {item?.recomended && (
                              <Box className="chooseRecomended">
                                 {item?.recomended}
                              </Box>
                           )}
                        </Box>
                        <Box className="chooseCardMainTop">
                           {item?.icon}
                           <Box className="chooseTitle">
                              {item?.title}
                           </Box>
                           <Box className="chooseSubtitle">
                              {item?.subtitle}
                           </Box>

                           <CustomGlideButton title={"Read More"} />
                        </Box>
                     </motion.div>
                  </Grid>
               ))}
            </Grid>
         </div>
      </div>
   );
};

export default ChooseNexo;
