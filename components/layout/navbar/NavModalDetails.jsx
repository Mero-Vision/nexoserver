import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

const NavModalDetails = ({ row }) => {
   const router = useRouter();

   return (
      <Box sx={{ width: "225px" }}>
         {row &&
            row?.map((item, index) => (
               <Box
                  onClick={() => router.push(item?.url)}
                  key={index}
                  sx={{
                     display: "flex",
                     alignItems: "center",
                     padding: "6px 14px",
                     cursor: "pointer",
                     transition: "0.2s ease-in-out",
                     borderRadius: "4px",
                     // "&:hover": {
                     //    backgroundColor: "#edf3fc",
                     // },
                     "& .line": {
                        width: "0px",
                        height: "2px",
                        backgroundColor: "#343434",
                        transition: "width 0.3s ease-in-out",
                        marginRight: "3px",
                     },
                     "&:hover .line": {
                        width: "16px",
                        marginRight: "3px",
                     },
                  }}
               >
                  <span className="line"></span>
                  <Typography
                     sx={{
                        width: "100%",
                        fontWeight: 400,
                        fontSize: "16px",
                        color: "#343434",
                        lineHeight: 1,
                     }}
                  >
                     {item?.name}
                  </Typography>
               </Box>
            ))}
      </Box>
   );
};

export default NavModalDetails;
