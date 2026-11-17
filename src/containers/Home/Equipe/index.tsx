import { forwardRef } from "react";
import { EquipeMembers } from "../../../components/ArrayEquipe";
import SlideVirtual from "../../../components/Slide";
import { Container } from "./styles";


const Equipe = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <Container ref={ref}>
      <h1>Na Look Bella, só profissionais especializados</h1>
      <SlideVirtual info={EquipeMembers} />
    </Container>
  );
});

export default Equipe;