import { TextAlignJustify } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import logo from "../../assets/logolookbella.png";
import { Buttons, Container, IconButton, Li, Nav, Ul } from "./styles";
import ButtonAgendar from "../ButtonAgendar";


type HeaderProps = { 
    onOpen: () => void; 
    onNavigate: (section: string) => void; //type da função onNavigate que é passada como prop para o Header, que é  //uma função que recebe uma string (o nome da seção) e não retorna nada (void)
    activeSection: string;

};                                      

function Header({ onNavigate, onOpen, activeSection }: HeaderProps) { // Componente Header que recebe a função onNavigate como prop
   
   
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false); // Estado para controlar se o menu no "modo mobile" está aberto ou fechado

    // Referência para o UL do menu -Adicionar a referenci na ul do menu para verificar se o clique foi fora do menu
    const menuRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            // Se o menu no "modo mobile"estiver aberto e o clique for fora do menu, fechar o menu
            if (isMenuOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        }

        // Adiciona o listener no documento
        document.addEventListener("mousedown", handleClickOutside);

        // Remove o listener ao desmontar o componente
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMenuOpen]); // executa o efeito quando isMenuOpen mudar

    return ( 
        <Container>

            <img src={logo} alt="Logo" />

            <Nav>
                <Buttons onClick={() => onNavigate('inicio')} $active={activeSection === 'inicio'}>INÍCIO</Buttons>
                <Buttons onClick={() => onNavigate('servicos')} $active={activeSection === 'servicos'}>SERVIÇOS</Buttons>
                {/* <Buttons onClick={() => onNavigate('transformacoes')} active={activeSection === ''}>TRANSFORMAÇÕES</Buttons> */}
                <Buttons onClick={() => onNavigate('equipe')} $active={activeSection === 'equipe'} >EQUIPE</Buttons>
                <Buttons onClick={() => onNavigate('localizacao')} $active={activeSection === 'localizacao'} >LOCALIZAÇÃO</Buttons>
                <Buttons onClick={() => onNavigate('sobre')} $active={activeSection === 'sobre'}>SOBRE</Buttons>
               

                <ButtonAgendar onOpen={onOpen} />
            </Nav>
            <IconButton>
                <TextAlignJustify onClick={() => setIsMenuOpen(!isMenuOpen)} />
            </IconButton>

            {isMenuOpen && ( // Renderiza o menu apenas se isMenuOpen for true
                <Ul ref={menuRef}>
                    <Li onClick={() => { onNavigate('inicio'); setIsMenuOpen(!isMenuOpen); }} $active={activeSection === 'inicio'}>INíCIO</Li>
                    <Li onClick={() => { onNavigate('servicos'); setIsMenuOpen(!isMenuOpen); }} $active={activeSection === 'servicos'}>SERVIÇOS</Li>
                    <Li onClick={() => { onNavigate('equipe'); setIsMenuOpen(!isMenuOpen); }} $active={activeSection === 'equipe'}>EQUIPE</Li>
                    <Li onClick={() => { onNavigate('localizacao'); setIsMenuOpen(!isMenuOpen); }} $active={activeSection === 'localizacao'}>LOCALIZAÇÃO</Li>
                    <Li onClick={() => { onNavigate('sobre'); setIsMenuOpen(!isMenuOpen); }} $active={activeSection === 'sobre'}>SOBRE</Li>
                    
                </Ul>
            )}

        </Container>
    );
}
export default Header;