import four from "@/public/assets/pages/about/four.svg";
import one from "@/public/assets/pages/about/one.svg";
import three from "@/public/assets/pages/about/three.svg";
import two from "@/public/assets/pages/about/two.svg";
import { Box, Grid } from "@mui/material";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import "./styles.css";

const CommonInfoAboutBanner = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true });

   const data = [
      { title: "200+", sub: "People choose A2", img: one },
      { title: "125k", sub: "Active Services Helping", img: two },
      { title: "110k", sub: "People Utilizing A2", img: three },
      { title: "17+", sub: "Domains Management", img: four },
   ];

   return (
      <div
         style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
         }}
      >
         <div className="footerAboutBannerCommonWrapContainer">
            <div className="footerAboutBannerCommonWrap">
               <motion.div
                  ref={ref}
                  initial={{ y: -30, opacity: 0 }}
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
                  className="footerAboutBannerCommonTitleBox"
               >
                  <Grid container spacing={2}>
                     {data?.map((item, index) => (
                        <Grid
                           key={index}
                           item
                           lg={3}
                           md={3}
                           sm={6}
                           xs={12}
                        >
                           <Box className="footerAboutBannerCommonCard">
                              <Box className="footerAboutBannerCommonImgBox">
                                 <Image
                                    src={item?.img}
                                    alt={"img"}
                                    className="footerAboutBannerCommonImg"
                                 />
                              </Box>
                              <Box className="footerAboutBannerCommonCardTitle">
                                 {item?.title}
                              </Box>
                              <Box className="footerAboutBannerCommonCardSub">
                                 {item?.sub}
                              </Box>
                           </Box>
                        </Grid>
                     ))}
                  </Grid>
               </motion.div>
            </div>
         </div>
      </div>
   );
};

export default CommonInfoAboutBanner;
