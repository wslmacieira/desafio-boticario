/**
 * Tipo que representa o compra.
 */
export interface Compra  {
  _id: string,
  codigo: string;
  valor: number;
  status: string;
  cashback: number;
  total: number;
  date: string;
};

