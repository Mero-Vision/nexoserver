"use client";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";
import "./style.css";

const CommonBreadcrumbs = ({ second, slug }) => {
   const router = useRouter();
   return (
      <Box className="breadCrumbsBox">
         <Box
            className="breadCrumbsHome"
            onClick={() => router.push("/")}
         >
            Home
         </Box>
         <Box
            className={
               slug ? "breadCrumbsSecond" : "breadCrumbsSecondSlug"
            }
            onClick={() => {
               slug ? router.push(`/${second?.toLowerCase()}`) : "";
            }}
         >
            / {second}
         </Box>
         {slug && (
            <Box className="breadCrumbsSecondSlug">/ {slug}</Box>
         )}
      </Box>
   );
};

export default CommonBreadcrumbs;
