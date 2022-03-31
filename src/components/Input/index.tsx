import { ChangeEventHandler, FC } from 'react';

import { Container, TextInput, ErrorMessage, Label } from './styles';

type Props = {
  id: string;
  name: string;
  type: string;
  label?: string;
  value?: string;
  className?: string;
  errorMessage?: string;
  placeholder?: string;
  onChange: ChangeEventHandler;
};

const Input: FC<Props> = ({
  id,
  name,
  type,
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
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </Container>
  );
};

export default Input;
