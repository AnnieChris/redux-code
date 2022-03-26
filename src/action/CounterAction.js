export const increment =() =>{
    console.log('Inside Action');
    return{
        type : 'INCREMENT'
    };
}

export const decrement =() =>{
    return{
        type : 'DECREMENT'
    };
}