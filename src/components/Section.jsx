import React from 'react';
import { TitleStyled } from './Feedback/Feedback.styled';

export class Section extends React.Component {
  render() {
    const { title, children } = this.props;
    return (
      <>
        {title && <TitleStyled>{title}</TitleStyled>}
        <div>{children}</div>
      </>
    );
  }
}
