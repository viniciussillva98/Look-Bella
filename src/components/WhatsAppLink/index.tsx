
import ImageWhats from '../../assets/logoW.png';
import { Image, LinkWhats } from './styles';

type WhatsProps = {
    onOpen: ()=> void
}

const WhatsappLink = ({onOpen}: WhatsProps) => { 

    return (
        <LinkWhats onClick={onOpen}>
            <Image src={ImageWhats} alt="WhatsApp" />
        </LinkWhats>
    );
};

export default WhatsappLink;