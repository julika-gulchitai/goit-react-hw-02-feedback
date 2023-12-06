import React from 'react';
import { ButtonContainer, StyledButton } from './Feedback.styled';

export class FeedbackOptions extends React.Component {
  render() {
    // const { good, neutral, bad } = this.props;
    return (
      <ButtonContainer>
        {this.props.options.map(target => (
          <StyledButton
            key={crypto.randomUUID()}
            onClick={this.props.leaveFeedback}
            name={target}
          >
            {target}
          </StyledButton>
        ))}
      </ButtonContainer>
    );
  }
}
