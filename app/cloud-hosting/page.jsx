"use client";

import CommonHostChooseNexo from "@/components/common/commonChooseNexo/CommonChooseNexo";
import CommonFooterBanner from "@/components/common/commonFooterBanner/CommonFooterBanner";
import CommonHostBanner from "@/components/common/commonHostBanner/CommonHostBanner";
import CommonHostFaq from "@/components/common/commonHostFaq/CommonHOstFaq";
import CommonHostFeatures from "@/components/common/commonHostFeatures/CommonHostFeatures";
import CommonHostPricing from "@/components/common/commonHostPricing/CommonHostPricing";
import CustomGlideButton from "@/components/common/CustomGlideButton/CustomGlideButton";
import img from "@/public/assets/pages/hosting/bannerCloud.png";
import { Box } from "@mui/material";
import styles from "./Cloud.module.css";
const page = () => {
   return (
      <>
         <CommonHostBanner
            title1={"Cloud Computing"}
            title2={"Object Storage"}
            desc={"Launch cloud servers in 30 seconds or less."}
            button={"Cloud Hosting"}
            img={img}
         >
            <ChildrenComponent />
         </CommonHostBanner>{" "}
         <CommonHostChooseNexo />
         <CommonHostPricing />
         <CommonHostFeatures />
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

export default page;
