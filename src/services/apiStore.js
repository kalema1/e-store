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
 * @param {number} productId number to be selected
 */

export async function getProductDetails(productId) {
  const DETAILS_API_URL = `${API_URL}/${productId}`;
  const response = await fetch(DETAILS_API_URL);

  if (!response.ok) {
    throw new Error("failed getting product details");
  }

  const data = await response.json();
  return data;
}
