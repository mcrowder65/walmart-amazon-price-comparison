import Hapi from "hapi";
import { graphqlHapi, graphiqlHapi } from "apollo-server-hapi";

import schema from "./data/schema";

const HOST = "localhost";
const PORT = 3000;

async function StartServer() {
  try {
    const server = new Hapi.server({
      host: HOST,
      port: PORT
    });

    await server.register({
      plugin: graphqlHapi,
      options: {
        path: "/graphql",
        graphqlOptions: {
          schema
        },
        route: {
          cors: true
        }
      }
    });
    await server.register({
      plugin: graphiqlHapi,
      options: {
        path: "/graphiql",
        graphiqlOptions: {
          schema,
          endpointURL: "/graphql"
        },
        route: {
          cors: true
        }
      }
    });
    await server.start();

    console.log(`Server running at: ${server.info.uri}`);
  } catch (error) {
    console.log(error);
  }
}

StartServer();
