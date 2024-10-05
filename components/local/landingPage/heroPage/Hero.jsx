"use client";
import heroBg from "@/public/assets/serverImg.png";
import { Box } from "@mui/material";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import "./styles.css";

const Hero = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true });
   return (
      <Box className="heroWrap">
         <Box className="heroWrapBox">
            <Box className="heroMainTitleBox">
               <motion.div
                  className="heroMainTitle"
                  ref={ref}
                  initial={{ y: 90, opacity: 0 }}
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
               >
                  Dedicated With <br />{" "}
                  <span>
                     <Typewriter
                        words={[
                           "Premium hardware.",
                           "Large performance.",
                           "Fully dedicated.",
                        ]}
                        loop={100}
                        cursor
                        typeSpeed={50}
                        deleteSpeed={30}
                        // delaySpeed={1000}
                     />
                  </span>{" "}
               </motion.div>
               <motion.div
                  className="heroMainSubtitle"
                  ref={ref}
                  initial={{ y: 90, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{
                     duration: 0.8,
                     bounce: 0.5,
                     damping: 40,
                     x: {
                        type: "spring",
                        stiffness: 300,
                     },
                  }}
               >
                  Powerful servers with high-end resourses that will
                  gurantee <br /> resourses exclusivity, starting at
                  just{" "}
                  <span className="heroMainSubtitleSpan">
                     $ 90.22/mo
                  </span>{" "}
               </motion.div>
               <motion.div
                  className="search-bar-container"
                  ref={ref}
                  initial={{ y: 90, opacity: 0 }}
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
               >
                  <input
                     type="text"
                     className="search-input"
                     placeholder="Search for a domain name..."
                  />
                  <button className="search-button">Search</button>
               </motion.div>
            </Box>
            <Box className="heroBgBox">
               <Image
                  src={heroBg}
                  alt="image"
                  className="heroBgImg"
               />
            </Box>
         </Box>
      </Box>
   );
};

export default Hero;
