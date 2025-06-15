// js
// react
// third
// own

const URL_CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';

// get fact cat.
export const getRandomFact = async () => {
    const response = await fetch(URL_CAT_ENDPOINT_RANDOM_FACT);
    const data = await response.json();
    const { fact } = data;
    return fact;
}