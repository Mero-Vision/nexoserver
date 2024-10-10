"use client";

import CommonClient from "@/components/common/commonClient/CommonClient";
import CommonFooterBanner from "@/components/common/commonFooterBanner/CommonFooterBanner";
import CommonHostBanner from "@/components/common/commonHostBanner/CommonHostBanner";
import CommonInfoAboutBanner from "@/components/common/commonInfoAboutBanner/CommonInfoAboutBanner";
import CommonMap from "@/components/common/commonMap/CommonMap";
import CommonTeam from "@/components/common/commonTeam/CommonTeam";
import CustomGlideButton from "@/components/common/CustomGlideButton/CustomGlideButton";
import img from "@/public/assets/pages/hosting/bannerAbout.png";
import { Box } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import styles from "./About.module.css";

const AboutPage = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true });
   return (
      <>
         <CommonHostBanner
            title1={"A Unique Team Behind"}
            title2={"Your Online Success"}
            desc={
               "What makes Site Ground unique is our extraordinary team of individuals who put their passion."
            }
            button={"About Nexo"}
            img={img}
         >
            <motion.div
               ref={ref}
               initial={{ y: -20, opacity: 0 }}
               animate={isInView ? { y: 0, opacity: 1 } : {}}
               transition={{
                  duration: 0.7,
                  bounce: 0.5,
                  damping: 40,
                  x: {
                     type: "spring",
                     stiffness: 300,
                  },
               }}
            >
               <ChildrenComponent />
            </motion.div>
         </CommonHostBanner>{" "}
         <CommonMap />
         <CommonInfoAboutBanner />
         <CommonTeam />
         <CommonClient />
         <CommonFooterBanner />
      </>
   );
};

const ChildrenComponent = () => {
   return (
      <Box className={styles.childComponentCloud}>
         <Box className={styles.childComponentCardCloud}>
            <CustomGlideButton title={"View Plan"} bgYellow />
         </Box>
         <Box
            sx={{
               color: "#fff",
               fontWeight: "400",
               textDecoration: "underline",
            }}
         >
            Starting @ $10.00/mo
         </Box>
      </Box>
   );
};

export default AboutPage;
