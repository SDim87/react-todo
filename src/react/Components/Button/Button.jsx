import styled from 'styled-components'

export const Button = styled.button`
  transition: var(--transition);
  width: 100%;
  padding: 0 10px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 13px;
  line-height: 38px;
  white-space: nowrap;
`
export const ButtonFirst = styled(Button)`
  color: var(--base0);
  background-color: var(--blue);
  border: 2px solid var(--blue);

  &:hover,
  &:focus {
    background-color: transparent;
  }
`
export const ButtonSecond = styled(Button)`
  color: var(--base0);
  border: 2px solid var(--blue);
  background-color: transparent;
  
  &:hover,
  &:focus {
    background-color: var(--blue);
  }
`
export const ButtonThird = styled(Button)`
  color: var(--base0);
  border: 2px solid var(--red);
  background-color: var(--red);
  
  &:hover,
  &:focus {
    background-color: transparent;
  }
`
