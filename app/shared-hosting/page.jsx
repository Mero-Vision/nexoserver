"use client";

import CommonHostChooseNexo from "@/components/common/commonChooseNexo/CommonChooseNexo";
import CommonClient from "@/components/common/commonClient/CommonClient";
import CommonFooterBanner from "@/components/common/commonFooterBanner/CommonFooterBanner";
import CommonHostBanner from "@/components/common/commonHostBanner/CommonHostBanner";
import CommonHostFaq from "@/components/common/commonHostFaq/CommonHostFaq";
import CommonHostFeatures from "@/components/common/commonHostFeatures/CommonHostFeatures";
import CommonHostPricing from "@/components/common/commonHostPricing/CommonHostPricing";
import diamond from "@/public/assets/pages/hosting/diamond.png";
import img from "@/public/assets/pages/hosting/hostBannerImg.svg";
import wordpress from "@/public/assets/pages/hosting/wordpress.png";
import { Box } from "@mui/material";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import styles from "./Shared.module.css";

const SharedHostingPage = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true });
   return (
      <>
         <CommonHostBanner
            title1={"Shared Website"}
            title2={"Hosting"}
            desc={"Everything you need to launch a website."}
            button={"Starting at $2.59/mo"}
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
         <CommonHostPricing />
         <CommonHostChooseNexo />
         <CommonHostFeatures />
         <CommonClient />
         <CommonHostFaq />
         <CommonFooterBanner />
      </>
   );
};

const ChildrenComponent = () => {
   return (
      <Box className={styles.childComponent}>
         <Box className={styles.childComponentCard}>
            <Image src={diamond} alt={"img"} />
            <Box className={styles.childComponentCard}>
               Look like a Pri- Fast, <br /> Secure, & Always Up
            </Box>
         </Box>
         <Box className={styles.childComponentCard}>
            <Image src={wordpress} alt={"img"} />
            <Box className={styles.childComponentCard}>
               Look like a Pri- Fast, <br /> Secure, & Always Up
            </Box>
         </Box>
      </Box>
   );
};

export default SharedHostingPage;
