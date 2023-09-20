import Cart from "./Cart";
import PropTypes from "prop-types";
const Carts = ({ cartvalue, HandleAddToBookmarks }) => {
  // console.log(typeof cartvalue);
  const { About } = cartvalue;

  return (
    <div className="md:w-2/3">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {About?.map((cart) => (
          <Cart
            key={cart.id}
            cart={cart}
            HandleAddToBookmarks={HandleAddToBookmarks}></Cart>
        ))}
      </div>
    </div>
  );
};
Carts.propTypes = {
  cartvalue: PropTypes.object.isRequired,
  HandleAddToBookmarks: PropTypes.func.isRequired,
};
export default Carts;
