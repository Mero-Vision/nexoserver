"use client";

import CommonHostChooseNexo from "@/components/common/commonChooseNexo/CommonChooseNexo";
import CommonHostBanner from "@/components/common/commonHostBanner/CommonHostBanner";
import CommonHostFeatures from "@/components/common/commonHostFeatures/CommonHostFeatures";
import CommonHostPricing from "@/components/common/commonHostPricing/CommonHostPricing";
import diamond from "@/public/assets/pages/hosting/diamond.png";
import wordpress from "@/public/assets/pages/hosting/wordpress.png";
import { Box } from "@mui/material";
import Image from "next/image";
import styles from "./Shared.module.css";
const page = () => {
   return (
      <>
         <CommonHostBanner>
            <ChildrenComponent />
         </CommonHostBanner>{" "}
         <CommonHostPricing />
         <CommonHostChooseNexo />
         <CommonHostFeatures />
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

export default page;
