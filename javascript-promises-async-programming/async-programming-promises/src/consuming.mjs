import setText, {appendText, showWaiting, hideWaiting} from "./results.mjs";

export function get() {
    axios.get("http://localhost:3000/orders/1")
    .then(({data}) => {
        // console.log(data);
        setText(JSON.stringify(data));
    });
}

export function getCatch() {
    axios.get("http://localhost:3000/orders/123")
    .then(({data}) => {
        // console.log(data);
        setText(JSON.stringify(data));
    })
    .catch((error) => setText(error));
}

export function chain() {
    axios.get("http://localhost:3000/orders/123")
    .then(({data}) => {
        // console.log(data);
        setText(JSON.stringify(data));
    })
    .catch((error) => setText(error));
}

export function chainCatch() {
    axios.get("http://localhost:3000/orders/1")
        .then(({ data }) => {
            return axios.get(`http://localhost:3000/addresses/${data.shippingAddress}`);
        })
        .then(({ data }) => {
            setText(`City: ${data.city}`);
        })
        .catch((error) => setText(error));
}

export function final() {
    showWaiting();
    axios.get("http://localhost:3000/orders/1")
        .then(({ data }) => {
            return axios.get(`http://localhost:3000/addresses/${data.shippingAddress}`);
        })
        .then(({ data }) => {
            setText(`City: ${data.city}`);
        })
        .catch((error) => setText(error))
        .finally(() => {
            setTimeout(() => {
                hideWaiting();
            }, 1500);

            setTimeout(() => {
                appendText("-- Finally called --");
            }, 1500);
            
        });
}