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

/**
 * get a single product by ID
 * @param {number} ID number to be selected
 */

export async function getProductDetails(id) {
  const DETAILS_API_URL = API_URL + String(id);
  const response = await fetch(DETAILS_API_URL);

  if (!response.ok) {
    throw new Error("failed getting product details");
  }
}
