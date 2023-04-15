import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <>
      {total ? (
        <ul className={css.statisticsList}>
          <li>Good: {good ? good : 0}</li>
          <li>Neutral: {neutral ? neutral : 0}</li>
          <li>Bad: {bad ? bad : 0}</li>
          <li>Total: {total ? total : 0}</li>
          <li>
            Positive feedback:{' '}
            {positivePercentage ? Math.round(positivePercentage) : 0}%
          </li>
        </ul>
      ) : null}
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
