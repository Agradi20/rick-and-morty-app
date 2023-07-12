export const ADD_FAV = "ADD-FAV";
export const REMOVE_FAV = "REMOVE-FAV";

export const addFav = (pj) => {
    return {
        type: ADD_FAV,
        payload: pj,
    };
};

export const removeFav = (id) => {
    return {
        type: REMOVE_FAV,
        payload: id,
    };
};