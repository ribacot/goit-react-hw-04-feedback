import { useState } from 'react';
import Section from './section/Section';
import ButtonFeedback from './buttons_feedback/ButtonsFeedback';
import StatisticsFeedback from './statistics_feedbeck/StatisticsFeedback';
import ExtendedStatistics from './extended_statistics/ExtendedStatistics';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const incrementFeedback = name => {
    switch (name) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () =>
    Object.values({ good, neutral, bad }).reduce(
      (total, value) => total + value,
      0
    );

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.round((good * 100) / total);
  };

  return (
    <>
      <Section title="Please leave feedback">
        <ButtonFeedback
          stateValue={{ good, neutral, bad }}
          onClick={incrementFeedback}
        ></ButtonFeedback>
      </Section>
      <Section title="Statistics">
        <StatisticsFeedback stateValue={{ good, neutral, bad }}>
          <ExtendedStatistics
            total={countTotalFeedback}
            percentag={countPositiveFeedbackPercentage}
          />
        </StatisticsFeedback>
      </Section>
    </>
  );
}
