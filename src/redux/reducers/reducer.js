import { DATA_AVAILABLE } from "../actions/actions" //Import the actions types constant we defined in our actions

const initialState = { data: [] };

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case DATA_AVAILABLE:
            return { ...state, data: action.data };
        default:
            return state;
    }
};


export default dataReducer;

