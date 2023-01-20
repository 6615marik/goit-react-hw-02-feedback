import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optikey = Object.keys(options);
  return optikey.map(options => {
    return (
      <button
        key={options}
        type="button"
        className={css.Btn}
        name={options}
        onClick={onLeaveFeedback}
      >
        {options}
      </button>
    );
  });
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
