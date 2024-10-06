import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import UpdateOutlinedIcon from "@mui/icons-material/UpdateOutlined";
import { Box, Grid } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "./styles.css";
const CommonHostChooseNexo = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true });
   const pricingData = [
      {
         icon: (
            <AccountBalanceWalletOutlinedIcon
               sx={{
                  color: "#fff",
                  fontSize: "42px",
               }}
            />
         ),
         title: "Money-Back Guaranteed",
         subtitle:
            "If your website is slow or down then you losing customers.",
         duration: 0.9,
      },
      {
         icon: (
            <SpeedOutlinedIcon
               sx={{
                  color: "#fff",
                  fontSize: "42px",
               }}
            />
         ),
         title: "Fast & Reliable",
         subtitle:
            "If your website is slow or down then you losing customers.",
         duration: 0.8,
      },
      {
         icon: (
            <NearMeOutlinedIcon
               sx={{
                  color: "#fff",
                  fontSize: "42px",
               }}
            />
         ),
         title: "Super Easy to Use",
         subtitle:
            "If your website is slow or down then you losing customers.",
         duration: 0.9,
      },
      {
         icon: (
            <UpdateOutlinedIcon
               sx={{
                  color: "#fff",
                  fontSize: "42px",
               }}
            />
         ),
         title: "24/7 Expert Support",
         subtitle:
            "If your website is slow or down then you losing customers. If your website is slow or down then you losing customers.",
         duration: 0.9,
      },
   ];
   return (
      <div className="chooseCommonWrap">
         <div className="chooseCommonWrapBox">
            <div className="loadTitleBoxChoose">
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
                  className="loadTitleChoose"
               >
                  Why choose Nexo
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
                  className="loadSubtitleChoose"
               >
                  Own your virtual presence with the power of Nexo{" "}
                  <br /> with 1.5 million websites already under our
                  care,
               </motion.div>
            </div>
            <Grid container spacing={3}>
               {pricingData?.map((item, index) => (
                  <Grid
                     key={index}
                     item
                     lg={3}
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
                        className="chooseCommonCardMain"
                     >
                        <Box className="chooseCommonCardMainTop">
                           <Box className="chooseCommonCardMainIcon">
                              {item?.icon}
                           </Box>
                           <Box className="chooseCommonTitle">
                              {item?.title}
                           </Box>
                           <Box className="chooseCommonSubtitle">
                              {item?.subtitle}
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

export default CommonHostChooseNexo;
