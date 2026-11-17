
import { forwardRef} from 'react';
import { Cardfeatures, Container, Sectionfeatures, SubTitle, Title } from './styles';
import unha from '../../../assets/unha.png';
import cabelo from '../../../assets/cabelo.png';
import rosto from '../../../assets/rosto.png';
import corpo from '../../../assets/corpo.png';

interface Feature {
    title: string;
    description: string;
    //button: JSX.Element;
    image: string;
}

// Definindo o tipo da ref para um elemento HTMLDivElement (ou o que seu Container renderizar)
const Servicos = forwardRef<HTMLDivElement>((_props, ref) => {


    const features: ReadonlyArray<Feature> = [
        //ReadonlyArray significa que é um array imutável, apenas para leitura.
        {
            image: unha,
            title: "Unhas",
            description:
                "Manicure, pedicure, esmaltação em gel e alongamentos.",
        },
        {
            image: cabelo,
            title: "Cabelo",
            description:
                "Cortes, coloração, alisamento e tratamentos capilares.",
        },
        {
            image: rosto,
            title: "Rosto",
            description:
                "Sobrancelhas, lash lifting, limpeza de pele e maquiagem.",
        },
        {
            image: corpo,
            title: "Corpo",
            description:
                "Depilação para axila, pernas, virilha e corpo todo.",
        },
       
    ];


    return (
        <Container ref={ref}>
            <Title>Quais serviços você encontra< br/> na Look Bella?</Title>
            <SubTitle>No Centro de São Leopoldo, a Look Bella reúne profissionais especializados em cabelo, unhas, rosto, corpo<br />e bem-estar.<span> O salão atende clientes da cidade e da região e conta com estacionamento próprio.</span></SubTitle>
           
           
            <Sectionfeatures>
                {features.map((feature) => (
                    <Cardfeatures key={feature.title} $img={feature.image}>
                        <h1>{feature.title}</h1>
                        <p>{feature.description}</p>
                    </Cardfeatures>
                ))}
            </Sectionfeatures>
        </Container>
    );
});

export default Servicos;