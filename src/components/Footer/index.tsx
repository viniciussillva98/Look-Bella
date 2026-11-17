
import logoLookBella from "../../assets/logolookbella.png";
import { ContainerContato, ContainerFooter, ContainerLeft, ContainerRight, ContainerTextHeader, ContentFooter, FooterAll, HeaderFooter, Image, InfoBy, IntaImage, Links, SubTextHeader, TerxtHeader, TextContato, TextFooter, TextLeft, TitleLeft, TitleRight, WhatsImage } from "./styles";
import ButtonAgendar from "../ButtonAgendar";
import insta from "../../assets/intaoriginal.jpg"
import whats from "../../assets/logoW.png"

type FooterProps = {
    onNavigate: (section: string) => void;
    onOpen: () => void
};

const Footer = (({ onNavigate, onOpen }: FooterProps) => {

    const whatsMessage = `
        Olá, Vinícius! Conheci seu portfólio e gostei muito do seu trabalho. Podemos conversar?
        `
    const phoneNumber = '5551991738549';

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsMessage)}`;

    return (
        <ContainerFooter>
            <HeaderFooter>
                <ContainerTextHeader>
                    <TerxtHeader>O momento de cuidar de você é agora!</TerxtHeader>
                    <SubTextHeader>Estamos prontas para receber você com atenção, carinho e serviços pensados para realçar sua beleza.</SubTextHeader>
                </ContainerTextHeader>
                <ButtonAgendar onOpen={onOpen} />
            </HeaderFooter>

            <ContentFooter>
                <ContainerLeft>
                    <Image src={logoLookBella} alt="Logo Look Bella" onClick={() => onNavigate('inicio')} />
                    <TitleLeft translate="no">Feita para realçar sua beleza!</TitleLeft>
                    <TextLeft>Centro de Beleza, Estética e Bem-estar</TextLeft>
                </ContainerLeft>

                <ContainerRight>
                    <TitleRight>Informações de Contato</TitleRight>
                    <ContainerContato>
                        <TextContato><span>Telefone: </span><a href="tel:(11) 1234-5678">11 1234-5678</a></TextContato>
                        <TextContato><span>Email: </span><a href="mailto:contato@lookbella.com">contato@lookbella.com</a></TextContato>
                        <TextContato><span>Endereço: </span>Av. Independencia, 752 - São Leopoldo/RS</TextContato>
                    </ContainerContato>
                </ContainerRight>
            </ContentFooter>

            <FooterAll>
                <TextFooter>
                    <p>© 2026 Look Bella, 00.907.672/0001-91 - Todos os direitos reservados.</p>
                    <InfoBy>
                        <p>Desenvolvido por Vinícius Silva</p>
                        <Links href="https://www.instagram.com/_viniciussilva98/"><IntaImage src={insta} /></Links>
                        <Links href={whatsappURL}><WhatsImage src={whats} /></Links>
                    </InfoBy>
                </TextFooter>
            </FooterAll>
        </ContainerFooter>
    );
});

export default Footer