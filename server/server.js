import { ApolloServer, gql } from "apollo-server";

// Schema definition
const typeDefs = gql`
    schema {
        query: Query
    }
    type Query {
        greeting: String
    }
`;

// Resolve value. This object needs to mirror type definition.
const resolvers = {
  Query: {
    greeting: () => "Hello World!", // This function will be called to resolve value of greeting
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
const serverInfo = await server.listen({ port: 9000 });
console.log(`Server running at ${serverInfo.url}`);
