"use client";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";
import "./style.css";

const CommonBanner = ({ title = "Banner title", second, slug }) => {
   const router = useRouter();
   return (
      <Box className="bannerBox">
         <Box className="bannerTextBox">
            <Box className="bannerTextBoxTitle">{title}</Box>
            <Box className="bannerBreadCrumbsBox">
               <Box
                  className="bannerBreadCrumbsHome"
                  onClick={() => router.push("/")}
               >
                  Home
               </Box>
               <Box
                  className={
                     slug
                        ? "bannerBreadCrumbsSecond"
                        : "bannerBreadCrumbsSecondSlug"
                  }
                  onClick={() => {
                     slug
                        ? router.push(`/${second?.toLowerCase()}`)
                        : "";
                  }}
               >
                  / {second}
               </Box>
               {slug && (
                  <Box className="bannerBreadCrumbsSecondSlug">
                     / {slug}
                  </Box>
               )}
            </Box>
         </Box>
      </Box>
   );
};

export default CommonBanner;
