import { actions } from "../actions";

const reducer = (state, action) => {
    switch (action.type) {
        case actions.setFavorite:
            return {
                ...state,
                mylist: [...state.mylist, action.payload],
            };
        case actions.deleteFavorite:
            return {
                ...state,
                mylist: state.mylist.filter(
                    (item) => item.id !== action.payload
                ),
            };
        default:
            return state;
    }
};

export default reducer;
