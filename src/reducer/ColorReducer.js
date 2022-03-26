const intialState = {
   /* color:null  */
    color : 'pink' 
    /* color : [] */
}

const ColorReducer = (state = intialState, action) =>{
    const newState = {...state};
    switch(action.type){
        case 'CHANGE_COLOR':
            newState.color = action.payload;
            break;
        /* case 'REDUCE_COLOR':
            newState.color = action.payload;
            break; */
        default:
            return newState;
    }
    return newState;
}
export default ColorReducer;

// take an array of colors as your state
// add values to the array whaen you check the checkbox
//use filter method to remove values when the checkbox is unchecked