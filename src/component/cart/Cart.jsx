import { BsCurrencyDollar } from "react-icons/bs";
import { BiBookOpen } from "react-icons/bi";
import PropTypes from "prop-types";
const Cart = ({ cart, HandleAddToBookmarks }) => {
  const { img, courseTitle, description, price, credit } = cart;
  return (
    <div className="bg-white p-5 rounded-md text-start">
      <img className="mx-auto block w-full" src={img} alt="" />
      <h2 className="text-2xl font-semibold my-3">{courseTitle}</h2>
      <p className="text-justify">{description}</p>
      <div className="grid grid-cols-2 gap-2 font-medium sm:text-lg md:text-sm lg:text-lg my-2">
        <p className="flex items-center">
          <BsCurrencyDollar></BsCurrencyDollar>
          Price :{price}
        </p>
        <p className="flex items-center">
          <BiBookOpen></BiBookOpen> Credit :{credit + " " + "hr"}
        </p>
      </div>
      <button
        className="p-2 bg-blue-700 w-full rounded-lg text-white font-semibold"
        onClick={() => HandleAddToBookmarks(cart)}>
        Select
      </button>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.object.isRequired,
  HandleAddToBookmarks: PropTypes.func.isRequired,
};

export default Cart;
