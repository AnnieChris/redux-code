export const myLogger = store => {        //store next and action is the order for middleware
    return nxt =>{
        return action =>{
            console.log ('Middleware Ran..')
            return nxt(action);
        }
    }
}

