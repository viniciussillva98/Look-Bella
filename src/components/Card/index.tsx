import {  ContainerCard, Text } from "./styles"

type SlideVirtualProps = { // Define o tipo de props que o componente espera receber
    item: {
        image: string;
        profissionalName: string;
    };
};


const Card = ({ item }: SlideVirtualProps) => {

    return (
        
        <ContainerCard style={{ backgroundImage: `url(${item.image})` }}>
            <Text>{item.profissionalName}</Text>
        </ContainerCard>
      
    )
}

export default Card