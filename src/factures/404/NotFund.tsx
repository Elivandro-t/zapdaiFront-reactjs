import { useNavigate } from "react-router-dom";
import { Button, Container, Image, Subtitle, Title, ZapDaiLogo } from "./notFundcss";
import logo from "../../assets/logowhite.png"
export const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <Image src={logo} alt="404" />
            <Title>404 - Página Não Encontrada</Title>
            <Subtitle>Ops! Parece que você se perdeu no ZapDai.</Subtitle>
            <Button onClick={() => navigate("/")}>Voltar para Home</Button>
            <ZapDaiLogo>© ZapDai</ZapDaiLogo>
        </Container>
    );
};