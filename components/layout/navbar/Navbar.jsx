"use client";
import CommonScreenWidthChecker from "@/components/common/commomScreenWidthChecker/CommonScreen'WidthChecker";
import logo from "@/public/assets/logo.png";
import logoFooter from "@/public/assets/logoFooter.png";
import cloudImg from "@/public/assets/navHosting/cloud.svg";
import dedicatedImg from "@/public/assets/navHosting/dedicated.svg";
import resellerImg from "@/public/assets/navHosting/reseller.svg";
import sharedImg from "@/public/assets/navHosting/shared.svg";
import vpsImg from "@/public/assets/navHosting/vps.svg";
import wordpressImg from "@/public/assets/navHosting/wordpress.svg";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import {
   Accordion,
   AccordionDetails,
   AccordionSummary,
   Box,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link"; // Import Link from next/link
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import NavModalBox from "./NavModalBox";

const Navbar = () => {
   const router = useRouter();
   const [click, setClick] = useState(false);
   const [navBackground, setNavBackground] = useState(false);
   const [windowWidth, setWindowWidth] = useState(window.innerWidth);
   const navMenuRef = useRef(null);
   const [expandedDomain, setExpandedDomain] = useState(false);
   const [expandedHosting, setExpandedHosting] = useState(false);

   console.log({ router });

   const handleDomainChange = (panel) => (event, isExpanded) => {
      setExpandedDomain(isExpanded ? panel : false);
   };

   const handleHostingChange = (panel) => (event, isExpanded) => {
      setExpandedHosting(isExpanded ? panel : false);
   };

   const navItems = [
      { name: "Home", url: "/" },
      { name: "Blogs", url: "/blogs" },
   ];

   const domainCategory = [
      { name: "Domain Checker", url: "/domain-checker" },
      {
         name: "Domain Transfer",
         url: "/domain-transfer",
      },
      {
         name: "Domain Registration",
         url: "/domain-registration",
      },
   ];
   const hostingCategory = [
      {
         name: "Shared Hosting",
         desc: "Manage Shared Hosting",
         url: "/shared-hosting",
         img: sharedImg,
      },
      {
         name: "Reseller Hosting",
         desc: "Earn Additional Revenue",
         url: "/reseller-hosting",
         img: resellerImg,
      },
      {
         name: "Wordpress Hosting",
         desc: "WordPress Hosting Speed",
         url: "/wordpress-hosting",
         img: wordpressImg,
      },
      {
         name: "Dedicated Hosting",
         desc: "Hosting That Gives You Tools",
         url: "/dedicated-hosting",
         img: dedicatedImg,
      },
      {
         name: "Vps Hosting",
         desc: "Dedicated Resourses",
         url: "/vps-hosting",
         img: vpsImg,
      },
      {
         name: "Cloud Hosting",
         desc: "Manage Cloud Hosting",
         url: "/cloud-hosting",
         img: cloudImg,
      },
   ];

   const handleScroll = () => {
      setNavBackground(window.scrollY > 100);
   };

   const handleResize = () => {
      setWindowWidth(window.innerWidth);
   };

   const handleClickOutside = (event) => {
      if (
         navMenuRef.current &&
         !navMenuRef.current.contains(event.target)
      ) {
         setClick(false);
         document.body.classList.remove("no-scroll");
      }
   };

   useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleResize);
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
         window.removeEventListener("scroll", handleScroll);
         window.removeEventListener("resize", handleResize);
         document.removeEventListener(
            "mousedown",
            handleClickOutside
         );
      };
   }, []);

   const handleClick = () => {
      setClick(!click);
      document.body.classList.toggle("no-scroll", !click);
   };

   const [loginOpen, setLoginOpen] = useState(false);
   const [signupOpen, setSignupOpen] = useState(false);
   const screenWidth = CommonScreenWidthChecker();
   console.log({ screenWidth });

   const [modalWidth, setModalWidth] = useState();

   useEffect(() => {
      if (screenWidth > 790) {
         setModalWidth("500px");
      } else if (screenWidth > 620) {
         setModalWidth("400px");
      } else if (screenWidth > 420) {
         setModalWidth("300px");
      } else if (screenWidth > 320) {
         setModalWidth("300px");
      } else {
         setModalWidth("200px"); // fallback for very small screens
      }
   }, [screenWidth]);
   const pathname = usePathname();

   // Check if pathname matches specific paths
   const isActive = [
      "shared-hosting",
      "server-dom",
      "domain-name",
   ].some((path) => pathname.includes(path));
   return (
      <>
         <header
            style={{
               // boxShadow:
               //    "0 0.8125rem 2.1875rem -0.75rem rgba(35, 35, 35, 0.15)",
               position: "sticky",
               top: 0,
               zIndex: 100,
            }}
         >
            <Box
               className={
                  navBackground ? "navbarBackground" : "navbar"
                  // "navbarBackground"
               }
            >
               <div className="logo">
                  <Link href="/" passHref className="navbarLink">
                     <Box className="logoNavBox">
                        <Image
                           className="logoNav"
                           src={
                              !isActive && !navBackground
                                 ? logo
                                 : isActive && !navBackground
                                 ? logoFooter
                                 : navBackground
                                 ? logo
                                 : logoFooter
                           }
                           alt="img"
                           // width={150}
                           // height={150}
                        />
                     </Box>
                  </Link>
               </div>
               {windowWidth > 1250 ? (
                  <ul className="nav-menu">
                     {navItems?.slice(0, 1).map((item, index) => (
                        <NavLink
                           item={item}
                           key={index}
                           navBackground={navBackground}
                        />
                     ))}
                     <li className="nav-item">
                        <div
                           // onClick={(e) =>
                           //    handleMenuOpen(e, "hosting")
                           // }
                           className={
                              navBackground
                                 ? "nav-link"
                                 : "nav-link-background"
                           }
                        >
                           <NavModalBox
                              hosting
                              props={"Hosting"}
                              menuData={hostingCategory}
                              navBackground
                           />
                        </div>
                     </li>
                     {navItems?.slice(1, 2).map((item, index) => (
                        <NavLink
                           item={item}
                           key={index}
                           navBackground={navBackground}
                        />
                     ))}
                     <li className="nav-item">
                        <div
                           // onClick={(e) =>
                           //    handleMenuOpen(e, "domain")
                           // }
                           className={
                              navBackground
                                 ? "nav-link"
                                 : "nav-link-background"
                           }
                        >
                           <NavModalBox
                              props={"Domains"}
                              menuData={domainCategory}
                              navBackground={navBackground}
                           />
                        </div>
                     </li>

                     <li className="nav-item">
                        <Box
                           // onClick={() => setLoginOpen(true)}
                           className={"hero-area-btn-login"}
                        >
                           Client Area
                        </Box>
                     </li>
                  </ul>
               ) : (
                  <div className="hamburger" onClick={handleClick}>
                     {!click && (
                        <MenuIcon
                           sx={{
                              color: "#508bc7",
                              fontSize: "35px !important",
                           }}
                        />
                     )}
                  </div>
               )}
            </Box>
         </header>
         {windowWidth < 1250 && click && (
            <div className="mobileView" ref={navMenuRef}>
               <ul className="nav-menu active">
                  <li className="nav-item">
                     <Box
                        sx={{
                           display: "flex",
                           justifyContent: "space-between",
                           padding: "0.3rem",
                           paddingLeft: "0.5rem",
                        }}
                     >
                        <Link
                           href="/"
                           passHref
                           className="navbarLink"
                        >
                           <Box
                              sx={{
                                 color: "#424242",
                                 fontSize: "18px",
                                 fontWeight: "600",
                                 lineHeight: "1",
                              }}
                           >
                              <div style={{ width: "80px " }}>
                                 <Box className="logoNavMob">
                                    <Image
                                       className="logoNavImg"
                                       src={logoFooter}
                                       alt="img"
                                       // width={40}
                                       // height={40}
                                    />
                                 </Box>
                              </div>
                           </Box>
                        </Link>
                        <div onClick={handleClick}>
                           {click && (
                              <CloseRoundedIcon
                                 sx={{
                                    fontSize: "30px !important",
                                    marginRight: "7px",
                                    color: "#508bc7",
                                 }}
                              />
                           )}
                        </div>
                     </Box>
                  </li>
                  <ul className="list-items">
                     {navItems?.slice(0, 1)?.map((item, index) => (
                        <NavLinkMobile
                           item={item}
                           key={index}
                           setClick={setClick}
                        />
                     ))}
                     <li className="nav-item">
                        <AccordianHosting
                           item={hostingCategory}
                           expanded={expandedHosting}
                           handleChange={handleHostingChange}
                           setClick={setClick}
                        />
                     </li>
                     {navItems?.slice(1, 2)?.map((item, index) => (
                        <NavLinkMobile
                           item={item}
                           key={index}
                           setClick={setClick}
                        />
                     ))}
                     <li className="nav-item">
                        <AccordianDomain
                           item={domainCategory}
                           expanded={expandedDomain}
                           handleChange={handleDomainChange}
                           setClick={setClick}
                        />
                     </li>
                     <li className="nav-item">
                        <Box
                           // onClick={() => {
                           //    setLoginOpen(true),
                           //       setClick(false),
                           //       document.body.classList.remove(
                           //          "no-scroll"
                           //       );
                           // }}
                           className={"hero-area-btn-login"}
                        >
                           Client Area
                        </Box>
                     </li>
                  </ul>
               </ul>
            </div>
         )}
      </>
   );
};

const NavLink = ({ item, navBackground }) => {
   const pathname = usePathname();

   // Check if pathname matches specific paths
   const isActive = [
      "shared-hosting",
      "server-dom",
      "domain-name",
   ].some((path) => pathname.includes(path));

   return (
      <li className="nav-item">
         <Link href={item.url} passHref className="navbarLink">
            <div
               className={
                  isActive && !navBackground
                     ? "activeLink"
                     : navBackground
                     ? "nav-link"
                     : "nav-link-background"
               }
            >
               {item.name}
            </div>
         </Link>
         {/* Uncomment if you need the active bar */}
         {/* <div className={isActive ? "activeBar" : "inactiveBar"}></div> */}
      </li>
   );
};

const NavLinkMobile = ({ item, setClick }) => {
   const pathname = usePathname();
   const isActive =
      pathname === item.url ||
      (pathname.startsWith(item.url) &&
         (item.url !== "/" || pathname === "/"));

   return (
      <li
         className="nav-item"
         key={item.name}
         onClick={() => {
            setClick(false);
            document.body.classList.remove("no-scroll");
         }}
      >
         <Link href={item.url} passHref className="navbarLink">
            <div
               style={{
                  display: "flex",
                  alignItems: "center",
               }}
            >
               <ChevronLeftRoundedIcon
                  sx={{
                     color: "#424242",
                     paddingTop: "10px",
                     fontSize: "26px",
                  }}
               />
               <div
                  style={{
                     color: "#424242",
                     paddingTop: "10px",
                     fontSize: "14px",
                     paddingLeft: "10px",
                  }}
                  className={"nav-link"}
               >
                  {item.name}
               </div>
            </div>
         </Link>
      </li>
   );
};

const AccordianDomain = ({
   item,
   expanded,
   handleChange,
   setClick,
}) => {
   const router = useRouter();
   return (
      <div>
         <Accordion
            elevation={0}
            expanded={expanded === item.category_name}
            onChange={handleChange(item.category_name)}
            sx={{
               "& .MuiAccordionSummary-root": {
                  padding: "0px ",
                  minHeight: "21px",
               },
               "& .MuiAccordionSummary-content": {
                  margin: "8px 0px ",
               },
               "& .MuiAccordionDetails-root": {
                  padding: "10px 0px 10px 10px ",

                  textAlign: "start",
                  borderBottom: "1px solid #e7e8e8",
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
               <Box
                  sx={{
                     fontSize: "14px",
                     color: "#424242",
                     fontWeight: "500",
                     marginLeft: "37px",
                  }}
               >
                  Domain
               </Box>
            </AccordionSummary>
            {item?.map((data, index) => (
               <AccordionDetails
                  key={index}
                  sx={{
                     "& .MuiAccordionDetails-root": {
                        border: "none !important",
                        padding: "0px ",
                        outline: "none !important",
                     },
                  }}
               >
                  <Box
                     onClick={() => {
                        router.push(data?.url || "/"),
                           setClick(false),
                           document.body.classList.remove(
                              "no-scroll"
                           );
                     }}
                     sx={{
                        fontSize: "13px",
                        color: "#2F82D9",
                        cursor: "pointer",
                        paddingLeft: "30px",
                     }}
                  >
                     {data?.name}
                  </Box>
               </AccordionDetails>
            ))}
         </Accordion>
      </div>
   );
};
const AccordianHosting = ({
   item,
   expanded,
   handleChange,
   setClick,
}) => {
   const router = useRouter();
   return (
      <div>
         <Accordion
            elevation={0}
            expanded={expanded === item.category_name}
            onChange={handleChange(item.category_name)}
            sx={{
               "& .MuiAccordionSummary-root": {
                  padding: "0px ",
                  minHeight: "21px",
               },
               "& .MuiAccordionSummary-content": {
                  margin: "8px 0px ",
               },
               "& .MuiAccordionDetails-root": {
                  padding: "10px 0px 10px 10px ",

                  textAlign: "start",
                  borderBottom: "1px solid #e7e8e8",
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
               <Box
                  sx={{
                     fontSize: "14px",
                     color: "#424242",
                     fontWeight: "500",
                     marginLeft: "37px",
                  }}
               >
                  Hosting
               </Box>
            </AccordionSummary>
            {item?.map((data, index) => (
               <AccordionDetails
                  key={index}
                  sx={{
                     "& .MuiAccordionDetails-root": {
                        border: "none !important",
                        padding: "0px ",
                        outline: "none !important",
                     },
                  }}
               >
                  <Box
                     onClick={() => {
                        router.push(data?.url || "/"),
                           setClick(false),
                           document.body.classList.remove(
                              "no-scroll"
                           );
                     }}
                     sx={{
                        fontSize: "13px",
                        color: "#2F82D9",
                        cursor: "pointer",
                        paddingLeft: "30px",
                     }}
                  >
                     {data?.name}
                  </Box>
               </AccordionDetails>
            ))}
         </Accordion>
      </div>
   );
};
export default Navbar;
