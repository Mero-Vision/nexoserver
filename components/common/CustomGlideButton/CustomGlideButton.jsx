import { Button } from "@mui/material";
import "./styles.css";

const CustomGlideButton = ({ title, onClick, bgYellow, whiteBg }) => {
   // Determine the className using a switch case
   const getClassName = () => {
      switch (true) {
         case bgYellow:
            return "cartBtnYellow";
         case whiteBg:
            return "cartBtnWhite";
         default:
            return "cartBtn";
      }
   };

   return (
      <div>
         <Button className={getClassName()} onClick={onClick}>
            {title}
         </Button>
      </div>
   );
};

export default CustomGlideButton;
