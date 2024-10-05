import { Button } from "@mui/material";
import "./styles.css";

const CustomGlideButton = ({ title, onClick, bgYellow }) => {
   return (
      <div>
         <Button className={bgYellow ? "cartBtnYellow" : "cartBtn"}>
            {title}
         </Button>
      </div>
   );
};

export default CustomGlideButton;
