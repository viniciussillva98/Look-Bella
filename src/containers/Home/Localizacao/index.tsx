import { Clock4, MapPin, MoveRight, Phone } from "lucide-react"
import Map from "../../../components/Map"
import { Button, Container, ContatoContent, ContatoInfo, Content, ContentInfo, HorariosContent, HorariosInfo, Link, LocalizacaoContent, LocalizacaoInfo, Obs, SubTitleHorarios, SubTitleInfo, Title, TitleContato, TitleHorario, TitleInfo } from "./styles"
import { forwardRef } from "react"
import {phoneNumber} from "../Contato"

type LocalizacaoProps = {
    onOpen: () => void; 

}

const Localizacao = forwardRef<HTMLDivElement, LocalizacaoProps>(({ onOpen }, ref) => {

    return (
        <Container ref={ref}>
            <Content>
                <ContentInfo>
                    <Title>Onde fica a Look Bella?</Title>

                    <LocalizacaoContent>
                        <MapPin size={20} color="#a8926d"/>
                        <LocalizacaoInfo>
                            <TitleInfo>Look Bella</TitleInfo>
                            <SubTitleInfo>R. Independência, 1250 </SubTitleInfo>
                            <SubTitleInfo><span>Centro, São Leopoldo, RS</span></SubTitleInfo>
                        </LocalizacaoInfo>
                    </LocalizacaoContent>

                    <HorariosContent>
                        <Clock4 size={20} color="#a8926d"/>
                        <HorariosInfo>
                            <TitleHorario>HORÁRIOS</TitleHorario>
                            <SubTitleHorarios>Das 08h30 às 19h00</SubTitleHorarios>
                            <SubTitleHorarios>de terça a sábado</SubTitleHorarios>
                            <Obs>Fechado domingo e segunda</Obs>
                        </HorariosInfo>
                    </HorariosContent>

                    <ContatoContent>
                        <Phone size={20} color="#a8926d"/>
                        <ContatoInfo>
                            <TitleContato>WHATSAPP</TitleContato>
                            <Link onClick={onOpen}>{phoneNumber}</Link>
                        </ContatoInfo>
                    </ContatoContent>

                    <Button onClick={onOpen}>AGENDAR MINHA VISITA<MoveRight size={15}/></Button>
                </ContentInfo>
                <Map />
            </Content>
        </Container>
    )

})
export default Localizacao