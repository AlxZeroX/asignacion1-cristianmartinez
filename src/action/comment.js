import { types } from "../types/types";
import { TraidaDatos } from "../helpers/fetch";

export const getComments = () => {
  return async (dispatch) => {
    const resp = await TraidaDatos(`api/comments/`, {}, "GET");
    const body = await resp.json();

    if (body.ok) {
      dispatch(traerComentario(body.comment));
    }
  };
};

export const getCommentsImg = (id) => {
  return async (dispatch) => {
    const resp = await TraidaDatos(`api/comments/${id}`, {}, "GET");
    const body = await resp.json();

    if (body.ok) {
      dispatch(commentActivo(body.commentImg));
    }
  };
};

export const traerComentario = (comments) => ({
  type: types.traerComentario,
  payload: comments,
});

export const EliminarComment = () => ({
  type: types.EliminarComentarioActivo,
});

export const commentActivo = (commentActivo) => ({
  type: types.commentActivo,
  payload: commentActivo,
});

export const AgregarComment = (comments) => ({
  type: types.agregarComment,
  payload: comments,
});

export const postComments = (
  id,
  qualify,
  comment,
  date,
  user,
  uid,
) => {
  return async (dispatch) => {
    const resp = await TraidaDatos(
      `api/comments/${id}`,
      { qualify, comment, date, user, uid },
      "POST"
    );
    const body = await resp.json();

    if (body.ok) {
      dispatch(putCalificacion(id));
      dispatch(getComments());
      dispatch(getCommentsImg(id));    
    }
  };
};

const putCalificacion = ( id ) => {
  return async (dispatch) => {
    const commentImage = await TraidaDatos(`api/comments/${id}`, {}, "GET");
    const comment = await commentImage.json();

    const { commentImg } = comment;
    const calificacion = commentImg.map(
      (qualify) => (qualify = qualify.qualify)
      );
      const count = calificacion.length;
      let suma = 0;
      
      for (let i = 0; i < count; i++) {
        suma += calificacion[i];
      }
      
      const commentcalificacion = Math.round(suma / count);


   await TraidaDatos(`api/comments/${id}`,{commentcalificacion},"PUT");


 
    dispatch(ActualizarCalificaciones(commentcalificacion));

  };
};

export const ActualizarCalificaciones=(commentcalificacion)=>({
  type: types.Actualizar,
  payload:commentcalificacion
}
)