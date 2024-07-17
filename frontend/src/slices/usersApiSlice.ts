import { apiSlice } from "./apiSlice";

const USERS_URL = '/api/users'

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credential) => ({
                url: `${USERS_URL}/auth`,
                method: 'POST',
                body: credential,
            })
        }),
        register: builder.mutation({
            query: (credential) => ({
                url: `${USERS_URL}`,
                method: 'POST',
                body: credential,
            })
        }),
        logout: builder.mutation({
            query: () => ({
                url: `${USERS_URL}/logout`,
                method: 'POST',
            })
        }),
    })
})

export const { useLoginMutation, useLogoutMutation, useRegisterMutation }: any = usersApiSlice
