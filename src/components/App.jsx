import { Component } from 'react';
import { Container } from 'components/App.styled';
import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    const { name } = e.target;
    // console.log(e.target);
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });

    // console.log(Object.keys(this.state));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    const totalFeedback = good + neutral + bad;

    return totalFeedback;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;

    const PositiveFeedbackPercentage = Math.round(
      (good * 100) / this.countTotalFeedback()
    );

    return PositiveFeedbackPercentage;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        {total > 0 ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Container>
    );
  }
}
