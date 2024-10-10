import teamImg from "@/public/assets/pages/hosting/teamImg.jpg";
import DnsOutlinedIcon from "@mui/icons-material/DnsOutlined";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Slider from "react-slick/lib/slider";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ClientsCard from "./ClientCard";

import "./styles.css";
const CommonClient = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true });
   const sliderRef = useRef();
   const groupArray = [
      {
         name: "Darrell Steward",
         desc: "From the initial consultation to the final walk-through, they demonstrated professionalism, expertise, and a genuine commitment to excellence.From the initial consultation to the final walk-through, they demonstrated professionalism, expertise, and a genuine commitment to excellence.",
         position: "Manager",
         img: teamImg,
         active: true,
      },
      {
         name: "Courtney Henry",
         desc: " Our project was completed on time and within budget, and the quality of craftsmanship exceeded our expectations. What truly set RB Abroads apart.",
         position: "Manager",
         img: teamImg,
         active: false,
      },
      {
         name: "Jerome Bell",
         desc: "From the initial consultation to the final walk-through, they demonstrated professionalism, expertise, and a genuine commitment to excellence.",
         position: "Manager",
         img: teamImg,
         active: false,
      },
      {
         name: "Harry Bell",
         desc: "From the initial consultation to the final walk-through, they demonstrated professionalism, expertise, and a genuine commitment to excellence.",
         position: "Manager",
         img: teamImg,
         active: false,
      },
   ];
   const settings = {
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      autoplay: false,
      pauseOnHover: true,
      autoplaySpeed: 2000,
      infinite: true,
      dots: true,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 3,
            },
         },
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 2,
            },
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
            },
         },
      ],
   };
   const clientData = [
      {
         icon: (
            <DnsOutlinedIcon
               sx={{
                  color: "#fff",
                  fontSize: "70px",
                  marginBottom: "10px",
               }}
            />
         ),
         name: "Cloud VPS",
         desc: "Transform Your Business with Cloud Power",
      },
      {
         icon: (
            <DnsOutlinedIcon
               sx={{
                  color: "#fff",
                  fontSize: "70px",
                  marginBottom: "10px",
               }}
            />
         ),
         name: "Cloud VPS",
         desc: "Transform Your Business with Cloud Power",
      },
      {
         icon: (
            <DnsOutlinedIcon
               sx={{
                  color: "#fff",
                  fontSize: "70px",
                  marginBottom: "10px",
               }}
            />
         ),
         name: "Cloud VPS",
         desc: "Transform Your Business with Cloud Power",
      },
   ];
   return (
      <div className="clientCommonWrap">
         <div className="clientCommonWrapBox">
            <div className="clientTitleBox">
               <motion.div
                  ref={ref}
                  initial={{ y: 40, opacity: 0 }}
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
                  className="clientTitle"
               >
                  Our Client Feedback
               </motion.div>
               <motion.div
                  ref={ref}
                  initial={{ y: 40, opacity: 0 }}
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
                  className="clientSubtitle"
               >
                  We are honored and humbled by the great feedback we
                  receive from our customers on a daily basis.
               </motion.div>
            </div>
            <motion.div
               initial={{ y: 40, opacity: 0 }}
               animate={isInView ? { y: 0, opacity: 1 } : {}}
               transition={{
                  duration: 0.9,
                  bounce: 0.5,
                  damping: 50,
                  x: {
                     type: "spring",
                     stiffness: 300,
                  },
               }}
               className={"slideBox"}
            >
               <Slider
                  {...settings}
                  ref={sliderRef}
                  className={"sliderContainer"}
               >
                  {groupArray?.map((item, index) => (
                     <ClientsCard key={index} data={item} />
                  ))}
               </Slider>
            </motion.div>
         </div>
      </div>
   );
};

export default CommonClient;
