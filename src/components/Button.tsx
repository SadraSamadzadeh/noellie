import styled from "styled-components";
function Button({children, Icon} : {children: React.ReactNode, Icon: React.ReactNode}) {
  return (
    <Container>
        <ButtonPrimary>
            {children}
        </ButtonPrimary>
        <SvgPlace>
            {Icon}
        </SvgPlace>
    </Container>
  )
}





const ButtonPrimary = styled.button`
    border: none;
    background: none;
    color: ${(props) => props.theme.buttonText};
    font-weight: bold;
    font-size: 16px;
`;
const SvgPlace = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Container = styled.div`    
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${(props) => props.theme.primary};
    padding: 8px;
    border-radius: 12px;
    max-width: 150px;
}`

export default Button;