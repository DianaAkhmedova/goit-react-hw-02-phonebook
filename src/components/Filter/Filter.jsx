import PropTypes from 'prop-types';

const Filter = ({ filterValue, handleChangeFilter }) => {
  return (
    <form>
      <label>
        Find contacts by name
        <input
          type="text"
          name="contactName"
          value={filterValue}
          placeholder="Enter name"
          onChange={handleChangeFilter}
        />
      </label>
    </form>
  );
};
export default Filter;

Filter.propTypes = {
  filterValue: PropTypes.string,
  handleChangeFilter: PropTypes.func,
};
