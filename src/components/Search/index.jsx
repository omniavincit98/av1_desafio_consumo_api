import { Container } from "./styles"

export function Search() {
    return (
        <Container>
            <h1>Publicações</h1>
            <input type="search" name="" id="" placeholder="Buscar conteúdo"/>
            <div id="countPost">
                6 publicações
            </div>
        </Container>
    )
}