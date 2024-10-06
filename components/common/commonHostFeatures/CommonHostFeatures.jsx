import featureImg from "@/public/assets/pages/hosting/featureImage.png";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Box, Grid } from "@mui/material";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import "./styles.css";
const CommonHostFeatures = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true });
   const data = [
      { title: "Unlimited MySQL Databases" },
      { title: "Reseller & Sub Accounts" },
      { title: "Hostie Control Panel" },
      { title: "Secure Shell (SSH) Access" },
      { title: "Full Unix Shell" },
      { title: "IPv6 Support" },
      { title: "Access to Raw Log Files" },
      { title: "Unlimited SFTP Users" },
   ];

   return (
      <div className="featuresCommonWrap">
         <div className="featuresCommonWrapBox">
            <Grid container spacing={4}>
               <Grid item lg={6} md={12} sm={12} xs={12}>
                  <div className="featuresCommonTitleBox">
                     <motion.div
                        ref={ref}
                        initial={{ y: 100, opacity: 0 }}
                        animate={isInView ? { y: 0, opacity: 1 } : {}}
                        transition={{
                           duration: 0.5,
                           bounce: 0.5,
                           damping: 40,
                           x: {
                              type: "spring",
                              stiffness: 300,
                           },
                        }}
                        className="featuresCommonTitle"
                     >
                        Shared Hosting <br /> Advanced Features
                     </motion.div>
                     <motion.div
                        ref={ref}
                        initial={{ y: 100, opacity: 0 }}
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
                        className="featuresCommonSubtitle"
                     >
                        We’ll move your first website to Cloud ways
                        from any web host for without breaking your
                        live site hosted on the old host.
                     </motion.div>
                     <motion.div
                        ref={ref}
                        initial={{ y: 100, opacity: 0 }}
                        animate={isInView ? { y: 0, opacity: 1 } : {}}
                        transition={{
                           duration: 0.9,
                           bounce: 0.5,
                           damping: 40,
                           x: {
                              type: "spring",
                              stiffness: 300,
                           },
                        }}
                        className="featuresCommonFearuresItems"
                     >
                        <Grid container spacing={2}>
                           {data?.map((item, index) => (
                              <Grid
                                 key={index}
                                 item
                                 lg={6}
                                 md={6}
                                 sm={12}
                                 xs={12}
                              >
                                 <Box className="featuresCommonFearuresItem">
                                    <CheckCircleIcon className="featuresCommonFearuresItemIcon" />

                                    {item?.title}
                                 </Box>
                              </Grid>
                           ))}
                        </Grid>
                     </motion.div>
                  </div>
               </Grid>
               <Grid item lg={6} md={12} sm={12} xs={12}>
                  <Image
                     src={featureImg}
                     alt="img"
                     className="featuresCommonFearuresImage"
                  />
               </Grid>
            </Grid>
         </div>
      </div>
   );
};

export default CommonHostFeatures;
