import setText, { appendText } from "./results.mjs";

export function timeout(){
    const wait = new Promise(( resolve, reject ) => {
        setTimeout(() => {
            let random = (Math.random()*100).toFixed(0);
            if( random % 2 === 0){
                resolve(`TimeOut Resolved ${random}`);
            } else {
                reject(`Rejected Reason ${random}`);
            }
        }, 1500)
    });

    wait.then( (text) => setText(text));
}

export function interval(){
}

export function clearIntervalChain(){
}

export function xhr(){
}

export function allPromises(){

    // all() Either all promises are resolved or one if rejected

    let catgories = axios.get(`http://localhost:3000/itemCategories`);
    let statuses = axios.get(`http://localhost:3000/orderStatuses`);
    let userTypes = axios.get(`http://localhost:3000/userTypes`);
    let addressTypes = axios.get(`http://localhost:3000/addressTypes`); // API with error

    // Promise All waits until all promises are fulfilled or any one gets rejected, which ever happens first
    Promise.all([ catgories, statuses, userTypes, addressTypes  ])
        .then(([ catResult, statResult, userTypeResult, addressResult ]) => {

            setText("");
            appendText(JSON.stringify(catResult.data));
            appendText(JSON.stringify(statResult.data));
            appendText(JSON.stringify(userTypeResult.data));
            appendText(JSON.stringify(addressResult.data));

        })
        .catch((reason) => {
            setText(reason);
        });
}

export function allSettled(){

    // allSettled() will wait till all promises are settled (fullfilled or rejected)
    // Not supported in all browsers 

    let catgories = axios.get(`http://localhost:3000/itemCategories`);
    let statuses = axios.get(`http://localhost:3000/orderStatuses`);
    let userTypes = axios.get(`http://localhost:3000/userTypes`);
    let addressTypes = axios.get(`http://localhost:3000/addressTypes`); // API with error

    /* 
        .all()  is different from .allSettled()
        All settled 
    */
    Promise.allSettled([ catgories, statuses, userTypes, addressTypes  ])
        .then((values) => {
            console.log(values);
            let results = values.map( val => {
                if(val.status === `fulfilled`){
                    return `Fulfilled: ${JSON.stringify(val.value.data[0])}`;
                }
                return `Rejected: ${JSON.stringify(val.reason.message)}`
            })

            setText(results);
        })
        .catch((reason) => {
            setText(reason);
        });
}

export function race(){ 

    // FIFO
    // Race method stops when the first promise settles 
    // use npm run secondary

    // Lets you have multiple endpoints for a single service.
    // & You want to know don't care which endpoint you get the data from as long as it is fast.
    // With Race you call all the endpoints at the same time and which ever endpoint returns
    // data first, that will be taken and other requests are dropped/ignored.

    let users = axios.get(`http://localhost:3000/users`);
    let backup = axios.get(`http://localhost:3001/users`);

    Promise.race([users, backup])
        .then( users => {
            setText(users.data);
        })
        .catch(( reason ) => setText(reason.message));

}