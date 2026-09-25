import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { createDataLoaders } from './dataloaders.js';
import { resolvers } from './resolvers-optimizado.js';
// Para probar la version ingenua, comenta la linea anterior y descomenta:
//import { resolvers } from './resolvers.js';

const typeDefs = readFileSync(
    fileURLToPath(new URL('./schema.graphql', import.meta.url)),
    'utf8'
);

const port = Number(process.env.PORT ?? 4000);
const server = new ApolloServer({ typeDefs, resolvers });
const { url } = await startStandaloneServer(server, {
    listen: { port },
    context: async () => ({ loaders: createDataLoaders() })
});
console.log(`Servidor GraphQL listo en: ${url}`);
