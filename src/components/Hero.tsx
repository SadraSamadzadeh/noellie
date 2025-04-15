import styled from "styled-components";
import Button from "./Button";
import Icons from "../assets/icons";
function Hero() {
  return (
    <Container>
    <TextContainer>
        <Header>
            Hi, I'm Noëlle
        </Header>
        <SubHeader>
            Media Design Student
        </SubHeader>
        <Description>
        Media Designer who is an enthousiastic animatior, can take professional photographs, 
        <br/>has skill and heart for design. But the most important passion would be to tell a story with art.
        </Description>
        <Button Icon={<Icons.Telegram/>}>
            Contact Me
        </Button>
    </TextContainer>
    <ImageContainer>
        {/* <img src='../assets/image.png'/> */}
    </ImageContainer>
    </Container>
  )
}


const Container = styled.div`
display: flex;
padding: 20px;
margin: 200px;
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
font-size: 56px;
color: ${(props) => props.theme.textPrimary};
`;
const SubHeader = styled.div`
font-size: 36px;
color: ${(props) => props.theme.textSecondary}
`; 
const Description = styled.div`
    color: ${(props) => props.theme.textPrimary};
    font-size: 20px;
`;
export default Hero