/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "./baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //create user
    createUser: build.mutation({
      query: (data: any) => {
        return {
          url: `/users/create`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Auth"],
    }),

    getAllClinician: build.query({
      query: (query: any) => ({
        url: "/clinician/get-all",
        method: "GET",
        params: query,
      }),
      providesTags: [],
    }),

    getSingleClinician: build.query({
      query: (id) => ({
        url: `/clinician/get-single/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetSingleClinicianQuery,
  useCreateUserMutation,
  useGetAllClinicianQuery,
} = authApi;
