import PropTypes from 'prop-types';

const ContactListItem = ({ name, number, type, onClick }) => {
  return (
    <li>
      <p>
        {name}: {number}
      </p>
      <button onClick={onClick} type={type}>
        Delete
      </button>
    </li>
  );
};

export default ContactListItem;

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
