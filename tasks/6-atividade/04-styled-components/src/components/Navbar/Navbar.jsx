import { Button } from "../Button/Button.jsx";
import { AppleLogo } from "phosphor-react";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle.jsx";
import { ShoppingCart } from "phosphor-react";
import styled from 'styled-components';

const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  padding: 1rem;
  position: sticky;
  top: 0;
  left: 0;
  background-color: var(--bg-primary);
  box-shadow: 0 2px 4px var(--shadow);
  z-index: 50;
  backdrop-filter: blur(4px);

  a {
    padding-bottom: 5px;
    font-size: 1.2em;
    font-weight: 600;
    color: var(--text-primary);
    border-bottom: #ffffff00 2px solid;
    transition: all 0.3s ease;

    &:hover {
      color: var(--link-hover);
      border-bottom: 2px solid var(--link-hover);
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    padding: 0.75rem;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem;
  }
`;

const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    gap: 1rem;
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  list-style: none;

  li a {
    text-decoration: none;
    color: var(--text-primary);
    transition: 0.3s ease-in-out;
    font-weight: 500;

    &:hover {
      color: var(--link-hover);
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    flex-direction: row;
    gap: 1rem;
    text-align: left;
  }
`;

const Actions = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const Navbar = () => {
    return (
        <Navigation>
            <Logo>
                <AppleLogo size={32} />
                <h2>Logo</h2>
            </Logo>
            <NavList>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Sobre</a>
                </li>
                <li>
                    <a href="#">Blog</a>
                </li>
            </NavList>
            <Actions>
                <Button variant="ghost" aria-label="Ver carrinho de compras">
                    <ShoppingCart size={24} weight="fill" />
                </Button>
                <p>Tema:</p>
                <ThemeToggle />
            </Actions>
        </Navigation>
    );
};
