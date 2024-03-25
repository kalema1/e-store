const API_URL = "https://fakestoreapi.com/products";

/**
 * gets product from API
 * @throws on faliling to fetch data
 */
export async function getProducts() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed getting products");
  }

  const data = await response.json();
  return data;
}
