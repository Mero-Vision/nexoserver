"use client";
import { useGetSiteSettingsQuery } from "@/app/api/siteApi";
import { Grid } from "@mui/material";
import "./styles.css";
const { useInView, motion } = require("framer-motion");
const { useRef } = require("react");

const CompanyInfoBox = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true });
   const params = { settingable_type: "website_banner_statistics" };
   const {
      data: websiteBannerData,
      error: websiteBannerDataError,
      isLoading: websiteBannerDataLoading,
   } = useGetSiteSettingsQuery(params);

   const conpanyInfoData = [
      {
         title: "Years",
         number: "5+",
         duration: "0.2",
      },
      {
         title: "Assurance",
         number: "100%",
         duration: "0.4",
      },
      {
         title: "Students",
         number: "598%",
         duration: "0.6",
      },
      {
         title: "Success Rate",
         number: "90%",
         duration: "0.8",
      },
   ];
   return (
      <>
         <div className="tAndCBox">
            <div
               className="mb_parallax_container"
               id="mb_parallax_two"
            >
               <div className="mb_parallax_overlay">
                  {" "}
                  <div
                     className="tAndCBoxWrap
         "
                  >
                     <div className="CompanyInfoBoxWrap">
                        <Grid container spacing={2}>
                           <Grid item md={3} sm={6} xs={12}>
                              <motion.div
                                 className="singleItemBox"
                                 ref={ref}
                                 initial={{ y: 150, opacity: 0 }}
                                 animate={
                                    isInView
                                       ? { y: 0, opacity: 1 }
                                       : {}
                                 }
                                 transition={{
                                    duration: 0.2,
                                    bounce: 0.5,
                                    damping: 40,
                                    x: {
                                       type: "spring",
                                       stiffness: 300,
                                    },
                                 }}
                              >
                                 <div className="singleItemGrid2">
                                    <div className="singleItemGrid2Number">
                                       <div className="singleItemGrid2NumberText">
                                          {
                                             websiteBannerData?.assessment_year
                                          }
                                       </div>
                                    </div>
                                    <div className="singleItemGrid2Title">
                                       Assessment Year
                                    </div>
                                 </div>
                              </motion.div>
                           </Grid>
                           <Grid item md={3} sm={6} xs={12}>
                              <motion.div
                                 className="singleItemBox"
                                 ref={ref}
                                 initial={{ y: 150, opacity: 0 }}
                                 animate={
                                    isInView
                                       ? { y: 0, opacity: 1 }
                                       : {}
                                 }
                                 transition={{
                                    duration: 0.4,
                                    bounce: 0.5,
                                    damping: 40,
                                    x: {
                                       type: "spring",
                                       stiffness: 300,
                                    },
                                 }}
                              >
                                 <div className="singleItemGrid2">
                                    <div className="singleItemGrid2Number">
                                       <div className="singleItemGrid2NumberText">
                                          {
                                             websiteBannerData?.assurance_count
                                          }
                                       </div>
                                    </div>
                                    <div className="singleItemGrid2Title">
                                       Assurance Count
                                    </div>
                                 </div>
                              </motion.div>
                           </Grid>
                           <Grid item md={3} sm={6} xs={12}>
                              <motion.div
                                 className="singleItemBox"
                                 ref={ref}
                                 initial={{ y: 150, opacity: 0 }}
                                 animate={
                                    isInView
                                       ? { y: 0, opacity: 1 }
                                       : {}
                                 }
                                 transition={{
                                    duration: 0.4,
                                    bounce: 0.5,
                                    damping: 40,
                                    x: {
                                       type: "spring",
                                       stiffness: 300,
                                    },
                                 }}
                              >
                                 <div className="singleItemGrid2">
                                    <div className="singleItemGrid2Number">
                                       <div className="singleItemGrid2NumberText">
                                          {
                                             websiteBannerData?.student_count
                                          }
                                       </div>
                                    </div>
                                    <div className="singleItemGrid2Title">
                                       Student Count
                                    </div>
                                 </div>
                              </motion.div>
                           </Grid>
                           <Grid item md={3} sm={6} xs={12}>
                              <motion.div
                                 className="singleItemBox"
                                 ref={ref}
                                 initial={{ y: 150, opacity: 0 }}
                                 animate={
                                    isInView
                                       ? { y: 0, opacity: 1 }
                                       : {}
                                 }
                                 transition={{
                                    duration: 0.4,
                                    bounce: 0.5,
                                    damping: 40,
                                    x: {
                                       type: "spring",
                                       stiffness: 300,
                                    },
                                 }}
                              >
                                 <div className="singleItemGrid2">
                                    <div className="singleItemGrid2Number">
                                       <div className="singleItemGrid2NumberText">
                                          {
                                             websiteBannerData?.success_rate
                                          }
                                       </div>
                                    </div>
                                    <div className="singleItemGrid2Title">
                                       Success Rate
                                    </div>
                                 </div>
                              </motion.div>
                           </Grid>
                        </Grid>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default CompanyInfoBox;
