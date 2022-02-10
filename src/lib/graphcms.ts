import { GraphQLClient } from 'graphql-request';

const graphcms = new GraphQLClient(process.env.GRAPHCMS_URL ?? '');

export const fetchGql = async <T>(query: string) => graphcms.request<T>(query);
