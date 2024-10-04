// import heroBg from "@/public/assets/serverImg.png";
import heroBg from "@/public/assets/serverImg.png";
import { Box } from "@mui/material";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import "./styles.css";

const HeroPage = () => {
   return (
      <Box className="heroWrap">
         <Box className="heroWrapBox">
            <Box className="heroMainTitleBox">
               <Box className="heroMainTitle">
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
               </Box>
               <Box className="heroMainSubtitle">
                  Powerful servers with high-end resourses that will
                  gurantee <br /> resourses exclusivity, starting at
                  just{" "}
                  <span className="heroMainSubtitleSpan">
                     $ 90.22/mo
                  </span>{" "}
               </Box>
               <div className="search-bar-container">
                  <input
                     type="text"
                     className="search-input"
                     placeholder="Search for a domain name..."
                  />
                  <button className="search-button">Search.</button>
               </div>
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

export default HeroPage;
