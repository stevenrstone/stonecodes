import React, { Component } from 'react'; // eslint-disable-line
import { SiteData } from 'react-static';
import ScTitleBar from '../components/stonecodes/title-bar';
import ScDiceButton from '../components/dice/button';

import '../components/dice/style.scss';

export default class Dice extends Component {
  constructor() {
    super();
    this.state = {
      currentRolls: [],
      history: [],
      buttons: [20, 12, 10, 8, 6, 4, 100],
    };

    this.currentDieType = null;
    this.options = {
      accumulate: false,
      dropLowest: false,
      dropHighest: false,
      d100: true,
    };
  }

  handleButtonClick(type) {
    const button = parseInt(type, 10);
    let rolls;
    let roll;
    let { history } = this.state;

    if (button === this.currentDieType || this.options.accumulate) {
      rolls = this.state.currentRolls;
    } else {
      history.push(this.state.currentRolls);
      history = history.slice(Math.max(history.length - 5, 0));
      rolls = [];
    }
    this.currentDieType = button;

    if (button === 100 && !this.options.d100) {
      roll = Math.floor(Math.random() * 9 + 1) * 10
        + Math.floor(Math.random() * 10 + 1);
    } else {
      roll = Math.floor(Math.random() * button) + 1;
    }

    rolls.push(roll);
    this.setState({ currentRolls: rolls, history });
  }

  render() {
    const renderRolls = (
      timeframe = 'current',
      currentRolls = this.state.currentRolls,
      setIndex,
    ) => (
      <React.Fragment key={setIndex}>
        <ul className={`sc-dice__${timeframe}__rolls`}>
          {currentRolls.map((roll, index) => (
            <li
              key={index}
              className={`sc-dice__${timeframe}__rolls__item`}
              data-value={roll}
            >
              {roll}
            </li>
          ))}
        </ul>
        <span className={`sc-dice__${timeframe}__total`}>
          {currentRolls.reduce((acc, roll) => acc + roll, 0)}
          <span className={`sc-dice__${timeframe}__number`}>
            {`${currentRolls.length} roll${
              currentRolls.length === 1 ? '' : 's'
            }`}
          </span>
        </span>
      </React.Fragment>
    );

    const renderHistory = () => {
      const { history } = this.state;
      return history.map((historySet, index) => renderRolls('past', historySet, index));
    };

    const renderButtons = () => {
      const { buttons } = this.state;
      return buttons.map((button, index) => (
        <ScDiceButton
          size={button}
          key={index}
          onClick={(e) => {
            e.preventDefault();
            this.handleButtonClick(button);
          }}
        />
      ));
    };

    const renderOptions = (e) => {
      const target = e.target.parentNode;
      target.classList.toggle('expanded');
    };

    return (
      <SiteData
        render={({ siteTitle }) => (
          <div className="sc-dice-container">
            <ScTitleBar
              title={siteTitle}
              show={true}
              clickOverride={() => {
                window.location = '/';
              }}
            />
            <div className="sc-dice__display">
              <div className="sc-dice__history">{renderHistory()}</div>
              <div className="sc-dice__current">{renderRolls()}</div>
            </div>
            <div className="sc-dice__options">
              {renderButtons()}
              <button
                type="button"
                className="sc-dice-button sc-dice-button--options"
                onClick={e => renderOptions(e)}
              >
                ...
              </button>
              <div className="sc-dice-more-options" />
            </div>
          </div>
        )}
      />
    );
  }
}
