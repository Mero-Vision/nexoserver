"use client";

import Case from "./caseStudy/CaseStudy";
import ChooseNexo from "./chooseNexo/ChooseNexo";
import Hero from "./heroPage/Hero";
import LBCards from "./landingBottomCards/LBCards";
import LoadBalancing from "./loadBalance/LoadBalancing";
import { default as Map } from "./map/Map";
import Pricing from "./pricing/Pricing";

const LandingPage = () => {
   return (
      <>
         <Hero />
         <Pricing />
         <LoadBalancing />
         <ChooseNexo />
         <Map />
         <Case />
         <LBCards />
      </>
   );
};

export default LandingPage;
