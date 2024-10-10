"use client";
import dataMap from "@/public/assets/pages/about/dataMap.png";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import "./styles.css";
const CommonMap = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true });
   return (
      <div className="commonMapWrap">
         <div className="commonMapWrapBox">
            <div className="commonMapTitleBox">
               <motion.div
                  ref={ref}
                  initial={{ y: 100, opacity: 0 }}
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
                  className="commonMapTitle"
               >
                  Data Centers All Around the World
               </motion.div>
               <motion.div
                  ref={ref}
                  initial={{ y: 100, opacity: 0 }}
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
                  className="commonMapSubtitle"
               >
                  Our web hosting, WordPress hosting, and cloud
                  hosting plans offer server locations in: USA,
                  Germany Egypt , India, Chaina, Brazil, Canada,
                  Russia, Australia and South Africa.
               </motion.div>
            </div>
            <div className="svgBoxCommonMap">
               <Image
                  src={dataMap}
                  alt="img"
                  className="svgBoxCommonMapImg"
               />
            </div>
         </div>
      </div>
   );
};

export default CommonMap;
