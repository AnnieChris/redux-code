const intialState = [];
const postReducer = (state = intialState, action) =>{
    
    state = action.payload;
    return state;
}
export default postReducer;