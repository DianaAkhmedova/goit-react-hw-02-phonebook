import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem/ContactListItem';

const ContactList = ({ contacts, removeContact }) => {
  const contactsItem = contacts.map(({ id, name, number }) => (
    <ContactListItem
      key={id}
      name={name}
      number={number}
      type="button"
      onClick={() => removeContact(id)}
    />
  ));
  return <ul>{contactsItem}</ul>;
};
export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  removeContact: PropTypes.func.isRequired,
};
