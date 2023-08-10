import React from 'react';
import PropTypes from 'prop-types';

export const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <ul className="buttons-list">
        {options.map(option => (
          <li key={option}>
            <button onClick={() => onLeaveFeedback(option)} className="buttons">
              {option}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};
