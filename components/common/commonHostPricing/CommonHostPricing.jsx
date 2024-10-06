import CustomGlideButton from "@/components/common/CustomGlideButton/CustomGlideButton";
import DnsOutlinedIcon from "@mui/icons-material/DnsOutlined";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import { Box, Grid } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "./styles.css";
const CommonHostPricing = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true });
   const pricingData = [
      {
         icon: (
            <FilterDramaIcon
               sx={{
                  color: "#fff",
                  fontSize: "70px",
                  marginBottom: "10px",
               }}
            />
         ),
         recomended: false,
         title: "Shared Hosting",
         subtitle: "Empower Your Business with Cloud Hosting",
         price: "150",
         billingCycle: "month, billed annually",
         featureData: [
            {
               title: "Storage and Backups",
               features: [
                  {
                     feature: "Storage",
                     value: "5GB nvme-SSD Storage",
                  },
                  {
                     feature: "Bandwidth",
                     value: "Unlimited Bandwidth",
                  },
                  { feature: "Backups", value: "Daily Backups" },
               ],
            },
            {
               title: "Database Support",
               features: [
                  {
                     feature: "MySQL Databases",
                     value: "10 MySQL Databases",
                  },
               ],
            },
            {
               title: "Security",
               features: [
                  {
                     feature: "Security Software",
                     value: "Immunify 360",
                  },
                  { feature: "SSL", value: "Free SSL" },
                  { feature: "IP Blocker", value: "IP Blocker" },
               ],
            },
            {
               title: "Emails",
               features: [
                  {
                     feature: "E-mail Accounts",
                     value: "10 E-mail Accounts",
                  },
               ],
            },
            {
               title: "Tools",
               features: [
                  { feature: "GIT Access", value: "GIT Access" },
                  {
                     feature: "Control Panel",
                     value: "cPanel + 1 Click Installer",
                  },
                  { feature: "SSH Access", value: "SSH Access" },
                  {
                     feature: "Managed WordPress",
                     value: "Managed WordPress",
                  },
                  {
                     feature: "PHP Versions",
                     value: "Multiple PHP Versions",
                  },
               ],
            },
            {
               title: "Language Support",
               features: [
                  { feature: "PHP", value: "PHP" },
                  { feature: "NodeJS", value: "NodeJS" },
                  { feature: "Python", value: "Python" },
               ],
            },
            {
               title: "Free Features",
               features: [
                  { feature: "Free Domain", value: "No Free Domain" },
                  { feature: "SSL", value: "Free SSL" },
                  {
                     feature: "Website Migration",
                     value: "Free Website Migration",
                  },
               ],
            },
            {
               title: "Others",
               features: [
                  { feature: "Support", value: "24/7 Support" },
                  {
                     feature: "Data Centers",
                     value: "Single Data Center",
                  },
                  {
                     feature: "Uptime Guarantee",
                     value: "99.99% Uptime Guarantee",
                  },
                  { feature: "Websites Allowed", value: "1 Website" },
                  {
                     feature: "Nameservers",
                     value: "Anycast Nameservers",
                  },
               ],
            },
         ],
      },
      {
         icon: (
            <StorageOutlinedIcon
               sx={{
                  color: "#fff",
                  fontSize: "70px",
                  marginBottom: "10px",
               }}
            />
         ),
         recomended: true,
         title: "Dedicated Server",
         subtitle: "Unleash Business Potential with Cloud Hosting",
         price: "390",
         billingCycle: "month, billed annually",
         featureData: [
            {
               title: "Storage and Backups",
               features: [
                  {
                     feature: "Storage",
                     value: "Unlimited nvme-SSD Storage",
                  },
                  {
                     feature: "Bandwidth",
                     value: "Unlimited Bandwidth",
                  },
                  { feature: "Backups", value: "Daily Backups" },
               ],
            },
            {
               title: "Database Support",
               features: [
                  {
                     feature: "MySQL Databases",
                     value: "Unlimited MySQL Databases",
                  },
               ],
            },
            {
               title: "Security",
               features: [
                  {
                     feature: "Security Software",
                     value: "Immunify 360",
                  },
                  { feature: "SSL", value: "Free SSL" },
                  { feature: "IP Blocker", value: "IP Blocker" },
               ],
            },
            {
               title: "Emails",
               features: [
                  {
                     feature: "E-mail Accounts",
                     value: "Unlimited E-mail Accounts",
                  },
               ],
            },
            {
               title: "Tools",
               features: [
                  { feature: "GIT Access", value: "GIT Access" },
                  {
                     feature: "Control Panel",
                     value: "cPanel + 1 Click Installer",
                  },
                  { feature: "SSH Access", value: "SSH Access" },
                  {
                     feature: "Managed WordPress",
                     value: "Managed WordPress",
                  },
                  {
                     feature: "PHP Versions",
                     value: "Multiple PHP Versions",
                  },
               ],
            },
            {
               title: "Language Support",
               features: [
                  { feature: "PHP", value: "PHP" },
                  { feature: "NodeJS", value: "NodeJS" },
                  { feature: "Python", value: "Python" },
               ],
            },
            {
               title: "Free Features",
               features: [
                  {
                     feature: "Free Domain",
                     value: "Free .COM/.NET/.ORG Domain",
                  },
                  { feature: "SSL", value: "Free SSL" },
                  {
                     feature: "Website Migration",
                     value: "Free Website Migration",
                  },
               ],
            },
            {
               title: "Others",
               features: [
                  { feature: "Support", value: "24/7 Support" },
                  {
                     feature: "Data Centers",
                     value: "Multiple Data Centers",
                  },
                  {
                     feature: "Uptime Guarantee",
                     value: "99.99% Uptime Guarantee",
                  },
                  {
                     feature: "Websites Allowed",
                     value: "Unlimited Websites",
                  },
                  {
                     feature: "Nameservers",
                     value: "Anycast Nameservers",
                  },
               ],
            },
         ],
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
         recomended: false,
         title: "Cloud VPS",
         subtitle: "Transform Your Business with Cloud Power",
         price: "210",
         billingCycle: "month, billed annually",
         featureData: [
            {
               title: "Storage and Backups",
               features: [
                  {
                     feature: "Storage",
                     value: "Unlimited nvme-SSD Storage",
                  },
                  {
                     feature: "Bandwidth",
                     value: "Unlimited Bandwidth",
                  },
                  { feature: "Backups", value: "Daily Backups" },
               ],
            },
            {
               title: "Database Support",
               features: [
                  {
                     feature: "MySQL Databases",
                     value: "30 MySQL Databases",
                  },
               ],
            },
            {
               title: "Security",
               features: [
                  {
                     feature: "Security Software",
                     value: "Immunify 360",
                  },
                  { feature: "SSL", value: "Free SSL" },
                  { feature: "IP Blocker", value: "IP Blocker" },
               ],
            },
            {
               title: "Emails",
               features: [
                  {
                     feature: "E-mail Accounts",
                     value: "50 E-mail Accounts",
                  },
               ],
            },
            {
               title: "Tools",
               features: [
                  { feature: "GIT Access", value: "GIT Access" },
                  {
                     feature: "Control Panel",
                     value: "cPanel + 1 Click Installer",
                  },
                  { feature: "SSH Access", value: "SSH Access" },
                  {
                     feature: "Managed WordPress",
                     value: "Managed WordPress",
                  },
                  {
                     feature: "PHP Versions",
                     value: "Multiple PHP Versions",
                  },
               ],
            },
            {
               title: "Language Support",
               features: [
                  { feature: "PHP", value: "PHP" },
                  { feature: "NodeJS", value: "NodeJS" },
                  { feature: "Python", value: "Python" },
               ],
            },
            {
               title: "Free Features",
               features: [
                  { feature: "Free Domain", value: "No Free Domain" },
                  { feature: "SSL", value: "Free SSL" },
                  {
                     feature: "Website Migration",
                     value: "Free Website Migration",
                  },
               ],
            },
            {
               title: "Others",
               features: [
                  { feature: "Support", value: "24/7 Support" },
                  {
                     feature: "Data Centers",
                     value: "Multiple Data Centers",
                  },
                  {
                     feature: "Uptime Guarantee",
                     value: "99.99% Uptime Guarantee",
                  },
                  {
                     feature: "Websites Allowed",
                     value: "5 Websites",
                  },
                  {
                     feature: "Nameservers",
                     value: "Anycast Nameservers",
                  },
               ],
            },
         ],
      },
   ];
   return (
      <div className="pricingCommonWrap">
         <div className="pricingCommonWrapBox">
            <div className="loadTitleBox">
               <motion.div
                  ref={ref}
                  initial={{ y: 100, opacity: 0 }}
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
                  className="loadTitle"
               >
                  Choose Hosting Plan
               </motion.div>
               <motion.div
                  ref={ref}
                  initial={{ y: 100, opacity: 0 }}
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
                  className="loadSubtitle"
               >
                  Globally incubate next-generation e-services via
                  state of the art technology.
               </motion.div>
            </div>
            <Grid container spacing={4}>
               {pricingData?.map((item, index) => (
                  <Grid
                     key={index}
                     item
                     lg={4}
                     md={6}
                     sm={12}
                     xs={12}
                  >
                     <Box className="cardPricingCommonMain">
                        <Box className="recomendedPricingCommonBox">
                           {item?.recomended && (
                              <Box className="recomendedPricingCommon">
                                 recomended
                              </Box>
                           )}
                        </Box>
                        <Box className="cardPricingCommonMainTop">
                           {item?.icon}
                           <Box className="pricingCommonTitle">
                              {item?.title}
                           </Box>
                           <Box className="pricingCommonSubtitle">
                              {item?.subtitle}
                           </Box>
                           <Box className="pricingCommonPrice">
                              <span className="pricingCommonIcon">
                                 $
                              </span>{" "}
                              {item?.price}
                              <span className="pricingCommonPriceSpan">
                                 / {item?.billingCycle}
                              </span>
                           </Box>

                           <CustomGlideButton
                              whiteBg
                              title={"Add to cart"}
                           />
                        </Box>
                        <Box className="cardPricingCommonMainBottom">
                           {item?.featureData?.map((item, index) => (
                              <Box
                                 key={index}
                                 className="featurePricingCommonTitleMainCard"
                              >
                                 <Box className="featurePricingCommonTitleMain">
                                    {item?.title}
                                 </Box>
                                 {item?.features?.map(
                                    (item, index) => (
                                       <Box
                                          key={index}
                                          className="featuresPricingCommonItems"
                                       >
                                          {item?.value}
                                       </Box>
                                    )
                                 )}
                              </Box>
                           ))}
                        </Box>
                     </Box>
                  </Grid>
               ))}
            </Grid>
         </div>
      </div>
   );
};

export default CommonHostPricing;
