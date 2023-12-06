import { TitleStyled } from 'components/Feedback/Feedback.styled';
export const Notification = ({ message }) => {
  return (
    <>
      <TitleStyled>{message}</TitleStyled>
    </>
  );
};
