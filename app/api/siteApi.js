"use client";

import { mainApi } from "./mainApi";

export const siteApi = mainApi.injectEndpoints({
   tagTypes: [
      "blogs",
      "blogsSingle",
      "contact",
      "siteSettings",
      "faq",
      "teams",
      "testimonial",
      "universities",
   ],
   endpoints: (builder) => ({
      getBlogs: builder.query({
         query: (params) => ({
            url: `/api/blogs`,
            params,
         }),
         providesTags: ["blogs"],
      }),
      getBlogsSingle: builder.query({
         query: (slug) => ({
            url: `/api/blogs/${slug}`,
         }),
         providesTags: ["blogsSingle"],
      }),
      postContact: builder.mutation({
         query: (data) => ({
            url: `/api/contact-us`,
            method: "POST",
            body: data,
         }),
         invalidatesTags: (result, error) =>
            error ? [] : ["contact"],
      }),

      getSiteSettings: builder.query({
         query: (params) => ({
            url: `/api/site-settings`,
            params,
         }),
         providesTags: ["siteSettings"],
      }),
      getFaq: builder.query({
         query: (params) => ({
            url: `/api/faq`,
            params,
         }),
         providesTags: ["faq"],
      }),
      getTeams: builder.query({
         query: (params) => ({
            url: `/api/our-team`,
            params,
         }),
         providesTags: ["teams"],
      }),
      getUniversities: builder.query({
         query: (params) => ({
            url: `/api/university`,
            params,
         }),
         providesTags: ["universities"],
      }),
      getUniversitiesSingle: builder.query({
         query: (slug) => ({
            url: `/api/university/${slug}`,
         }),
         providesTags: ["universities"],
      }),
      getTestimonial: builder.query({
         query: (params) => ({
            url: `/api/testimonial`,
            params,
         }),
         providesTags: ["testimonial"],
      }),
   }),
});

export const {
   useGetBlogsQuery,
   useGetUniversitiesQuery,
   useGetUniversitiesSingleQuery,
   useGetBlogsSingleQuery,
   usePostContactMutation,
   useGetSiteSettingsQuery,
   useGetFaqQuery,
   useGetTeamsQuery,
   useGetTestimonialQuery,
} = siteApi;
