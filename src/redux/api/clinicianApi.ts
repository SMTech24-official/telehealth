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

    getAllSpecialities: build.query({
      query: (query: any) => ({
        url: `/clinician/get-all-specialities/${query}`,
        method: "GET",
      }),
    }),
    getAllTherapeuticMethods: build.query({
      query: (query: any) => ({
        url: `/clinician/get-all-therapeutic-method/${query}`,
        method: "GET",
      }),
    }),
    getAllServiceType: build.query({
      query: (query: any) => ({
        url: `/clinician/get-all-service-type/${query}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetSingleClinicianQuery,
  useCreateUserMutation,
  useGetAllClinicianQuery,
  useGetAllSpecialitiesQuery,
  useGetAllTherapeuticMethodsQuery,
  useGetAllServiceTypeQuery,
} = authApi;
