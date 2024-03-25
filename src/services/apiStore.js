const API_URL = "https://fakestoreapi.com/products";

/**
 * gets product from API
 */
export async function getProducts() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed getting products");
  }

  const data = await response.json();
  return data;
}
