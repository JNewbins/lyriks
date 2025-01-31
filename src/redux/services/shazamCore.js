import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
    reducerPath:  "shazamCoreApi",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('x-rapidapi-key', '41c999a5efmsh2a7a08555053f7bp116689jsn28ac577af119');

            return headers;
        }
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: (country_code) => {
            return {
                url: '/charts/world',
                params: { country_code }
            }
        } }),
    })
})

export const {
    useGetTopChartsQuery,
} = shazamCoreApi;