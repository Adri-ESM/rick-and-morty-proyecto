// import { ADD_FAVORITES } from "./actions_types";
// import { REMOVE_FAVORITES } from "./actions_types";


export const addFavorite = (id) => {
    return {
        type: 'ADD_FAVORITES',
        payload: id,
    }
}

export const removeFavorite = (id) => {
    return {
        type: 'REMOVE_FAVORITES',
        payload: id,
    }
}
    