import { MENOS, MAIS } from "./actionsTypes";
export const diminuir = (numero) => {
  return {
    type: MENOS,
    numero,
  };
};
export const aumentar = (numero) => {
  return {
    type: MAIS,
    numero,
  };
};
