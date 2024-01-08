import { GraphQLClient, request as graphQLRequest } from "graphql-request";

export const graphqlClient = new GraphQLClient("/graphql");

export const request = graphQLRequest;
