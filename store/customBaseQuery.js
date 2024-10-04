"use client";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { toast } from "react-toastify";
const baseQuery = fetchBaseQuery({
   baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
});

export const customBaseQuery = () => {
   const baseQueryWithReauth = async (args, api, extraOptions) => {
      let result = await baseQuery(args, api, extraOptions);

      console.log({ apiiiiiiiiiiiiiiii: api, result, args });
      if (
         result?.error ||
         result?.error?.status === 401 ||
         result?.error?.status === 400
      ) {
         toast.error(result?.error?.data?.message);
      }
      return result;
   };
   return baseQueryWithReauth;
};
