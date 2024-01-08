import { request } from "@/lib/graphql";
import { gql } from "graphql-request";

const getUsersDocument = gql`
  query GetUsers {
    users {
      name
      email
    }
  }
`;

type Data = {
  users: Array<{ id: number; name: string; email: string }>;
};

export async function getUsers(): Promise<Data> {
  return await request("/graphql", getUsersDocument);
}
