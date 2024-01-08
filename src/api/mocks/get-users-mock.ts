import { HttpResponse, graphql } from "msw";

export const getUsersMock = graphql.query("GetUsers", ({ query }) => {
  return HttpResponse.json({
    data: {
      users: [
        {
          id: 1,
          name: "Gabriel Duarte",
          email: "jds.gabrielduarte@gmail.com",
        },
      ],
    },
  });
});
