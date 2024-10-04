"use client";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./ToastStyles.css";

export default function customToaster({ type, message }) {
   toast[
      type?.toLowerCase() === "danger" ? "error" : type?.toLowerCase()
   ](message || "Success", {
      position: "bottom-right",
      className: "custom-toast", // Use the custom CSS class
   });
}
