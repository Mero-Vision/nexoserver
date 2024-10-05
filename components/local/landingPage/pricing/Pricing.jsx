import CustomGlideButton from "@/components/common/CustomGlideButton/CustomGlideButton";
import DnsOutlinedIcon from "@mui/icons-material/DnsOutlined";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import { Box, Grid } from "@mui/material";
import "./styles.css";
const Pricing = () => {
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
      <div className="background-container">
         <div className="pricingWrap">
            <div className="pricingWrapBox">
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
                        <Box className="cardMain">
                           <Box className="recomendedBox">
                              {item?.recomended && (
                                 <Box className="recomended">
                                    recomended
                                 </Box>
                              )}
                           </Box>
                           <Box className="cardMainTop">
                              {item?.icon}
                              <Box className="pricingTitle">
                                 {item?.title}
                              </Box>
                              <Box className="pricingSubtitle">
                                 {item?.subtitle}
                              </Box>
                              <Box className="pricingPrice">
                                 <span className="pricingIcon">
                                    $
                                 </span>{" "}
                                 {item?.price}
                                 <span className="pricingPriceSpan">
                                    / {item?.billingCycle}
                                 </span>
                              </Box>

                              <CustomGlideButton
                                 whiteBg
                                 title={"Add to cart"}
                              />
                           </Box>
                           <Box className="cardMainBottom">
                              {item?.featureData?.map(
                                 (item, index) => (
                                    <Box
                                       key={index}
                                       className="featureTitleMainCard"
                                    >
                                       <Box className="featureTitleMain">
                                          {item?.title}
                                       </Box>
                                       {item?.features?.map(
                                          (item, index) => (
                                             <Box
                                                key={index}
                                                className="featuresItems"
                                             >
                                                {item?.value}
                                             </Box>
                                          )
                                       )}
                                    </Box>
                                 )
                              )}
                           </Box>
                        </Box>
                     </Grid>
                  ))}
               </Grid>
            </div>
         </div>
      </div>
   );
};

export default Pricing;
