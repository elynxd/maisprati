import styled from 'styled-components';

const ErrorMessage = styled.div`
  background-color: #fee;
  border: 1px solid #fcc;
  color: #c33;
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem;
  text-align: center;
  font-weight: 500;
`;

export const ErrorMsg = ({ message = "An error occurred" }) => {
  return <ErrorMessage>{message}</ErrorMessage>;
};
