import DataLoader from 'dataloader';
import { db } from './database.js';

const batchFacturas = (clienteIds) => db.fetchFacturasByClienteIdsBatch(clienteIds);

export const createDataLoaders = () => ({
  facturasPorCliente: new DataLoader(batchFacturas)
});

export default createDataLoaders;