import { useGetSiteSettingsQuery } from "@/app/api/siteApi";
import { Box, Button, Grid } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import "./CommonContactFooter.css";
const CommonContactFooter = ({}) => {
   const router = useRouter();
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true });
   const { data, error, isLoading, isSuccess } =
      useGetSiteSettingsQuery();
   return (
      <motion.div
         ref={ref}
         initial={{ y: 250, opacity: 0 }}
         animate={isInView ? { y: 0, opacity: 1 } : {}}
         transition={{
            duration: 0.6,
            bounce: 0.5,
            damping: 50,
            x: {
               type: "spring",
               stiffness: 300,
            },
         }}
         className="cardComponentPricingContact"
      >
         <Grid container spacing={0}>
            <Grid item md={7} xs={12}>
               <Box className="leftBox">
                  <Box className="leftBoxTitle">
                     Let’s connect and{" "}
                     <span style={{ color: "#2F80DB" }}>
                        turn your DREAM into REALITY.
                     </span>
                  </Box>
                  <Box className="leftBoxSubtitle">
                     We are officially available anytime with this
                     website.
                  </Box>
               </Box>
            </Grid>
            <Grid item md={5} xs={12} className="rightBoxGrid">
               <Box className="rightBox">
                  <Box className="rightBoxTitle">Reach Out Now!</Box>
                  <Box className="rightBoxNumber">
                     {data?.mobile_no}
                  </Box>
                  <Button
                     onClick={() => router.push(`/contact-us`)}
                     className="rightBoxButton"
                  >
                     Apply Now
                  </Button>
                  {/* <Box className="mapBox">
                     <img
                        src={nepalMap}
                        alt="nepal map"
                        className="mapBoxImg"
                     />
                  </Box> */}
               </Box>
            </Grid>
         </Grid>
      </motion.div>
   );
};

export default CommonContactFooter;
