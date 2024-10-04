"use client";
import { Box, Grid } from "@mui/material";
// import { useRouter } from "next/";
import logoFooter from "@/public/assets/logo.png";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Image from "next/image";
import Link from "next/link";
import "./Footer.css";
const Footer = ({ data }) => {
   const yearToday = new Date().getFullYear();

   const footerHeaders = [
      {
         head: "Solutions",
         subLinks: [
            { link: "Destinations", url: "/destinations" },
            { link: "Services", url: "/services" },
            { link: "Timeline", url: "/timeline" },
         ],
      },
      {
         head: "Company",
         subLinks: [
            { link: "About Us", url: "/about-us" },
            { link: "Blogs", url: "/blogs" },
         ],
      },
      {
         head: "Legal",
         subLinks: [
            { link: "Privacy", url: "/privacy-policy" },
            { link: "Terms", url: "/terms-and-conditions" },
         ],
      },
   ];

   return (
      <div className="footer">
         {/* <Image src={mountainImg} alt="img" className="mountainImg" /> */}
         <div className="container">
            <Grid container spacing={6}>
               <Grid item lg={4.2} xs={12}>
                  <div className="logo">
                     <div>
                        <div style={{ marginBottom: "20px" }}>
                           <Image
                              // src={data?.fav_icon}
                              src={logoFooter}
                              alt="img"
                              className="logoFooter"
                              // width={160}
                              // height={70}
                           />
                        </div>
                        <div className="logoGridDesc">
                           Making the world a better place through
                           constructing elegant hierarchies
                        </div>
                        <div
                           style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "10px",
                           }}
                        >
                           <FacebookRoundedIcon
                              // onClick={() =>
                              //    window.open(
                              //       "https://www.facebook.com/rbabroadshikshya/"
                              //    )
                              // }
                              sx={{
                                 fontSize: "22px",
                                 color: "#fff",
                                 cursor: "pointer",
                              }}
                           />
                           <InstagramIcon
                              // onClick={() =>
                              //    window.open(
                              //       "https://www.facebook.com/rbabroadshikshya/"
                              //    )
                              // }
                              sx={{
                                 fontSize: "22px",
                                 color: "#fff",
                                 cursor: "pointer",
                              }}
                           />
                           <XIcon
                              // onClick={() =>
                              //    window.open(
                              //       "https://www.facebook.com/rbabroadshikshya/"
                              //    )
                              // }
                              sx={{
                                 fontSize: "22px",
                                 color: "#fff",
                                 cursor: "pointer",
                              }}
                           />
                           <YouTubeIcon
                              // onClick={() =>
                              //    window.open(
                              //       "https://www.facebook.com/rbabroadshikshya/"
                              //    )
                              // }
                              sx={{
                                 fontSize: "22px",
                                 color: "#fff",
                                 cursor: "pointer",
                              }}
                           />
                        </div>
                     </div>
                  </div>
               </Grid>
               <Grid item lg={4.3} xs={12}>
                  <Box className="footerG2">
                     {footerHeaders?.map((item, index) => (
                        <Box key={index} className="g2ItemBox">
                           <Box className="itemBoxHead" key="index">
                              {item?.head}
                           </Box>
                           <Box className="itemBoxLinksBox">
                              {item?.subLinks?.map((item, index) => (
                                 <Box
                                    className="itemBoxLinks"
                                    key={index}
                                 >
                                    <Link
                                       className="itemBoxLinksBox"
                                       style={{
                                          textDecoration:
                                             "none !important",
                                          underline:
                                             "none !important",
                                          color: "red !important",
                                       }}
                                       href={item?.url}
                                    >
                                       {item?.link}
                                    </Link>
                                 </Box>
                              ))}
                           </Box>
                        </Box>
                     ))}
                  </Box>
               </Grid>
               <Grid item lg={3.5} xs={12}>
                  <Box className="g2Grid">
                     <Box className="addressBox">
                        <Box className="addressHead">Address</Box>
                        <Box className="addressInfo">Santinagar</Box>
                     </Box>
                     <Box className="inquiriesBox">
                        <Box className="inquiriesBoxHead">
                           Inquiries
                        </Box>
                        <Box className="inquiriesInfo">
                           987873837833
                        </Box>
                        <Box className="inquiriesInfo">
                           nexo@mail.com
                        </Box>
                     </Box>
                  </Box>
               </Grid>
            </Grid>
         </div>
         <div className="footer-bottom">
            <div className="content">
               <div className="rights">
                  <p>
                     &copy; Copyright {yearToday} © All Right
                     Reserved. Designed by{" "}
                     <span
                        // onClick={() =>
                        //    window.open("https://merovision.com/")
                        // }
                        className="meroVisionLink"
                     >
                        Incocgnyte Technology Pvt. Ltd.
                     </span>
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Footer;
