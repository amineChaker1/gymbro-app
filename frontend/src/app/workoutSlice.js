import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const workoutSlice = createApi({
  reducerPath: "workout",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://rachidgymbro.onrender.com/workouts",
  }),
  endpoints: (builder) => ({
    getWorkouts: builder.query({
      query: () => " ",
    }),
    postWorkout: builder.mutation({
      query: (data) => ({
        url: " ",
        method: "POST",
        body: data,
      }),
    }),
    deleteWorkout: builder.mutation({
      query: (data) => ({
        url: `/${data}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetWorkoutsQuery,
  usePostWorkoutMutation,
  useDeleteWorkoutMutation,
} = workoutSlice;
