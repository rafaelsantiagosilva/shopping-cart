export default async function fetchProdutos(query) {
     const url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
     
     const response = await fetch(url);
     const { results } = await response.json();

     return results;
}