import styled from 'styled-components';

export const NavWrapper = styled.nav `
  background: var(--darkCyan);
  .nav-link {
    color: var(--mainWhite);
    font-size: 1.3rem;
    text-transform: uppercase !important;
  }

`;




export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  backgroun: transparent;
  border: 0.05rem solid var(--darkCyan);
  color: var(--moderateCyan);
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;

  &:hover {
    background: var(--moderateCyan);
    color: var(--mainWhite);
  }
  &:focus {
    outline: none;
  }
  
  `;