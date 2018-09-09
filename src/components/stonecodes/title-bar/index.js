import React from 'react'; // eslint-disable-line

import './style.scss';

export default ({ title, show = '', clickOverride = null }) => {
  const handleClick = () => {
    if (clickOverride) {
      clickOverride();
      return;
    }
    if (typeof window !== 'undefined') {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  };
  return (
    <div className={`sc-title-bar ${show ? 'show' : ''}`} onClick={handleClick}>
      <h4 className="sc-title-bar__title">{title}</h4>
    </div>
  );
};
