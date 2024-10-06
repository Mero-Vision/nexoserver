"use client";

import CommonHostChooseNexo from "@/components/common/commonChooseNexo/CommonChooseNexo";
import CommonFooterBanner from "@/components/common/commonFooterBanner/CommonFooterBanner";
import CommonHostBanner from "@/components/common/commonHostBanner/CommonHostBanner";
import CommonHostFaq from "@/components/common/commonHostFaq/CommonHostFaq";
import CommonHostFeatures from "@/components/common/commonHostFeatures/CommonHostFeatures";
import CommonHostPricing from "@/components/common/commonHostPricing/CommonHostPricing";
import diamond from "@/public/assets/pages/hosting/diamond.png";
import img from "@/public/assets/pages/hosting/hostBannerImg.svg";
import wordpress from "@/public/assets/pages/hosting/wordpress.png";
import { Box } from "@mui/material";
import Image from "next/image";
import styles from "./Shared.module.css";

const page = () => {
   return (
      <>
         <CommonHostBanner
            title1={"Shared Website"}
            title2={"Hosting"}
            desc={"Everything you need to launch a website."}
            button={"Starting at $2.59/mo"}
            img={img}
         >
            <ChildrenComponent />
         </CommonHostBanner>{" "}
         <CommonHostPricing />
         <CommonHostChooseNexo />
         <CommonHostFeatures />
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

export default page;
