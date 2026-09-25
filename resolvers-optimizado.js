import { db } from './database.js';

export const resolvers = {
  Query: {
    clientes: () => db.fetchAllClientes()
  },
  Cliente: {
    facturas: (cliente, _args, contextValue) =>
      contextValue.loaders.facturasPorCliente.load(cliente.id)
  }
};

export default resolvers;