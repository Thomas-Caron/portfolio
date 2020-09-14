//! == Import : local (actions)
import { RETURN_SCROLL_VALUE, LOADING_FALSE } from '../actions/app';

//! == Initial state
export const initialState = {
    scrollValue: 0,
    loading: true,
};

//! == Actions to modified state
const app = (state = initialState, action = {}) => {
    switch (action.type) {
        case RETURN_SCROLL_VALUE:
            return {
                ...state,
                scrollValue: action.scrollValue,
            };
        case LOADING_FALSE:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    };
};

export default app;