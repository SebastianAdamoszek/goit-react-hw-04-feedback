import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOption.module.css';


const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.buttons__box}>
      {options.map(option => (
        <button
          key={option}
          onClick={() => onLeaveFeedback(option)}
          className={`${css[option]} ${option}`}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
