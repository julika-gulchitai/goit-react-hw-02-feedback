import React from 'react';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { Section } from './Section';
import { Flex } from './Feedback/Feedback.styled';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = target => {
    this.setState(prevState => ({ [target]: prevState[target] + 1 }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = total => {
    return ((this.state.good * 100) / total).toFixed(1) + '%';
  };

  render() {
    const { good, neutral, bad } = this.state;
    console.log(this.state);
    const total = this.countTotalFeedback();

    const arrFeedback = ['Good', 'Neutral', 'Bad'];
    return (
      <div>
        <Flex>
          <Section title="Please leave feadback">
            <FeedbackOptions
              options={arrFeedback}
              leaveFeedback={this.handleClick}
            />
            {total ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                // countTotalFeedback={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage(
                  good,
                  total
                )}
              />
            ) : (
              <Notification message="There is no feedback" />
            )}
          </Section>
        </Flex>
      </div>
    );
  }
}
