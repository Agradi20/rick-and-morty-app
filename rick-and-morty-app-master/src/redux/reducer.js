import { REMOVE_FAV, ADD_FAV } from "./actions";

const initialState = {
    myFavorites: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload]
            };
            case REMOVE_FAV:
                return {
                    ...state,
                    myFavorites: state.myFavorites.filter((pj) => pj.id !== action.payload), 
                };
                default:
                    return {
                        ...state,
                    };
    }
};

export default reducer;