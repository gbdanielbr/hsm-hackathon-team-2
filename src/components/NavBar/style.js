import styled from 'styled-components'

export const NavDiv = styled.nav`
  box-shadow: 1px 4px 8px 3px rgba(255,255,255,0.28);
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 10vh;
  background: #512DA8;


  img {
    max-width: 16rem;
  }

  .nav-links {
    display: flex;

    a {
      font-size: 1.2rem;
      font-weight: bold;
      text-decoration: none;
      padding: 1rem;
      text-shadow: 0.2px 0.2px 1px rgba(102, 8, 212, 0.9);
      color: #D1C4E9;
      transition: 0.3s;

      &:hover {
        color: white;
      }
    }
  }
`
