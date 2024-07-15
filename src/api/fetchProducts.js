export default async function fetchProducts(query) {
     const url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
     
     const response = await fetch(url);
     const data = await response.json();

     return data.results;
}