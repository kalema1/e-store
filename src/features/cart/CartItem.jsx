import UpdateCartItem from "./UpdateCartItem";

export default function CartItem({ Product }) {
  return (
    <li>
      <div>
        <img src={Product.image} alt={Product.title} />
      </div>
      <div>
        <h2>{Product.title}</h2>
        <UpdateCartItem />
      </div>
    </li>
  );
}
