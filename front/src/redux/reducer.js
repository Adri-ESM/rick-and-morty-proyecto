// import { ADD_FAVORITES } from "./actions_types";
// import { REMOVE_FAVORITES } from "./actions_types";

const initialState = {
    myFavorites: [],
};

const rootReducer = (state=initialState, action) => {
    switch(action.type){     
        case 'ADD_FAVORITES':
            return{
                ...state,
                myFavorites: [
                    ...state.myFavorites, action.payload
                ]
            };

        case 'REMOVE_FAVORITES':
            return{
                ...state,
                myFavorites: state.myFavorites.filter (
                    (myFavorites) => myFavorites.id !== action.payload
                )
            };
            default:
                return {...state};
        };
    }

    export default rootReducer;