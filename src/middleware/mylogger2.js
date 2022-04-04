export const myLogger2 = store => next => action => {
    console.log("Inside Second Middleware...");
    next(action);
}