import { db } from './database.js';

// Solucion ingenua: cada cliente provoca una lectura independiente de facturas.
export const resolvers = {
  Query: {
    clientes: () => db.fetchAllClientes()
  },
  Cliente: {
    facturas: (cliente) => db.fetchFacturasByClienteId(cliente.id)
  }
};

export default resolvers;