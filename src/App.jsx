import { useEffect } from "react";
import "./App.css";
import Bookmarks from "./component/cart/Bookmarks";
import Carts from "./component/cart/Carts";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [cartvalue, setCart] = useState({});
  useEffect(() => {
    fetch("Data.json")
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, []);
  const [rem_Credit, update_rem_Credit] = useState(20);
  const [bookmarks, SetBookmark] = useState([]);
  const HandleAddToBookmarks = (cart) => {
    const isObjectAvailable = bookmarks.find(
      (findcart) => findcart.id === cart.id
    );
    if (bookmarks.length >= 0 && isObjectAvailable) {
      toast.error("Item Already Exit");
    } else if (sumOfhr <= 20 && rem_Credit >= cart.credit) {
      const newBookMarks = [...bookmarks, cart];
      toast.success("Item Selected Successfully");

      SetBookmark(newBookMarks);
      const newhr = rem_Credit - cart.credit;
      update_rem_Credit(newhr);
    } else {
      toast.error("You can't add More than 20 credit");
    }
  };

  const sumOfhr = bookmarks.reduce((total, obj) => total + obj.credit, 0);
  const sumOfprice = bookmarks.reduce((total, obj) => total + obj.price, 0);
  return (
    <div className="bg-gray-300 p-10">
      <h1 className="text-center font-extrabold text-3xl mb-10">
        {cartvalue.Title}
      </h1>
      <div className="md:flex gap-10">
        <Carts
          cartvalue={cartvalue}
          HandleAddToBookmarks={HandleAddToBookmarks}></Carts>
        <Bookmarks
          bookmarks={bookmarks}
          sumOfhr={sumOfhr}
          sumOfprice={sumOfprice}></Bookmarks>
      </div>
      <div>
        <Toaster />
      </div>
    </div>
  );
}

export default App;
