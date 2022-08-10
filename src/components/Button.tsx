import { ReactNode } from 'react';
import styled from 'styled-components';

interface ButtonProps {
  color: 'blue' | 'orange' | 'cherry';
  children?: ReactNode;
}

const Button = ({ color, children }: ButtonProps) => {
  return <StyledButton color={color}>{children}</StyledButton>;
};

const StyledButton = styled.button<ButtonProps>`
  padding: 8px 20px;
  cursor: pointer;
  border: none;
  border-radius: 20px;
  font-weight: bold;
  color: #fff;
  background-color: ${props => props.theme.color[props.color]};
`;

export default Button;
