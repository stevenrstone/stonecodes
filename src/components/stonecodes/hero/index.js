import React from 'react'; // eslint-disable-line

import './style.scss';

export default ({ data }) => (
  /* stylelint-disable */
  <div
    className="sc-hero"
    style={{
      backgroundImage: `url('${data.background}')`,
    }}
    title={data.backgroundAlt}
  >
    {/* Title */}
    <h1 className="sc-hero__title">{data.title}</h1>
    {/* Subtitle */}
    <h3 className="sc-hero__subtitle">{data.subtitle}</h3>
    {/* Copy */}
    <p className="sc-hero__copy">{data.description}</p>
  </div>
);
