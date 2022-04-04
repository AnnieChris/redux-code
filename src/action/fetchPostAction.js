import axios from "axios";

export const fetchPostAction = () => {
    
    return async(dispatch) => {
        const reponse = await axios.get("https://jsonplaceholder.typicode.com/posts");
        console.log(reponse.data);
        dispatch({
            type : "FETCH_POSTS",
            payload: reponse.data
        })
       
    }
}