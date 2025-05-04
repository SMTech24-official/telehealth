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

    // login
    login: build.mutation({
      query: (data: any) => {
        return {
          url: `/auth/login`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Auth"],
    }),

    // email verify
    verifyUser: build.mutation({
      query: (data: any) => {
        return {
          url: `/auth/verify-otp`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Auth"],
    }),

    // forgotten password
    forgotPassword: build.mutation({
      query: (data: any) => {
        return {
          url: `/auth/otp-generate`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Auth"],
    }),

    //reset password
    resetPassword: build.mutation({
      query: ({ token, data }: { token: string; data: any }) => {
        return {
          url: `/auth/reset-password`,
          method: "POST",
          headers: {
            Authorization: token,
          },
          body: data,
        };
      },
      invalidatesTags: ["Auth"],
    }),

    // get user profile
    getMyProfile: build.query({
      query: (id) => ({
        url: `/users/${id}`,
        method: "GET",
      }),
      providesTags: ["Auth"],
    }),
  }),
});

export const {
  useCreateUserMutation,
  useVerifyUserMutation,
  useLoginMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useGetMyProfileQuery,
} = authApi;
