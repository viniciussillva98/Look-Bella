import { Check } from "lucide-react";
import { Container, ContainerCheck, ContainerTitleFeature, Content,  ItemFeature, SubTitleFeature, Title, TitleFeature } from "./styles";


interface Feature {
    title?: string;
    subtitle?: string;
}

const features: ReadonlyArray<Feature> = [

    {
       
        title: "Cuidado em cada detalhe",
        subtitle: "Cada atendimento é realizado com atenção e dedicação, respeitando a individualidade de cada cliente."
    },
    {
       
        title: "Beleza e bem-estar",
        subtitle: "Uma experiência pensada para renovar sua autoestima e proporcionar momentos especiais de autocuidado."
    },

    {
        
        title: "Qualidade e excelência",
        subtitle: "Utilizamos produtos selecionados e técnicas que valorizam os resultados de cada procedimento."
    },
    {
       
        title: "Profissionais qualificados",
        subtitle: "Uma equipe preparada para oferecer serviços com profissionalismo, cuidado e dedicação."
    },
    {
      
        title: "Atendimento acolhedor",
        subtitle: "Um ambiente onde você se sente à vontade, valorizada e bem cuidada em todos os momentos."
    },
    {
        
        title: "Beleza em um só lugar",
        subtitle: "Diversos serviços reunidos para proporcionar praticidade, cuidado e uma experiência completa."
    },

]

function PorqueEscolher() {

    return (
        <Container>
            <Title translate="no">Porque Escolher a <br /><span>Look Bella?</span></Title>
            <Content>
                {features.map((feature, index) => (
                    <ItemFeature key={index}>
                        <ContainerCheck>
                            <Check size={18} color="#1A1A1A" />
                        </ContainerCheck>
                        <ContainerTitleFeature>
                            <TitleFeature translate="no">{feature.title}</TitleFeature>
                            <SubTitleFeature translate="no">{feature.subtitle}</SubTitleFeature>
                        </ContainerTitleFeature>
                    </ItemFeature>
                ))}
            </Content>
        </Container>
    )
}

export default PorqueEscolher;