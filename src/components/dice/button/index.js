import React from 'react'; // eslint-disable-line

const ScDiceButton = ({ size, onClick }) => (
  <button type="button" onClick={onClick}>
    {size}
  </button>
);

export default ScDiceButton;
