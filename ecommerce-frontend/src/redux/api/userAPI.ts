import { createApi, fetchBaseQuery, } from "@reduxjs/toolkit/query/react";
import { MessageResponse, UserResponse } from "../../types/api-types";
import { User } from "../../types/types";
import axios from "axios";

export const userAPI = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_SERVER}/api/v1/user/`,
    }),
    endpoints: (builder) => ({
        login: builder.mutation<MessageResponse, User>({
            query: (user) => ({
                url: "new",
                method: "POST",
                body: user,
            }),
        }),
    }),
});

export const getUser = async (id: string) => {
    try {
        console.log(`${import.meta.env.VITE_SERVER}/api/v1/user/${id}`);
        const data = await axios.get(`${import.meta.env.VITE_SERVER}/api/v1/user/${id}`)
        console.log(data);
        return data.data;
    } catch (error) {
        console.log("error in getUser", error);
        throw error;
    }
};

export const { useLoginMutation } = userAPI;