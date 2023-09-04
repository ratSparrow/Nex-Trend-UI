import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://e-server-eta.vercel.app" }),
  tagTypes: ["products"],
  endpoints: () => ({}),
});
