// js 
// react
// third
// own

// get url img of cat with firstWord.
export const getImgCatUrl = ({firstWord}) => {
    return fetch(`https://cataas.com/cat/says/${firstWord}?fontSize=100&fontColor=red&json=true`)
        .then(res => {
            if (!res.ok) {
                // error: response -> status_code !== 200 Ok...
                throw new Error("Error fetching fact.");
            }
            return res.json();
        })
        .then(data => {
            const { url } = data;
            return url;
        }).catch(error => {
            // error: request -> url mal o status_code === (400, ..., 500, ...).
            console.log('error: ', error);
        });
}