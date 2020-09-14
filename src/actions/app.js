//! ACTION TYPE
export const RETURN_SCROLL_VALUE = 'RETURN_SCROLL_VALUE';
export const LOADING_FALSE = 'LOADING_FALSE';

//! ACTION CREATOR
export const returnScrollValue = (scrollValue) => ({
    type: RETURN_SCROLL_VALUE,
    scrollValue
});
export const loadingFalse = () => ({
    type: LOADING_FALSE,
});