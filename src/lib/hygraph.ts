import { GraphQLClient } from 'graphql-request';

const hygraph = new GraphQLClient(process.env.HYGRAPH_URL ?? '');

export const fetchGql = async <T>(query: string) => hygraph.request<T>(query);
