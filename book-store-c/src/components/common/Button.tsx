import { ButtonHTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import { ButtonSchema, ButtonSize } from '../../style/theme';
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size: ButtonSize;
  scheme: ButtonSchema;
  disabled?: boolean;
  isLoading?: Boolean;
}
const ButtonStyle = styled.button<Omit<Props, 'children'>>`
  font-size: ${({ theme, size }) => theme.button[size].fontSize};
  padding: ${({ theme, size }) => theme.button[size].padding};
  color: ${({ theme, scheme }) => theme.buttonScheme[scheme].color};
  background-color: ${({ theme, scheme }) =>
    theme.buttonScheme[scheme].backgroundColor};
  border: 0;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  cursor: ${({ disabled }) => (disabled ? 'none' : 'pointer')};
`;

const Button = ({
  children,
  size,
  scheme,
  disabled,
  isLoading,
  ...props
}: Props) => {
  //spread연산자로 받아오게 되면 어떤 값이 들어오고 안들어오는지 파악하기 힘들어 코드가 길어지지만 props의 name을 작성하는것이 훨씬 가독성있따
  return (
    <ButtonStyle
      size={size}
      scheme={scheme}
      disabled={disabled}
      isLoading={isLoading}
      {...props}
    >
      {children}
    </ButtonStyle>
  );
};

export default Button;
