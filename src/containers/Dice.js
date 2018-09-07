import React, { Component } from 'react'; // eslint-disable-line
import { SiteData } from 'react-static';
import ScTitleBar from '../components/stonecodes/title-bar';
import ScDiceButton from '../components/dice/button';

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
    const renderHistory = () => {
      const { history } = this.state;
      return history.map((historySet, index) => renderRolls('past', historySet));
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

    const renderRolls = (
      timeframe = 'current',
      currentRolls = this.state.currentRolls,
    ) => (
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
        <span className={`sc-dice__${timeframe}__total`}>
          {currentRolls.reduce((acc, roll) => acc + roll, 0)}
          <span className={`sc-dice__${timeframe}__total`}>
            ({currentRolls.length} roll(s))
          </span>
        </span>
      </ul>
    );
    return (
      <SiteData
        render={({ siteTitle }) => (
          <div className="sc-container sc-dice">
            {/* Title Banner */}
            <ScTitleBar title={siteTitle} show={true} />
            <div className="sc-dice__display">
              <div className="sc-dice__history">{renderHistory()}</div>
              <div className="sc-dice__current">{renderRolls()}</div>
            </div>
            <div className="sc-dice__options">{renderButtons()}</div>
          </div>
        )}
      />
    );
  }
}
