import styled, { useTheme } from "styled-components"
import { Link, useLocation } from 'react-router-dom';
import Icons from "../assets/icons";
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
  const theme = useTheme();
    return (
        <MainDiv>
            <div>
            <LogoName>Noëlle</LogoName>
            </div>
            <RightMenu>
                <NavMenuItem to="/">Home</NavMenuItem>
                <NavMenuItem to="/about">About</NavMenuItem>
                <NavMenuItem to="/skills">Skills</NavMenuItem>
                <NavMenuItem to="/portfolio">Portfolio</NavMenuItem>
                <NavMenuItem to="/contact">Contact</NavMenuItem>
                <ThemeToggle onClick={toggleTheme}>{isDark ? <Icons.Sun style={{color: theme.text}}/> : <Icons.Moon style={{color: theme.text}} />}</ThemeToggle>
            </RightMenu>
        </MainDiv>
    )
}

const RightMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ThemeToggle = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;  
  transition: background 0.3s ease;
  background: none;
  border: none;
  padding: 12px;
  border-radius: 16px;
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
    color: ${(props) => props.theme.header};
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