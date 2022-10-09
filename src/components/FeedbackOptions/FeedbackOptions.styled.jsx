import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 8px;
  display: inline-flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Button = styled.button`
  padding: 4px 8px;

  font-size: 16px;
  text-transform: capitalize;

  border-radius: 4px;
  background-color: #fff;
  border: none;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);

  transition: background-color 250ms linear;

  &:hover,
  &:focus {
    background-color: #e2e2e2;
  }
`;
