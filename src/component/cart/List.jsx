import PropTypes from "prop-types";
const List = ({ bookmark }) => {
  return <li className="mb-1">{bookmark.courseTitle}</li>;
};
List.propTypes = {
  bookmark: PropTypes.object.isRequired,
};
export default List;
