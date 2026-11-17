import { useState } from 'react';
import { Button, ButtonOnclose, Container, ContainerForm, ContentForm, Input, SubTitle, Title } from './styles';
import { X } from 'lucide-react';

type ContatoProps = {
    onClose: () => void;
};

export const phoneNumber = '5551991738549'; // Substitua pelo número desejado sem (DDD + código país, sem "+" ou espaços)

// Definindo o tipo da ref para um elemento HTMLDivElement (ou o que seu Container renderizar)
const Contato = (({ onClose }: ContatoProps) => { // Dizendo que o onClose vai chegar via props

    const [name, setName] = useState<string>('')
    const [telefone, setTelefone] = useState<string>('')

    const [error, setError] = useState<string>('');

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        e.stopPropagation(); 

        // Remove espaços, parênteses, traços e outros caracteres do telefone
        const phone = telefone.replace(/\D/g, '');

        // Valida se todos os campos foram preenchidos
        if (!name.trim() || !telefone.trim() ) {
            setError('Por favor, preencha todos os campos.');
            return;
        }

        // Valida a quantidade de dígitos do telefone
        if (phone.length !== 10 && phone.length !== 11) {
            setError('Por favor, informe um número de telefone válido.');
            return;
        }

        setError('');

        

        // Monta a mensagem com os dados preenchidos no formulário

        const whatsMessage = `
        Olá, Look Bella! Gostaria de entrar em contato.
        Meu nome é *${name}* e meu telefone é *${telefone}*
        gotaria de falar com a equipe.
        `

        // Codifica a mensagem para utilizá-la na URL ou seja // Cria a URL do WhatsApp com o número e a mensagem codificada

            const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsMessage)}`;
            
        // Abre o WhatsApp em uma nova aba
        window.open(whatsappURL, '_blank', 'noopener,noreferrer');

        //No final de tudo Limpa todos os campos do formulário
        setName('');
        setTelefone('');
        onClose()

    }
    return (
        
        <Container onClick={onClose}>
            <ContainerForm  onClick={(e) => e.stopPropagation()}>
            <Title>Vamos conversar?</Title>
            <SubTitle>Informe seus dados para continuar no WhatsApp.</SubTitle>
            <ButtonOnclose onClick={onClose}><X size={18}/></ButtonOnclose>
            

            <ContentForm onSubmit={(e) => onSubmit(e)}>
                <Input type="text" value={name} onChange={(e) => setName(e.target.value)} id="name" placeholder="Nome" />
                <Input type="tel" value={telefone} onChange={(e) => setTelefone(e.target.value)} id="telefone" placeholder="Telefone" />
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <Button type="submit">Continuar no WhatsApp</Button>
            </ContentForm>
            </ContainerForm>
        </Container>
    );
});

export default Contato; 