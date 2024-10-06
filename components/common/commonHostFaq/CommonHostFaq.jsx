"use client";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
   Accordion,
   AccordionDetails,
   AccordionSummary,
   Box,
} from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import "./styles.css";

const CommonHostFaq = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true });

   const sideBarMenuData = [
      {
         question: "What services does your consultancy offer?",
         answer:
            "We assist students in finding the right universities, preparing their applications, and guiding them through the visa process.",
      },
      {
         question: "Which countries do you help students study in?",
         answer:
            "We help students gain admission to universities in popular study destinations like the USA, UK, Canada, Australia, and more.",
      },
      {
         question: "How do I start the application process?",
         answer:
            "You can schedule a consultation with our advisors, who will guide you through selecting universities and preparing your application.",
      },
      {
         question: "What are the requirements to study abroad?",
         answer:
            "Requirements vary by country and university, but generally include academic transcripts, English proficiency tests, and a statement of purpose.",
      },
      {
         question: "Do you provide assistance with scholarships?",
         answer:
            "Yes, we help students identify and apply for scholarships that match their profile and chosen study program.",
      },
   ];

   const [expanded, setExpanded] = useState(false);
   const [click, setClick] = useState(false);

   const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
   };
   return (
      <Box className="faqHomeWrap">
         <Box className="faqHomeBox">
            <motion.div
               className="faqHomeBoxHead"
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
            >
               <Box className="faqHomeBoxHeadWidth">
                  Frequently asked questions{" "}
               </Box>{" "}
            </motion.div>

            <Box className="accordianBoxMainFaq">
               {sideBarMenuData?.map((item, index) => (
                  <Accordian
                     item={item}
                     key={index}
                     expanded={expanded}
                     handleChange={handleChange}
                     setClick={setClick}
                  />
               ))}
            </Box>
         </Box>
      </Box>
   );
};

const Accordian = ({ item, expanded, handleChange, setClick }) => {
   return (
      <div>
         <Accordion
            elevation={0}
            expanded={expanded === item.question}
            onChange={handleChange(item.question)}
            sx={{
               background: "transparent !important",
               "& .MuiBox-root": {
                  background: "transparent !important",
               },
               "& .MuiPaper-root": {
                  background: "transparent !important",
               },
               "& .MuiAccordion-root": {
                  background: "transparent !important",
               },
               "& .MuiPaper-elevation": {
                  background: "transparent !important",
               },
               "& .MuiAccordionSummary-root": {
                  padding: "0px ",
                  background: "transparent !important",
                  borderBottom: "1px solid #cdcccf",
               },
               "& .MuiAccordionDetails-root": {
                  padding: "10px 0px 10px 10px ",

                  background: "transparent !important",

                  textAlign: "start",
                  borderBottom: "1px solid #cdcccf",

                  "&:last-child": {
                     borderBottom: "none",
                  },
               },
            }}
         >
            <AccordionSummary
               expandIcon={<KeyboardArrowDownIcon />}
               aria-controls="panel1-content"
               id="panel1-header"
            >
               <Box className="accordianQuestion">
                  {item?.question}
               </Box>
            </AccordionSummary>

            <AccordionDetails
               sx={{
                  "& .MuiAccordionDetails-root": {
                     border: "none !important",

                     padding: "0px ",
                     outline: "none !important",
                  },
               }}
            >
               <Box className="accordianAnswer">{item?.answer}</Box>
            </AccordionDetails>
         </Accordion>
      </div>
   );
};

export default CommonHostFaq;
