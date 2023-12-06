import { StyledCounter } from 'components/Feedback/Feedback.styled';
import React from 'react';

export class Statistics extends React.Component {
  render() {
    return (
      <>
        <StyledCounter>
          <li>
            Good: <span>{this.props.good}</span>
          </li>
          <li>
            Neutral: <span>{this.props.neutral}</span>
          </li>
          <li>
            Bad: <span>{this.props.bad}</span>
          </li>
          <li>
            Total: <span>{this.props.total}</span>
          </li>
          <li>
            Positive feedback: <span>{this.props.positivePercentage}</span>
          </li>
        </StyledCounter>
      </>
    );
  }
}
