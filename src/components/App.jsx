import { Component } from 'react';

import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  handleClick = e => {
    const { name } = e.target;
    this.setState(state => ({ [name]: state[name] + 1 }));
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const sum = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleClick}
          />
          {sum === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              sum={sum}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </div>
    );
  }
}
