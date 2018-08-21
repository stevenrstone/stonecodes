import React, { Component } from 'react'; // eslint-disable-line
import { SiteData, RouteData } from 'react-static';
import ScTitleBar from '../components/stonecodes/title-bar';
import ScHero from '../components/stonecodes/hero';
import ScPortfolio from '../components/stonecodes/portfolio';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      titleBar: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 200) {
        this.setState({
          titleBar: true,
        });
      } else {
        this.setState({
          titleBar: false,
        });
      }
    });
  }

  render() {
    return (
      <SiteData
        render={({ siteTitle }) => (
          <RouteData
            render={homeData => (
              <div className="sc-container">
                {/* Title Banner */}
                <ScTitleBar title={siteTitle} show={this.state.titleBar} />
                {/* Hero */}
                <ScHero data={homeData.hero} />
                {/* Title 2 */}
                <h3 className="sc-title">{homeData.title2}</h3>
                <p className="sc-subtitle">{homeData.subtitle2}</p>
                {/* Professional Work */}
                <ScPortfolio data={homeData.portfolio} />
                {/* Title 3 */}
                <h3 className="sc-title">{homeData.title3}</h3>
                <p className="sc-subtitle">{homeData.subtitle3}</p>
                <ScPortfolio data={homeData.personal} />
              </div>
            )}
          />
        )}
      />
    );
  }
}
