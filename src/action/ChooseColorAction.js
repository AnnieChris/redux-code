export const increment =() =>{
    console.log('Inside Action');
    return{
        type : 'RED'
    };
}

export const decrement =() =>{
    return{
        type : 'GREEN'
    };
}