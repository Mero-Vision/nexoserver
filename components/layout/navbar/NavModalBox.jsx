import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, Fade, Popper } from "@mui/material";
import { usePathname } from "next/navigation";
import { useState } from "react";
import NavModalDetails from "./NavModalDetails";
import NavModalHostingDetails from "./NavModalHostingDetails";
import "./Navbar.css";
const NavModalBox = ({
   props,
   hide,
   menuData,
   hosting,
   navBackground,
}) => {
   const [anchorEl, setAnchorEl] = useState(null);
   const row = props?.row;
   const pathname = usePathname();

   const handlePopoverOpen = (event) => {
      setAnchorEl(event.currentTarget);
   };

   const handlePopoverClose = () => {
      setAnchorEl(null);
   };

   const open = Boolean(anchorEl);
   const isActive = ["shared-hosting", "cloud-hosting"].some((path) =>
      pathname.includes(path)
   );

   console.log("dasdasdsdfsdfsdds", { isActive, navBackground });
   const getColor = () => {
      if (!isActive && !navBackground) {
         return "#000"; // white for logo
      } else if (isActive && !navBackground) {
         return "#fff"; // black for logoFooter
      } else if (navBackground) {
         return "#000"; // white for logo
      } else {
         return "#fff"; // black for logoFooter
      }
   };

   return (
      <Box
         sx={{ textTransform: "capitalize" }}
         onMouseEnter={handlePopoverOpen}
         onMouseLeave={handlePopoverClose}
      >
         <Box
            sx={{
               display: "flex",
               alignItems: "center",
               gap: "5px",
               color: getColor(),
            }}
         >
            {props}{" "}
            <KeyboardArrowDownIcon sx={{ fontSize: "20px" }} />{" "}
         </Box>
         <Popper
            transition
            open={open}
            anchorEl={anchorEl}
            onClose={handlePopoverClose}
            modifiers={[
               {
                  name: "offset",
                  options: {
                     offset: [0, 33], // Adjust the second value to control vertical spacing
                  },
               },
            ]}
            anchorOrigin={{
               vertical: "bottom",
               horizontal: "left",
            }}
            transformOrigin={{
               vertical: "top",
               horizontal: "left",
            }}
            sx={{ zIndex: "100000" }}
         >
            {({ TransitionProps }) => (
               <Fade {...TransitionProps} timeout={350}>
                  {hosting ? (
                     <Box
                        sx={{
                           background: "#fff",
                           boxShadow:
                              "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
                           display: "flex",
                           padding: "40px 40px 30px 40px",
                           flexWrap: "wrap",
                           borderRadius: "8px",
                        }}
                     >
                        <NavModalHostingDetails row={menuData} />
                     </Box>
                  ) : (
                     <Box
                        sx={{
                           background: "#fff",
                           boxShadow:
                              "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
                           display: "flex",
                           padding: "20px",
                           flexWrap: "wrap",
                           borderRadius: "8px",
                        }}
                     >
                        <NavModalDetails row={menuData} />
                     </Box>
                  )}
               </Fade>
            )}
         </Popper>
      </Box>
   );
};

export default NavModalBox;
