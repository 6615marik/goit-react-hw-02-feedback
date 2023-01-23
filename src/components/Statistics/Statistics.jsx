import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ good, neutral, bad, sum, positivePercentage }) => (
  <div>
    <ul className={css.statList}>
      <li>
        Good: <span>{good}</span>
      </li>
      <li>
        Neutral: <span>{neutral}</span>
      </li>
      <li>
        Bad: <span>{bad}</span>
      </li>
      <li>
        Total: <span>{sum}</span>
      </li>
      <li>
        Positive feedback: <span>{positivePercentage}%</span>
      </li>
    </ul>
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  sum: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
