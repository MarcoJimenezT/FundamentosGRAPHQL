

// Tipo query

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql

type UserTypeDefinition {
  name: String
  email: String
}  


type Query {
    users: [UserTypeDefinition],
  }
`;


//Data Set Users 
const users = [
  {
    name: "John",
    email: "jhon@ejemplo.com"
  },
  {
    name: "Miguel",
    email: "miguel@ejemplo.com"
  },
  {
    name: "Pedro",
    email: "pedro@ejemplo.com"
  },
  {
    name: "Balto",
    email: "balto@ejemplo.com"
  },
]
  

// Resolvers

const resolvers = {
  Query: {
    users: () => users[0], 
  }
}




// SERVIDOR

const server = new ApolloServer ({
  typeDefs,
  resolvers
})

async function iniciarApolloServer(){
  const {url} = await startStandaloneServer(server,
    {
      listen: {
        port:4000
      }
    }
  )
  
  
  console.log("App listening on ", url)
}


iniciarApolloServer();

