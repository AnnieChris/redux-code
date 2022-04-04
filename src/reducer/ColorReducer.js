const intialState = {
    color : []
}

const ColorReducer = (state = intialState, action) =>{
    const newState = {...state};
    
    switch(action.type){
        case 'CHANGE_COLOR':
            console.log('State about to change...');
            newState.color = action.payload;
            break; 
        case 'DELETE_COLOR':
            console.log('State about to change...');
            newState.color = action.payload;
            break;
        default:
            return newState;
    }
    console.log('NewState',newState);
    return newState;    
}
export default ColorReducer;

// take an array of colors as your state
// add values to the array whaen you check the checkbox
//use filter method to remove values when the checkbox is unchecked