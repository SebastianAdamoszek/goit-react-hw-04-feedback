import React, { useState, useEffect } from 'react';
import Section from './SectionTitle/SectionTitle';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = type => {
    switch (type) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        break;
    }
  };

  const totalFeedback = good + neutral + bad;

  const positivePercentage =
    totalFeedback > 0 ? ((good / totalFeedback) * 100).toFixed(2) : 0;

  useEffect(() => {}, [good, neutral, bad]);

  return (
    <div style={{ margin: '50px 0px 0px 50px' }}>
      <Section title="Feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleFeedback}
        />
      </Section>

      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positivePercentage={positivePercentage}
        />
      </Section>

      {totalFeedback === 0 && (
        <Section title="Notification">
          <Notification message="There is no feedback" />
        </Section>
      )}
    </div>
  );
};

export default App;
