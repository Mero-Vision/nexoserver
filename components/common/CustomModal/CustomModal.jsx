import { Clear } from "@mui/icons-material";
import {
   Box,
   Fade,
   IconButton,
   Modal,
   Typography,
} from "@mui/material";
import { memo, useEffect, useState } from "react";

function CustomModal({
   children,
   open,
   handleClose,
   width,
   height,
   modalTitle,
   icon,
   noTitle,
   background,
}) {
   const getModalStyle = (height, width) => ({
      top: "50%",
      left: "50%",
      width: width || "800px",
      height: height || "auto",
      maxHeight: height || "80vh",
      transform: "translate(-50%, -50%)",
      overflowY: "auto",
      position: "absolute",
      backgroundColor: "#fff",
      borderRadius: "3px",
      boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
      outline: "none",
   });

   const [modalStyle, setModalStyle] = useState(
      getModalStyle(height, width)
   );

   useEffect(() => {
      setModalStyle(getModalStyle(height, width));
   }, [height, width]);

   return (
      <Modal
         open={open}
         onClose={handleClose}
         aria-labelledby="simple-modal-title"
         aria-describedby="simple-modal-description"
         closeAfterTransition
         disableScrollLock
      >
         <Fade in={open}>
            <Box sx={modalStyle}>
               {(modalTitle || noTitle) && (
                  <Box
                     sx={{
                        position: "sticky",
                        top: 0,
                        zIndex: 1000,
                        backgroundColor: "#fff",
                        padding: "11px 20px",
                        color: "#6259CA !important",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderBottom: "1px solid #ddd",
                     }}
                  >
                     <Box
                        sx={{
                           display: "flex",
                           alignItems: "center",
                           columnGap: "1rem",
                        }}
                     >
                        {icon && (
                           <Box
                              sx={{
                                 background: "#ddd",
                                 borderRadius: "50%",
                                 display: "flex",
                                 alignItems: "center",
                                 padding: "5px",
                              }}
                           >
                              {icon}
                           </Box>
                        )}
                        {modalTitle && (
                           <Typography
                              fontSize="medium"
                              sx={{
                                 color: "#6259CA !important",
                                 fontWeight: "600",
                                 fontSize: "16px !important",
                                 textTransform: "capitalize",
                              }}
                           >
                              {modalTitle}
                           </Typography>
                        )}
                     </Box>
                     <IconButton
                        onClick={handleClose}
                        sx={{ borderRadius: "6px !important" }}
                     >
                        <Clear
                           sx={{
                              color: "#6259CA !important",
                              fontWeight: "500",
                              fontSize: "18px",
                           }}
                        />
                     </IconButton>
                  </Box>
               )}
               <Box
                  sx={{
                     backgroundColor: background
                        ? background
                        : "#fff !important",
                  }}
                  p="11px 20px 20px 20px"
               >
                  {children}
               </Box>
            </Box>
         </Fade>
      </Modal>
   );
}

export default memo(CustomModal);
