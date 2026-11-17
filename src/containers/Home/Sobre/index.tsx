import { forwardRef } from 'react';
import SobreImage from '../../../assets/salaoLookBella.png'; // Importe a imagem que deseja usar
import { Container, Image, SobreContent, Text, Title } from './styles';

// Definindo o tipo da ref para um elemento HTMLDivElement (ou o que seu Container renderizar)
const Sobre = forwardRef<HTMLDivElement>((_props, ref) => {
    return (
        <Container ref={ref}>
            <SobreContent>
                <Title> <span>Quem é a</span> Look Bella</Title>
                <Text> Na Look Bella, cada detalhe é pensado para realçar sua beleza e despertar sua autoestima.< br/>
                     <span>Um espaço onde cuidado, elegância e bem-estar se encontram para tornar cada experiência especial.</span></Text>
            </SobreContent>
            <Image src={SobreImage} alt="Sobre a Look Bella" />
        </Container>
    );
});

export default Sobre;