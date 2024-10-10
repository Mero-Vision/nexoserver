import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import Image from "next/image";
import "./styles.css";
const ClientsCard = ({ data }) => {
   return (
      <div
         className={
            data?.active ? "cardContainerActive" : "cardContainer"
         }
      >
         <FormatQuoteIcon
            className={
               data?.active
                  ? "cardContainerIconActive"
                  : "cardContainerIcon"
            }
         />
         <div
            className={data?.active ? "cardDescActive" : "cardDesc"}
         >
            {data?.desc}
         </div>

         <div className={"cardImgRow"}>
            <div className={"cardImgBox"}>
               <Image
                  src={data?.img}
                  alt="img"
                  className={"cardImg"}
                  width={1000}
                  height={1000}
               />
            </div>
            <div className={"cardNameBox"}>
               <div
                  className={
                     data?.active ? "cardNameActive" : "cardName"
                  }
               >
                  {data?.name}
               </div>
               <div
                  className={
                     data?.active
                        ? "cardCountryActive"
                        : "cardCountry"
                  }
               >
                  {data?.position}
               </div>
            </div>
         </div>
      </div>
   );
};

export default ClientsCard;
