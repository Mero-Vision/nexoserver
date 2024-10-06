import { Box, Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./Navbar.css";

const NavModalHostingDetails = ({ row }) => {
   const router = useRouter();

   return (
      <Box sx={{ width: "650px" }}>
         <Grid container spacing={2}>
            {row &&
               row?.map((item, index) => (
                  <Grid item xs={6} key={index}>
                     <Link
                        href={item.url}
                        passHref
                        className="navbarLink"
                     >
                        <Box
                           sx={{
                              display: "flex",
                              alignItems: "center",
                              padding: "6px 14px",
                              cursor: "pointer",
                              transition: "0.2s ease-in-out",
                              border: "1px solid #fff",
                              borderRadius: "4px",
                              display: "flex",
                              gap: "16px",
                              marginBottom: "10px",
                              padding: "12px 10px",
                              "&:hover": {
                                 border: "1px solid #ddd",
                              },
                           }}
                        >
                           <Box
                              sx={{
                                 backgroundColor: "#F0F0FF",
                                 padding: "10px",
                                 display: "flex",
                                 justifyContent: "center",
                                 alignItems: "center",
                                 borderRadius: "4px",
                              }}
                           >
                              <Image
                                 src={item?.img}
                                 alt={"img"}
                                 sx={{}}
                              />
                           </Box>
                           <Box
                              sx={{
                                 display: "flex",
                                 flexDirection: "column",
                              }}
                           >
                              <Box
                                 sx={{
                                    width: "100%",
                                    fontWeight: 500,
                                    fontSize: "16px",
                                    color: "#343434",
                                    marginBottom: "6px",
                                 }}
                              >
                                 {item?.name}
                              </Box>
                              <Box
                                 sx={{
                                    width: "100%",
                                    fontWeight: 400,
                                    fontSize: "14px",
                                    color: "#545353",
                                 }}
                              >
                                 {item?.desc}
                              </Box>
                           </Box>
                        </Box>
                     </Link>
                  </Grid>
               ))}
         </Grid>
      </Box>
   );
};

export default NavModalHostingDetails;
