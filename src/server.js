// 환경변수 불러오기
require("dotenv").config()
import { GraphQLServer } from "graphql-yoga";

// 모든 설정값들은 env에 추가해놓으면 좋다.
const PORT = process.env.PORT || 4000;

// type definition
const typeDefs = `
    type Query{
        hello: String!
    }
`;

// resolvers
const resolvers = {
    Query: {
        hello: () => "Hi"
    }
};

const server = new GraphQLServer({ typeDefs, resolvers});

server.start({port: PORT}, ()=> 
    console.log(`Server running on http://localhost:${PORT}`)
);