import React, { Component } from 'react'; // eslint-disable-line

import './style.scss';

export default class ScPortfolio extends Component {
  constructor() {
    super();
    this.interval = null;
  }

  render() {
    const renderPortfolioSections = () => this.props.data.map(section => (
        <div className="sc-portfolio__section" key={section.title} tabIndex="0">
          <div
            className="sc-portfolio__section__background"
            style={{ backgroundImage: `url('${section.image}')` }}
          />
          <div className="sc-portfolio__section__foreground">
            <h4 className="sc-portfolio__section__title">{section.title}</h4>
            <p className="sc-portfolio__section__description">
              {section.subtitle}
            </p>
            <p className="sc-portfolio__section__description">
              {section.moreInfo}
            </p>
            {section.cta && (
              <a
                href={section.cta.href}
                className="sc-portfolio__section__link"
              >
                {section.cta.copy}
              </a>
            )}
          </div>
        </div>
    ));

    // const handleMouseOver = () => {
    //   const newInterval = window.setInterval(() => {
    //     console.log('logging');
    //   }, Math.floor(Math.random() * Math.floor(125)));
    //   this.interval = newInterval;
    // };

    // const handleMouseOut = () => {
    //   window.clearInterval(this.interval);
    //   this.interval = null;
    // };

    return (
      <div
        className="sc-portfolio"
        // onMouseEnter={handleMouseOver}
        // onMouseLeave={handleMouseOut}
      >
        {/* Flex container */}
        <div className="sc-portfolio__flex">{renderPortfolioSections()}</div>
      </div>
    );
  }
}
