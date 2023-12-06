import styled from 'styled-components';

export const Flex = styled.div`
  background-color: #d5ddf7;
  padding: 30px;
`;
export const ButtonContainer = styled(Flex)`
  min-height: 20vh;
  display: flex;
  border-radius: 8px;
  gap: 20;
  justify-content: center;
  align-items: center;
  background-color: #a2a8ba;
`;
export const StyledButton = styled.button`
  padding: 10px 15px;
  border-radius: 4px;
  color: #5f677d;
  border: none;
  font-size: 20px;
  background-color: white;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  margin: 10px;

  &:hover {
    background-color: #bdbce6;
    color: white;
  }
`;
export const TitleStyled = styled.h2`
  color: #5f677d;
`;
export const StyledCounter = styled.div`
  background-color: #5f677d;
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: start;
  justify-content: center;
  padding: 30px;
  color: white;
  font-size: 20px;
  border-radius: 8px;
`;
