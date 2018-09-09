import React from 'react'; // eslint-disable-line

import './style.scss';

const ScDiceButton = ({ size, onClick }) => (
  <button type="button" onClick={onClick} className="sc-dice-button">
    {size}
  </button>
);

export default ScDiceButton;
