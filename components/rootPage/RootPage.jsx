"use client";
import Footer from "@/components/layout/footer/Footer";
import Navbar from "@/components/layout/navbar/Navbar";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const RootPage = ({ children }) => {
   const [isMounted, setIsMounted] = useState(false);
   const dispatch = useDispatch();
   useEffect(() => {
      setIsMounted(true);
   }, []);

   // useEffect(() => {
   //    const lenis = new Lenis();
   //    function raf(time) {
   //       lenis.raf(time);
   //       requestAnimationFrame(raf);
   //    }
   //    requestAnimationFrame(raf);
   // }, []);

   return isMounted ? (
      <>
         <Navbar />
         {children}
         <Footer />
      </>
   ) : (
      <></>
   );
};

export default RootPage;
