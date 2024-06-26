import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import Button from "../../ui/Button";
import styles from "./ProductDetails.module.css";
import Header from "../Header";
import { getProductDetails } from "../../services/apiStore";
import LoadingSpinner from "../../ui/LoadingSpinner";
import { addItem } from "../cart/cartSlice";

export default function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  // access data
  const {
    data: productDetails,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["productDetails", id],
    queryFn: () => getProductDetails(id),
  });

  function handleAddToCart() {
    const { id, title, price, image } = productDetails;

    const newItem = {
      id,
      title,
      price,
      quantity: 1,
      totalPrice: price * 1,
      image,
    };
    dispatch(addItem(newItem));
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <h1>Failed gettting product details</h1>;
  }

  return (
    <>
      <Header />
      <section className={styles.productDetailsSection}>
        <div className="container">
          <div className={styles.grid}>
            <div>
              <img
                className={styles.img}
                src={productDetails.image}
                alt={productDetails.title}
              />
            </div>
            <div className={styles.productdetails}>
              <p className={styles.category}>{productDetails.category}</p>
              <h2 className={styles.title}>{productDetails.title}</h2>
              <p className={styles.rating}>
                Rating {productDetails.rating.rate}
                <span className={styles.star}>⭐</span>
              </p>
              <p className={styles.price}>$ {productDetails.price}</p>
              <p className={styles.description}>{productDetails.description}</p>
              <div className={styles.btnContainer}>
                <Button onClick={handleAddToCart}>Add to Cart</Button>
                <Link className={styles.link} to="/cart">
                  <Button>Go to Cart</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
