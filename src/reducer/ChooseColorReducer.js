const counterReducer = (data = 0, action) =>{
    console.log('Inside Reducer');
    switch(action.type){
        case 'RED':
            return data+1; 
        case 'GREEN':
            return data-1;   
    }
}
export default counterReducer;