import { Button } from "./stiles"

type ButtonAgendarProps = { 
    onOpen: () => void;
};

const ButtonAgendar = ({ onOpen }: ButtonAgendarProps) => {

    return(
        <Button onClick={onOpen}>AGENDAR HORARIO</Button>
    )
}

export default ButtonAgendar