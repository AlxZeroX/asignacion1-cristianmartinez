import { TraidaDatos } from "../helpers/fetch";
import { types } from "../types/types";

//getps4
export const getPs4 = () => {
  return async (dispatch) => {
    const resp = await TraidaDatos('api/producto/ps4');
    const productos = await resp.json();
    dispatch(geteventos(productos));
  };
};

export const getPC = () => {
  return async (dispatch) => {
    const resp = await TraidaDatos('api/producto/pc');
    const productos = await resp.json();
    dispatch(geteventos(productos));
  };
};

//getxbox
export const getXbox = () => {
  return async (dispatch) => {
    const resp = await TraidaDatos('api/producto/xbox');
    const productos = await resp.json();
    dispatch(geteventos(productos));
  };
};

//getconsolas
export const getAll = () => {
  return async (dispatch) => {
    const resp = await TraidaDatos('api/producto/all');
    const productos = await resp.json();
    dispatch(geteventos(productos));
  };
};

const geteventos = (productos) => ({
  type: types.Datos,
  payload: productos
});


export const DatoActivo = (activo) => ({
  type: types.datoActivo,
  payload: activo
}
)