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
        })
    })
})

export const { useLoginMutation }: any = usersApiSlice
