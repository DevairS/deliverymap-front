import { ChangeEventHandler, FC } from 'react';

import { Container, TextInput, ErrorMessage, Label } from './styles';

type Props = {
  id: string;
  name: string;
  label?: string;
  value?: string;
  className?: string;
  errorMessage: string;
  placeholder?: string;
  onChange: ChangeEventHandler;
};

const Input: FC<Props> = ({
  id,
  name,
  label,
  value,
  onChange,
  className,
  placeholder,
  errorMessage,
}) => {
  return (
    <Container className={className}>
      <Label>{label}</Label>
      <TextInput
        id={id}
        name={name}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </Container>
  );
};

export default Input;
