import { HttpResponse, graphql } from "msw";

export const updateUserMock = graphql.mutation(
  "UpdateUser",
  ({ query, variables }) => {
    console.log({ variables });
    return HttpResponse.json({
      data: {
        user: {
          id: 1,
          name: variables.name,
          email: "jds.gabrielduarte@gmail.com",
        },
      },
    });
  }
);
