import PropTypes from "prop-types";
import List from "./List";
const Bookmarks = ({ bookmarks, sumOfhr, sumOfprice }) => {
  return (
    <div className="w-1/3 bg-white p-5 rounded-md">
      <h3 className="text-lg font-bold text-blue-700 mb-5">
        Credit Hour Remaining <span>{20 - sumOfhr}</span> hr
      </h3>
      <hr />
      <h3 className="text-lg font-bold">Course Name:</h3>
      <ol className="text-base text-gray-500  p-5 list-decimal">
        {bookmarks?.map((bookmark, indx) => (
          <List key={indx} bookmark={bookmark}></List>
        ))}
      </ol>
      <hr />
      <h4 className="font-medium mb-5">
        Total Credit Hour: <span>{sumOfhr}</span> hr
      </h4>
      <hr />
      <h4 className="font-semibold">
        Total Price : <span>{sumOfprice}</span> USD
      </h4>
      {/* <Toaster /> */}
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  sumOfprice: PropTypes.number.isRequired,
  sumOfhr: PropTypes.number.isRequired,
};
export default Bookmarks;
