"use client";

import CommonHostChooseNexo from "@/components/common/commonChooseNexo/CommonChooseNexo";
import CommonClient from "@/components/common/commonClient/CommonClient";
import CommonFooterBanner from "@/components/common/commonFooterBanner/CommonFooterBanner";
import CommonHostBanner from "@/components/common/commonHostBanner/CommonHostBanner";
import CommonHostFaq from "@/components/common/commonHostFaq/CommonHostFaq";
import CommonHostFeatures from "@/components/common/commonHostFeatures/CommonHostFeatures";
import CommonHostPricing from "@/components/common/commonHostPricing/CommonHostPricing";
import CustomGlideButton from "@/components/common/CustomGlideButton/CustomGlideButton";
import img from "@/public/assets/pages/hosting/bannerCloud.png";
import { Box } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import styles from "./Cloud.module.css";

const CloudHostPage = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true });
   return (
      <>
         <CommonHostBanner
            title1={"Cloud Computing"}
            title2={"Object Storage"}
            desc={"Launch cloud servers in 30 seconds or less."}
            button={"Cloud Hosting"}
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
         <CommonHostChooseNexo />
         <CommonHostPricing />
         <CommonHostFeatures />
         <CommonClient />
         <CommonHostFaq />
         <CommonFooterBanner />
      </>
   );
};

const ChildrenComponent = () => {
   return (
      <Box className={styles.childComponentCloud}>
         <Box className={styles.childComponentCardCloud}>
            <CustomGlideButton title={"Buy VPS"} bgYellow />
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

export default CloudHostPage;
