import { useEffect, useRef, useState } from 'react';
import Header from '../../components/Header';
import Servicos from './Servicos';
import Inicio from './Inicio';

import Footer from '../../components/Footer';
import WhatsappLink from '../../components/WhatsAppLink';
import Contato from './Contato';
import Sobre from './Sobre';
import PorqueEscolher from './PorqueEscolher';
import Equipe from './Equipe';
import SectionMessage from './SectionMessage';
import Localizacao from './Localizacao';

export default function Home() {
    const inicioRef = useRef<HTMLDivElement>(null);
    const servicosRef = useRef<HTMLDivElement>(null);
    const sobreRef = useRef<HTMLDivElement>(null);
    const equipeRef = useRef<HTMLDivElement>(null);
    const localizacaoRef = useRef<HTMLDivElement>(null);

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const [activeSection, setActiveSection] = useState<string>('inicio'); //estado para armazenar a seção ativa

    useEffect(() => {
        //         O que está acontecendo aqui?
        // - IntersectionObserver: observa quando uma seção entra na área visível da tela.
        // - threshold: 0.5: considera a seção visível quando aproximadamente 50% dela está na tela.
        // - setActiveSection: atualiza o estado com o identificador da seção.
        // - observer.disconnect(): encerra a observação quando o componente é desmontado.

        const sections = [
            { id: 'inicio', ref: inicioRef },
            { id: 'servicos', ref: servicosRef },
            { id: 'equipe', ref: equipeRef },
            { id: 'localizacao', ref: localizacaoRef },
            { id: 'sobre', ref: sobreRef },
        ];

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: '-15% 0px -65% 0px',
                threshold: 0,
            }
        );

        sections.forEach(({ id, ref }) => {
            if (ref.current) {
                ref.current.id = id;
                observer.observe(ref.current);
            }
        });

        return () => observer.disconnect();
    }, []);

    const handleNavigate = (section: string) => {
        switch (section) {
            case 'inicio':
                inicioRef.current?.scrollIntoView({ behavior: 'smooth' });
                break;

            case 'servicos':
                servicosRef.current?.scrollIntoView({ behavior: 'smooth' });
                break;

            case 'equipe':
                equipeRef.current?.scrollIntoView({ behavior: 'smooth' });
                break;

            case 'localizacao':
                localizacaoRef.current?.scrollIntoView({ behavior: 'smooth' });
                break;

            case 'sobre':
                sobreRef.current?.scrollIntoView({ behavior: 'smooth' });
                break;


            default:
                break;

        }
    };





    return (
        <>
            <Header onNavigate={handleNavigate} onOpen={() => setIsOpen(true)} activeSection={activeSection} />
            <>
                <Inicio ref={inicioRef} />
                <Servicos ref={servicosRef} />
                <SectionMessage onOpen={() => setIsOpen(true)} />
                <Equipe ref={equipeRef} />
                <PorqueEscolher />
                <Localizacao ref={localizacaoRef} onOpen={() => setIsOpen(true)}/>
                <Sobre ref={sobreRef} />
                {isOpen && (
                    <Contato onClose={() => setIsOpen(false)} />
                )}
                <WhatsappLink onOpen={() => setIsOpen(true)} />
                <Footer onNavigate={handleNavigate} onOpen={() => setIsOpen(true)} />
            </>
        </>
    );
}