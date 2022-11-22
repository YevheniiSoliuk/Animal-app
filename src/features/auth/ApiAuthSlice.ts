import {apiSlice} from "../../api/apiSlice";

const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: credentials => ({
        url: "/user/login",
        method: "POST", 
        body: { ...credentials }
      })
    }),
    signup: builder.mutation({
      query: credentials => ({
        url: "/user/signup",
        method: "POST",
        body: { ...credentials }
      })
    })
  })
})

export const {
  useLoginMutation,
  useSignupMutation,
} = authApiSlice;