import { Box, Button } from "@mui/material";
import { useInView } from "framer-motion";
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
                  <div className="footerBannerCommonBtn">
                     Need help choosing a plan?{" "}
                  </div>
                  <div className="footerBannerCommonTitle">
                     Need help? We're <br /> always here for you.
                  </div>
               </div>
               <Box className="footerBannerCommonRightBtnBox">
                  <Button className="footerBannerCommonRightBtn">
                     Chat with us
                  </Button>
               </Box>
            </div>
         </div>
      </div>
   );
};

export default CommonFooterBanner;
