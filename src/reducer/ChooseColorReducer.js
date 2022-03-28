const choosecolorReducer = (color= 'none', action) =>{
    console.log("Inside Color Reducer");
    switch(action.type)
    {
        case 'RED':
            return color='Red'; 
        case 'BLUE':
            return color='Blue';
        case 'GREEN':
            return color='Green';
        case 'YELLOW':
            return color='Yellow';   
        default :
            return color='none';
        
    }
}
export default choosecolorReducer;