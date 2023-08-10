import React from 'react';
import 'modern-normalize';

import { Statistics } from './Statistics/Statistics';
import { Feedback } from './Feedback/Feedback';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

import '../styles/styles.scss';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    if (good === 0) {
      return 0;
    }
    const total = this.countTotalFeedback();
    return ((good / total) * 100).toFixed(2);
  }

  onLeaveFeedback = name => {
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <Section title="Please leave feed back">
          <Feedback
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positive}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
