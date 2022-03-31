import styled from 'styled-components';

export const Container = styled.div`
  flex-direction: column;
`;

export const TextInput = styled.input`
  border: 1px solid lightgray;
  border-radius: 5px;
  height: 45px;
  padding: 0 10px;
  width: 100%;
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.error};
  margin: 0;
`;

export const Label = styled.label`
  display: block;
  font-size: 16px;
  font-weight: normal;
`;
