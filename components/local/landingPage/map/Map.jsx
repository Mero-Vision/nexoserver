"use client";
import map from "@/public/assets/lannding/map.svg";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import "./styles.css";
const Map = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true });
   return (
      <div className="mapWrap">
         <div className="mapWrapBox">
            <div className="mapTitleBox">
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
                  className="mapTitle"
               >
                  Our Services are availabe all around the world.
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
                  className="mapSubtitle"
               >
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit sed.
               </motion.div>
            </div>
            <div className="svgBoxMap">
               <Image src={map} alt="img" className="svgBoxMapImg" />
            </div>
         </div>
      </div>
   );
};

export default Map;
