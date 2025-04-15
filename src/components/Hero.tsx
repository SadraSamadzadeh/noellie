import styled from "styled-components";
function Hero() {
  return (
    <Container>
    <TextContainer>
        <Header>
            Hi, Im Noëlle
        </Header>
        <SubHeader>
            Mediaformgeving Student
        </SubHeader>
        <Description>
        blah blah blah lorem ipsum shit
        </Description>
        <Button>
            Contact Me
        </Button>
    </TextContainer>
    <ImageContainer>
        <img src='../assets/image.png'/>
    </ImageContainer>
    </Container>
  )
}


const Container = styled.div`
display: flex;
padding: 20px;
`;
const ImageContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;
const TextContainer = styled.div`
display: flex;
flex-direction: column;
gap: 16px;
`;
const Header = styled.div`
font-size: 64px;
color: ${(props) => props.theme.header};
`;
const SubHeader = styled.div`
font-size: 48px;
color: ${(props) => props.theme.subHeader}
`; 
const Description = styled.div`

`;
const Button = styled.button`
`;
export default Hero