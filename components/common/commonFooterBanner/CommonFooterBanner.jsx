import { Button } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "./styles.css";
const CommonFooterBanner = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true });

   return (
      <div
         style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
         }}
      >
         <div className="footerBannerCommonWrapContainer">
            <div className="footerBannerCommonWrap">
               <div className="footerBannerCommonTitleBox">
                  <motion.div
                     ref={ref}
                     initial={{ y: -20, opacity: 0 }}
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
                     className="footerBannerCommonBtn"
                  >
                     Need help choosing a plan?{" "}
                  </motion.div>
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
                     className="footerBannerCommonTitle"
                  >
                     Need help? We are <br /> always here for you.
                  </motion.div>
               </div>
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
                  className="footerBannerCommonRightBtnBox"
               >
                  <Button className="footerBannerCommonRightBtn">
                     Chat with us
                  </Button>
               </motion.div>
            </div>
         </div>
      </div>
   );
};

export default CommonFooterBanner;
