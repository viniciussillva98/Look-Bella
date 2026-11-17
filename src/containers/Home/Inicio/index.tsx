import { forwardRef } from 'react';
import { Container, Content, Title } from './styles';




// Definindo o tipo da ref para um elemento HTMLDivElement (ou o que seu Container renderizar)
const Inicio = forwardRef<HTMLDivElement>((_props, ref) => {
    return (
        <Container ref={ref}>
            <Content>
                <Title>Cuide de você.<br />Ame cada detalhe</Title>
            </Content>
        </Container>
    );
});

export default Inicio;