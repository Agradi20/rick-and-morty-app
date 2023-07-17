import axios from "axios";
export const ADD_FAV = "ADD-FAV";
export const REMOVE_FAV = "REMOVE-FAV";


export const addFav = (character) => async (dispatch) => {
   try {
      const endpoint = 'http://localhost:3001/rickandmorty/fav';
      const response = await axios.post(endpoint, character);
      const data = response.data
      return dispatch({
         type: ADD_FAV,
         payload: data,
      });
   } catch (error) {
      console.log(error.message)
   }
   //  const endpoint = 'http://localhost:3001/rickandmorty/fav';
   //  return (dispatch) => {
   //     axios.post(endpoint, character).then(({ data }) => {
   //        return dispatch({
   //           type: ADD_FAV,
   //           payload: data,
   //        });
   //     });
   //  };
};

export const removeFav = (id) => async (dispatch) => {
   try {
      const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
      const response = await axios.delete(endpoint)
      const data = response.data;
      return dispatch({
                   type: REMOVE_FAV,
                   payload: data,
                });
   } catch (error) {
      console.log(error.message)
   }
   // const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
   // return (dispatch) => {
   //    axios.delete(endpoint).then(({ data }) => {
   //       return dispatch({
   //          type: REMOVE_FAV,
   //          payload: data,
   //       });
   //    });
   // };
};