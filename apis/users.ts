import { API, graphqlOperation } from "aws-amplify";
import { ListUsersQuery } from "../src/API";
import { listUsers } from "../src/graphql/queries";
import { GraphQLResult } from "@aws-amplify/api-graphql";

export const fetchUsers = async () => {
  try {
    const data = (await API.graphql(
      graphqlOperation(listUsers)
    )) as GraphQLResult<ListUsersQuery>;

    return data;
  } catch (error) {
    console.log(error);
  }
};
