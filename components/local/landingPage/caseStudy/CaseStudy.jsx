"use client";
import CustomGlideButton from "@/components/common/CustomGlideButton/CustomGlideButton";
import bar from "@/public/assets/lannding/bar.svg";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import "./styles.css";
const Case = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true });
   return (
      <div className="caseWrap">
         <motion.div
            ref={ref}
            initial={{ y: 150, opacity: 0 }}
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
            className="caseWrapBox"
         >
            <div className="caseTitleBox">
               <div className="caseTitle">Growtop Company </div>
               <div
                  className="caseSubtitle"
                  style={{ marginBottom: "20px" }}
               >
                  Lorem ipsum dolor sit amet consectetur adipiscing
                  elit inceptos eu, sagittis vestibulum erat pulvinar
                  lacinia dolor sit amet consectetur adipiscing elit
                  eu.
               </div>
               <div
                  className="caseSubtitle"
                  style={{ marginBottom: "20px" }}
               >
                  Matt Raford - President & Managing Director
               </div>
               <div className="caseBtn">
                  <CustomGlideButton
                     title={"Case Study Download"}
                     bgYellow
                  />
               </div>
            </div>
            <div className="barImgBox">
               <Image src={bar} alt="img" className="barImg" />
            </div>
         </motion.div>
      </div>
   );
};

export default Case;
