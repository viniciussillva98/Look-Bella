import ButtonAgendar from "../../../components/ButtonAgendar"
import { Container, Subtitle, Title } from "./styles";

type sectionProp = { 
    onOpen: () => void; 
}

const SectionMessage = ({ onOpen }: sectionProp) => {

    return (
        <Container>
            <Title>Você merece esse momento. Sempre.</Title>
            <Subtitle>Mais do que beleza, proporcionamos momentos de cuidado,< br />
                bem-estar e valorização da sua essência.</Subtitle>
            <ButtonAgendar onOpen={onOpen} />
        </Container>
    )
}

export default SectionMessage