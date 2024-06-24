import { ScrollContainer } from "./styles";

const Scroll = () => (
    <ScrollContainer>
        {/* Conteúdo que requer rolagem */}
        <div style={{ height: '200vh' }}>
            Este é um conteúdo longo que requer rolagem.
        </div>
    </ScrollContainer>
);

export default Scroll;