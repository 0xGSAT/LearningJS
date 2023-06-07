import setText , {appendText} from './results.mjs';

/*
    - Async:
        It makes a function into a Promise
        The function then returns just like a function, i.e. The return value will be

    - Await:
        Must be used inside an async function 
        Only blocks current function but not the calling functions  
*/

export async function get(){
    const { data } = await axios.get("http://localhost:3000/orders/1");
    setText(JSON.stringify(data));
}

export function getCatch(){
}

export function chain(){
}

export function concurrent(){
}

export function parallel(){
}