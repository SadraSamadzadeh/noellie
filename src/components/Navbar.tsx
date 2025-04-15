import styled from "styled-components"
import { Link, useLocation } from 'react-router-dom';
interface NavItemProps {
    $active: boolean;
  }
  interface NavMenuItemProps {
    to: string;
    children: React.ReactNode;
  }
  const NavMenuItem: React.FC<NavMenuItemProps> = ({ to, children }) => {
    const location = useLocation();
    const isActive = location.pathname === to;
  
    return (
      <Item to={to} $active={isActive}>
        {children}
      </Item>
    );
  };
function Navbar({ isDark, toggleTheme } : {isDark: boolean, toggleTheme: () => void}) {
    return (
        <MainDiv>
            <div>
            <LogoName>Noëlle</LogoName>
            </div>
            <div>
                <NavMenuItem to="/">Home</NavMenuItem>
                <NavMenuItem to="/about">About</NavMenuItem>
                <NavMenuItem to="/skills">Skills</NavMenuItem>
                <NavMenuItem to="/portfolio">Portfolio</NavMenuItem>
                <NavMenuItem to="/contact">Contact</NavMenuItem>
                <ThemeToggle onClick={toggleTheme}>{isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}</ThemeToggle>
            </div>
        </MainDiv>
    )
}


const ThemeToggle = styled.button`
  padding: 8px 12px;
  font-size: 0.9rem;
  cursor: pointer;
  background: none;
  border: 1px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  border-radius: 4px;
  transition: background 0.3s ease;

  &:hover {
    background: ${(props) => props.theme.text};
    color: ${(props) => props.theme.background};
  }
`;

const MainDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  gap: 24px;
`
const LogoName = styled.h1`
    font-size: 32px;
    color: gray;
`
const Item = styled(Link)<NavItemProps>`
    color: ${(props) => (props.$active ? props.theme.hoverText : props.theme.text)};
    text-decoration: none;
    font-size: 24px;
    padding: 12px;
    border-radius: 16px;
    &:hover {
        color: ${(props) => (props.theme.hoverText)}
    }
`

export default Navbar;// color: #bd83f7;