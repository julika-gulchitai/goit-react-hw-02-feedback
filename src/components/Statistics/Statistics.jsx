import { StyledCounter } from 'components/Feedback/Feedback.styled';
import React from 'react';

export class Statistics extends React.Component {
  render() {
    return (
      <>
        <StyledCounter>
          <div>
            Good: <span>{this.props.good}</span>
          </div>
          <div>
            Neutral: <span>{this.props.neutral}</span>
          </div>
          <div>
            Bad: <span>{this.props.bad}</span>
          </div>
          <div>
            Total: <span>{this.props.total}</span>
          </div>
          <div>
            Positive feedback: <span>{this.props.positivePercentage}</span>
          </div>
        </StyledCounter>
      </>
    );
  }
}
