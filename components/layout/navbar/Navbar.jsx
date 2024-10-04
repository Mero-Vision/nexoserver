"use client";
import CommonScreenWidthChecker from "@/components/common/commomScreenWidthChecker/CommonScreen'WidthChecker";
import logoFooter from "@/public/assets/logo.png";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link"; // Import Link from next/link
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
   const router = useRouter();
   const [click, setClick] = useState(false);
   const [navBackground, setNavBackground] = useState(false);
   const [windowWidth, setWindowWidth] = useState(window.innerWidth);
   const navMenuRef = useRef(null);

   const navItems = [
      { name: "Home", url: "/" },
      { name: "Hosting", url: "/hosting" },
      { name: "Domains", url: "/domains" },
      { name: "Blogs", url: "/blogs" },
      { name: "About Us", url: "/about-us" },
      { name: "Support", url: "/support" },
   ];

   const handleScroll = () => {
      setNavBackground(window.scrollY > 10);
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
                     <Box>
                        <Image
                           src={logoFooter}
                           alt="img"
                           width={40}
                           height={40}
                        />
                     </Box>
                  </Link>
               </div>
               {windowWidth > 1250 ? (
                  <ul className="nav-menu">
                     {navItems.map((item, index) => (
                        <NavLink
                           item={item}
                           key={index}
                           navBackground={navBackground}
                        />
                     ))}
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
                                 <Box>
                                    <Image
                                       src={logoFooter}
                                       alt="img"
                                       width={40}
                                       height={40}
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
                     {navItems.map((item, index) => (
                        <NavLinkMobile
                           item={item}
                           key={index}
                           setClick={setClick}
                        />
                     ))}
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
   const isActive =
      pathname === item.url ||
      (pathname.startsWith(item.url) &&
         (item.url !== "/" || pathname === "/"));

   return (
      <li className="nav-item">
         <Link href={item.url} passHref className="navbarLink">
            <div
               className={
                  isActive
                     ? "activeLink"
                     : navBackground
                     ? "nav-link"
                     : "nav-link-background"
               }
            >
               {item.name}
            </div>
         </Link>
         {/* <div
            className={isActive ? "activeBar" : "inactiveBar"}
         ></div> */}
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
                     color: isActive ? "#508BC7" : "#424242",
                     paddingTop: "10px",
                     fontSize: "26px",
                  }}
               />
               <div
                  style={{
                     color: isActive ? "#508BC7" : "#424242",
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

export default Navbar;
