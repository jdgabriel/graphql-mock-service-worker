import { request } from "@/lib/graphql";
import { gql } from "graphql-request";

const updateUserDocument = gql`
  mutation UpdateUser($id: Int) {
    updateUser(id: $id) {
      user {
        id
        name
        email
      }
    }
  }
`;

type Data = {
  user: { id: number; name: string; email: string };
};

type Variables = {
  id: number;
  name: string;
};

export async function updateUser(variables: Variables): Promise<Data> {
  return await request("/graphql", updateUserDocument, variables);
}
