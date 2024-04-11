import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import Button from "../../ui/Button";
import styles from "./ProductDetails.module.css";
import Header from "../Header";
import { getProductDetails } from "../../services/apiStore";
import LoadingSpinner from "../../ui/LoadingSpinner";

export default function ProductDetails() {
  const { title, id } = useParams();
  console.log({ title, id });
  // access data
  const {
    data: productDetails,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["productDetails"],
    queryFn: () => getProductDetails(id),
  });

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
                Rating {productDetails.rating.rate}/{" "}
                {productDetails.rating.count}
                <span className={styles.star}>⭐</span>
              </p>
              <p className={styles.price}>$ {productDetails.price}</p>
              <p className={styles.description}>{productDetails.description}</p>
              <div className={styles.btnContainer}>
                <Button>Add to Cart</Button>
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
