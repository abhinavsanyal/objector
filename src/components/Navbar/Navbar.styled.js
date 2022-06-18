import styled from 'styled-components';

export const NavbarWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  height: 2rem;
  color: white;
  font-size:14px;
  background-color: #4d4c5c;
  align-items: center;
  padding-bottom: 0.2rem;
`;
export const NavItem = styled.span`
  color: white;
  padding: 5px 15px;
  background-color: #4d4c5c;
  align-items: center;
  cursor: pointer;
  &:hover{
      background-color: #232023;
  }

`;
export const Logo = styled.div`
  display: flex;
  width: 12%;
  font-size: 20px;
  font-weight: 800;
  color: white;
  justify-content: center;
  font-style: normal;
  font-style: italic;
  font-style: oblique;
  font-style: oblique 10deg;
`;