import PropTypes from 'prop-types';
import { ContactItem, ContactInfo, RemoveBtn } from './ContactListItem.styled';

const ContactListItem = ({ name, number, type, onClick }) => {
  return (
    <ContactItem>
      <ContactInfo>
        {name}: {number}
      </ContactInfo>
      <RemoveBtn onClick={onClick} type={type}>
        Delete
      </RemoveBtn>
    </ContactItem>
  );
};

export default ContactListItem;

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
