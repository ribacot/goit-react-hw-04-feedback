import React from 'react';
import Section from './section/Section';
import ButtonFeedback from './buttons_feedback/ButtonsFeedback';
import StatisticsFeedback from './statistics_feedbeck/StatisticsFeedback';
import ExtendedStatistics from './extended_statistics/ExtendedStatistics';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementFeedback = name =>
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));

  countTotalFeedback = () =>
    Object.values(this.state).reduce((total, value) => total + value, 0);

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return Math.round((this.state.good * 100) / total);
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <ButtonFeedback
            stateValue={this.state}
            onClick={this.incrementFeedback}
          ></ButtonFeedback>
        </Section>
        <Section title="Statistics">
          <StatisticsFeedback stateValue={this.state}>
            <ExtendedStatistics
              total={this.countTotalFeedback}
              percentag={this.countPositiveFeedbackPercentage}
            />
          </StatisticsFeedback>
        </Section>
      </>
    );
  }
}
