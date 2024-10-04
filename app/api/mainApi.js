"use client";

import { customBaseQuery } from "@/store/customBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";

// initialize an empty api service that we'll inject endpoints into later as needed
export const mainApi = createApi({
   baseQuery: customBaseQuery(),
   endpoints: () => ({}),
});
