import PropTypes from 'prop-types';

export default function Notification({ message, total }) {
  return <p>{!total && message}</p>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};
